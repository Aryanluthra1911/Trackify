import React from 'react'
import Heading from './Heading'

const Gst_sales_block = ({data,selected,setselected}) => {
    return (
        <div onClick={()=>{
            setselected(data.bill_no);
        }} className={`w-[97%] ${selected === data.bill_no?'border-2 border-sky-400' : 'hover:border-1 hover:border-white'} h-9 bg-[#262626] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around `}>
            <Heading  label={`${data.element}`}/>
            <Heading  label={`${data.bill_no}`}/>
            <Heading  label={`${data.purity}`}/>
            <Heading  label={`${data.mode_of_payment}`}/>
            <Heading  label={`${data.date}`}/>
            <Heading  label={`${data.weight}g`}/>
            <Heading  label={`${data.rate}`}/>
            <Heading  label={`${data.cost_exc_gst}`}/>
            <Heading  label={`${data.cgst}`}/>
            <Heading  label={`${data.sgst}`}/>
            <Heading  label={`${data.total}`}/>
        </div>
    )
}

export default Gst_sales_block