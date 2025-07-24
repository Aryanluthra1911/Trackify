import React from 'react'
import Heading from './Heading'
import Details from './Details'

const Custom_bill_sales = () => {
    return (
        <div className='h-15 w-[97%] bg-[#262626] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around hover:border-1 hover:border-white'>
            <Details label={"Cost :"} output ={'1200'}/>
            <Details label={"Quantity :"} output ={'3'}/>
            <Details label={"Total Cost :"} output ={'3600'}/>
        </div>
    )
}

export default Custom_bill_sales