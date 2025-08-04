import React, { useState } from 'react'
import Heading from './Heading'
import Order_componet from './Order_componet';

const Order_detail_block = ({data,setselected,selected}) => {
    const [active,setactive] = useState(false);
    return (
        <div onClick={()=>{
            setselected(data.id)
            console.log(data.id)
        }}
        className={`h-auto ${selected === data.id?'border-2 border-sky-400' : 'hover:border-1 hover:border-white'} min-h-10 w-[97%] bg-[#262626] shadow-[#262626] shadow-m rounded-2xl space-y-3`}>
            <div className='h-full w-full rounded-2xl flex items-center justify-around '>
                <Heading label= {`${data.date}`}/>
                <Heading label= {`${data.ph_no}`}/>
                <Heading label= {`${data.address}`}/>
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
                <Order_componet label={'product'} output={`${data.product}`}/>
                <Order_componet label={'purity'} output={`${data.purity}`}/>
                <Order_componet label={'weight'} output={`${data.weight}g`}/>
                <Order_componet label={'rate'} output={`${data.rate}`}/>
                <Order_componet label={'deposit'} output={`${data.deposit}`}/>
                <Order_componet label={'total'} output={`${data.total}`}/>
            </div>
            :
            <></>}
        </div>
    )
}

export default Order_detail_block