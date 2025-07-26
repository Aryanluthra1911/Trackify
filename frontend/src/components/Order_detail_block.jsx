import React, { useState } from 'react'
import Heading from './Heading'
import Order_componet from './Order_componet';

const Order_detail_block = () => {
    const [active,setactive] = useState(false);
    return (
        <div className='h-auto min-h-10 w-[97%] bg-[#262626] shadow-[#262626] shadow-m rounded-2xl space-y-3 hover:border-1 hover:border-white'>
            <div className='h-full w-full rounded-2xl flex items-center justify-around '>
                <Heading label= "1/6/25"/>
                <Heading label= "7048997027"/>
                <Heading label= "qu 294-c pitampura"/>
                <button onClick={()=>{
                    setactive(!active)
                }} className='flex items-center bg-[#262626] justify-center h-[80%] w-[8%]  rounded-4xl text-[#ffff]  hover:bg-slate-700 text-2xl'>
                    {active ? 
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor" 
                        width="24" height="24" className="transform -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </>
                    :
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className="transform rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </>
                    }
                </button>
            </div>
            {active?
            <div className='h-auto min-h-20 w-full flex items-center justify-around flex-wrap'>
                <Order_componet label={'product'} output={"tops"}/>
                <Order_componet label={'purity'} output={"18k"}/>
                <Order_componet label={'weight'} output={"tops"}/>
                <Order_componet label={'rate'} output={"tops"}/>
                <Order_componet label={'deposit'} output={"12000"}/>
                <Order_componet label={'total'} output={"120000"}/>
            </div>
            :
            <></>}
        </div>
    )
}

export default Order_detail_block