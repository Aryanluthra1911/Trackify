import React, { useState } from 'react'
import Heading from './Heading'

const Sales_block = ({data,setselected,selected}) => {
    const [active,setactive]=useState(false)
    return (
        <div onClick={()=>{
            setactive(!active)
            if(active){
                setselected(data.id)
            }
            else{
                setselected('')
            }
        }} className={`w-[97%] ${selected === data.id ?'border-2 border-sky-400' : 'hover:border-1 hover:border-white'} h-9 bg-[#1a1a1a] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around `}>
            <Heading label={`${data.product}`}/>
            <Heading label={`${data.weight} g`} />
            <Heading label={`${data.rate}`}/>
            <Heading label={`₹${data.labour_cost}`}/>
            <Heading label={`₹${data.total}`}/>
            <Heading label={`${data.date}`}/>
            <Heading label={`${data.time}`}/>
        </div>
    )
}

export default Sales_block