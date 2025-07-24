import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { useNavigate } from 'react-router-dom'
import Sales_block from '../components/Sales_block'


const Sales = () => {
    const navigate = useNavigate()
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
                                <Searchbar/>
                                <button className='h-10 w-30 bg-[#2b2b2b] text-white border-black hover:bg-red-500 border-2 rounded-2xl'>Clear Sales</button>
                                <button onClick={()=>{
                                    navigate("/dashboard")
                                }} className='h-10 w-30 bg-[#2b2b2b] text-white border-black hover:bg-green-300 hover:text-black border-2 rounded-2xl'>Add sales</button>
                            </div>
                        </div>
                        <div className=' h-[90%] w-[97%] overflow-y-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-600'>
                            <Sales_block/>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales