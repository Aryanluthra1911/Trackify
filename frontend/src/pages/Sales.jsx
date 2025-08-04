import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { data, useNavigate } from 'react-router-dom'
import Sales_block from '../components/Sales_block'
import axios from 'axios'
import Heading from '../components/Heading'


const Sales = () => {
    const navigate = useNavigate()
    const [search_input,setsearch_input] = useState("")
    const [sales,setsales]=useState([])
    const displaysales = async()=>{
        const response = await axios.get('http://localhost:4444/sales')
        setsales(response.data);
    }
    useEffect(() => {
        displaysales()
    }, [])
    const clearsales = async()=>{
        try{
            await axios.get("http://localhost:4444/sales/deleteallsales")
            await displaysales()
        }
        catch{
            console.error("Error adding sale:", err);
            alert("Failed to delete sales");
        }
    }
    const findsales = async(search_input)=>{
        if(search_input === '' || isNaN(parseFloat(search_input))){
            displaysales()
            return;
        }
        try{
            const response=await axios.get(`http://localhost:4444/sales/weight/${parseFloat(search_input)}`)
            setsales(response.data)
            
        }
        catch(err){
            console.error("Error adding sale:", err);
            alert("Failed to find sales");
        }
    }
    const [selected,setselected] =useState('')
    const deletebyid=async()=>{
        if(selected === '' || isNaN(parseInt(selected))){
            displaysales()
            alert('No sale selected')
            return;
        }
        try{
            await axios.get(`http://localhost:4444/sales/deletebyid/${parseInt(selected)}`)
            await displaysales()
        }
        catch(err){
            console.error("Error adding sale:", err);
            alert("Failed to find sales");
        }
    }
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                <div className='h-full w-[93%] flex items-center justify-center'>
                    <div className='h-[97%] w-[98%] space-y-3 bg-[#202020] border-2 border-black rounded-2xl flex justify-center items-center flex-col '>
                        <div className=' h-[10%] w-[97%] flex items-center justify-between border-b-5 border-[#2b2b2b] rounded-xl'>
                            <div className='text-4xl text-[#ffff] flex items-center justify-center w-[10%]'>
                                Sales
                            </div>
                            <div className='w-[40%] flex justify-around items-center '>
                                <Searchbar
                                search_input={search_input}
                                findsales={findsales} 
                                setsearch_input = {setsearch_input}/>
                                <button onClick={clearsales} className='h-10 w-30 bg-[#2b2b2b] text-white border-black hover:bg-red-500 border-2 rounded-2xl'>
                                    Clear Sales
                                </button>
                                <button onClick={()=>{
                                    deletebyid()
                                }} className='h-10 w-30 bg-[#2b2b2b] text-white border-black hover:bg-red-500 border-2 rounded-2xl'>Delete Sale</button>
                            </div>
                        </div>
                        <div className='h-[82%] w-[97%] overflow-y-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-600 space-y-3'>
                            <div className='h-10 w-[97%] rounded-2xl bg-[#262626] flex justify-around items-center sticky top-0'>
                                <Heading label={"Product"}/>
                                <Heading label={"weight"}/>
                                <Heading label={"rate"}/>
                                <Heading label={"labour"}/>
                                <Heading label={"total"}/>
                                <Heading label={"date"}/>
                                <Heading label={"time"}/>
                            </div>
                            {sales.map((sale,idx)=>{
                                return <Sales_block selected={selected} data={sale} key={idx} setselected={setselected} />
                            })}                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales