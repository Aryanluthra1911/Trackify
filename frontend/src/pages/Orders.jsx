import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Input_block from '../components/Input_block'
import Selected_input from '../components/Selected_input'

const Orders = () => {
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                <div className='h-full w-[93%] flex'>
                    <div className='w-[40%] h-160 mr-1 m-3 bg-[#202020] rounded-2xl flex flex-col space-y-3 items-center justify-around shadow-[#f9fafb] border-amber-50'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Order Details</h1>
                        <div className='h-[70%] w-[90%] flex flex-col justify-around'>
                            <Input_block label='Product'/>
                            <Selected_input label ='Purity'options={['','18k','22k','24k']}/>
                            <Input_block label='Element'/>
                            <Input_block label='Weight'/>
                            <Input_block label='Rate'/>
                            <Input_block label = 'Approx Total'/>
                            <Input_block label='Advance Deposit'/>
                            <Input_block label="Customer Ph no."/>
                            <Input_block label="Address"/>
                        </div>
                        <button className={` flex items-center justify-center h-[8%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}> Place Order</button>
                    </div>
                    <div className='flex flex-col items-center w-[57%] h-160 m-3 bg-[#202020] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-8'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Orders</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders