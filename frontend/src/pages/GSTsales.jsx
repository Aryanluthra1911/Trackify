import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { useNavigate } from 'react-router-dom'
import Sales_block from '../components/Sales_block'
import Gst_sales_block from '../components/Gst_sales_block'
import Heading from '../components/Heading'
import axios from 'axios';

const GSTsales = () => {
    const navigate =  useNavigate()
    const [search_input,setsearch_input] = useState('')
    const [gstsales,setgstsales]=useState([])
    const displaygstsales = async()=>{
        const response = await axios.get('http://localhost:4444/gstsales')
        setgstsales(response.data);
    }
    useEffect(() => {
        displaygstsales()
    }, [])
    const cleargstsales = async()=>{
        try{
            await axios.get("http://localhost:4444/gstsales/deletegstsales")
            await displaygstsales()
        }
        catch{
            console.error("Error adding sale:", err);
            alert("Failed to delete sales");
        }
    }
    const searchgstsale = async(search_input)=>{
        if(search_input === '' || isNaN(parseFloat(search_input))){
            displaygstsales()
            return;
        }
        try{
            const response = await axios.get(`http://localhost:4444/gstsales/billno/${parseInt(search_input)}`)
            setgstsales(response.data)
        }
        catch(err){
            console.error("Error adding sale:", err);
            alert("Failed to find sales");
        }
    }
    const [selected,setselected] =useState('')
    const deletebybillno=async()=>{
        if(selected === '' || isNaN(parseInt(selected))){
            displaygstsales()
            alert('No gstsale selected')
            return;
        }
        try{
            await axios.get(`http://localhost:4444/gstsales/deletebybillno/${parseInt(selected)}`)
            await displaygstsales()
        }
        catch(err){
            console.error("Error deleting gstsale:", err);
            alert("Failed to delete gstsales");
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
                            <div className='text-4xl text-[#ffff] flex items-center justify-center w-[15%]'>
                                GST Sales
                            </div>
                            <div className='w-[40%] flex justify-around items-center '>
                                <Searchbar
                                search_input={search_input}
                                findsales={searchgstsale}
                                setsearch_input={setsearch_input}
                                />
                                <button
                                onClick={cleargstsales}
                                className='h-10 w-30 bg-[#2b2b2b] text-white border-black hover:bg-red-500 border-2 rounded-2xl'>Clear Sales</button>
                                <button onClick={()=>{
                                    deletebybillno()
                                }} className='h-10 w-30 bg-[#2b2b2b] text-white border-black  hover:bg-red-500 border-2 rounded-2xl'>Delete Sales</button>
                            </div>
                        </div>
                        
                        <div className=' h-[82%] w-[97%] overflow-y-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-600 space-y-3'>
                            <div className='h-10 w-[97%] rounded-2xl bg-[#262626] flex justify-around items-center sticky top-0'>
                                <Heading label={"Element"}/>
                                <Heading label={"Bill no."}/>
                                <Heading label={"Purity"}/>
                                <Heading label={"Mop"}/>
                                <Heading label={"Date"}/>
                                <Heading label={"Weight"}/>
                                <Heading label={"Rate"}/>
                                <Heading label={"cost(exc gst)"}/>
                                <Heading label={"cgst."}/>
                                <Heading label={"sgst"}/>
                                <Heading label={"Total"}/>
                            </div>
                            {gstsales.map((sale,idx)=>{
                                return <Gst_sales_block data={sale} key={idx} selected={selected} setselected={setselected} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GSTsales