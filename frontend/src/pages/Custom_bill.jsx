import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Input_block from '../components/Input_block'
import Counter from '../components/Counter'
import Searchbar from '../components/Searchbar'
import Custom_bill_sales from '../components/Custom_bill_sales'
import axios from "axios"
import Heading from '../components/Heading'

const Custom_bill = () => {
    const [custombill , setcustombill]=useState([])
    const [counter,setcounter] = useState(0)
    const [cost,setcost]=useState("")
    const [search_input,setsearch_input]=useState('')
    const addcustombill = async()=>{
        await axios.post('http://localhost:4444/custombill/addbill',{
            email:'10@gmail.com',
            cost:parseInt(cost),
            quantity:counter,
        })
        displaycustombill()
        setcost('')
        setcounter(0)
    }
    const displaycustombill = async()=>{
        const response = await axios.get('http://localhost:4444/custombill')
        setcustombill(response.data)
    }
    
    
    const deletebills = async()=>{
        try{
            await axios.get('http://localhost:4444/custombill/deletebill')
            await displaycustombill()
        }
        catch(err){
            console.error("Error delete bill:", err);
            alert("Failed to delete bills");
        }
    }
    useEffect(()=>{
        displaycustombill()
    },[])

    const searchcustombill = async(search_input)=>{
        if(search_input === '' || isNaN(parseFloat(search_input))){
            displaycustombill()
            return;
        }
        try{
            const response = await axios.get(`http://localhost:4444/custombill/total/${parseFloat(search_input)}`)
            setcustombill(response.data)
        }
        catch(err){
            console.error("Error find bill:", err);
            alert("Failed to find bill");
        }
    }
    return (
        <div className='w-screen h-screen bg-[#1a1a1a]'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                <div className='h-full w-[93%] flex'>
                    <div className='w-[40%] h-160 mr-1 m-3 bg-gradient-to-b from-black to-[#0d0d0d] rounded-2xl flex flex-col space-y-3 items-center justify-around shadow-[#f9fafb] border-amber-50'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Custom Bill</h1>
                        <div className='h-[50%] w-[90%] space-y-3 flex flex-col'>
                            <Input_block onChange={(e)=>{
                                setcost(e.target.value)
                            }}value={cost} label = "Cost"/>
                            <Counter counter={counter} setcounter={setcounter}/>
                        </div>
                        <div className='h-[30%] w-full flex justify-center items-center space-x-3'>
                            <button onClick={()=>{
                                
                                setcost('')
                                setcounter(0)
                            }} className={` flex items-center justify-center h-[30%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-red-600 border-black  text-2xl`}> Clear Data</button>
                            <button onClick={async()=>{
                                try{
                                    await addcustombill()
                                }
                                catch (err) {
                                    console.error("Error adding sale:", err);
                                    alert("Failed to add sale");
                                }
                            }}className={` flex items-center justify-center h-[30%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}> Add Bill</button>
                        </div>
                        
                    </div>
                    <div className='flex flex-col items-center w-[57%] h-160 m-3 bg-gradient-to-b from-black to-[#0d0d0d] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-8'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Bill Sales</h1>
                        <div className='h-[7%] w-[90%]  flex justify-between items-center'>
                            <Searchbar
                            search_input={search_input}
                            findsales={searchcustombill} 
                            setsearch_input = {setsearch_input}
                            />
                            <button onClick={()=>{
                                deletebills()
                            }} className={` flex items-center justify-center h-10 w-30 bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-red-600 border-black `}>Clear Sales</button>
                        </div>
                        <div className='w-[97%] overflow-y-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-600 space-y-3'>
                            <div className='h-10 w-[97%] rounded-2xl bg-[#1a1a1a] flex justify-around items-center sticky top-0'>
                                <Heading label={"Cost"}/>
                                <Heading label={"Quantity"}/>
                                <Heading label={"Total"}/>
                            </div>
                            {custombill.map((bill,idx)=>{
                                return <Custom_bill_sales data={bill} key={idx}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom_bill