import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Input_block from '../components/Input_block'
import Counter from '../components/Counter'
import Searchbar from '../components/Searchbar'
import Custom_bill_sales from '../components/Custom_bill_sales'

const Custom_bill = () => {
    const [counter,setcounter] = useState(0)
    const [cost,setcost]=useState("")
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                <div className='h-full w-[93%] flex'>
                    <div className='w-[40%] h-160 mr-1 m-3 bg-[#202020] rounded-2xl flex flex-col space-y-3 items-center justify-around shadow-[#f9fafb] border-amber-50'>
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
                            <button className={` flex items-center justify-center h-[30%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}> Add Bill</button>
                        </div>
                        
                    </div>
                    <div className='flex flex-col items-center w-[57%] h-160 m-3 bg-[#202020] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-8'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Bill Sales</h1>
                        <div className='h-[7%] w-[90%]  flex justify-between items-center'>
                            <Searchbar/>
                            <button className={` flex items-center justify-center h-10 w-30 bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-red-600 border-black `}>Delete Sales</button>
                        </div>
                        <div className='  h-[70%] w-[90%] overflow-auto  space-y-3'>
                            <Custom_bill_sales/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Custom_bill