import React from 'react'
import Heading from './Heading'


const Custom_bill_sales = ({data}) => {
    return (
        <div className='h-9 w-[97%] bg-[#262626] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around hover:border-1 hover:border-white'>
            <Heading label={`₹${data.cost}`}/>
            <Heading label={`${data.quantity}`}/>
            <Heading label={`₹${data.total}`}/>
        </div>
    )
}

export default Custom_bill_sales