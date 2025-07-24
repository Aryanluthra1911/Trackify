import React from 'react'
import Datadisplay from './Datadisplay'

const Sales_block = () => {
    const product = 'Bali';
    return (
        <div className='w-auto h-15 mb-2 bg-[#262626] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around hover:border-1 hover:border-white'>
            <Datadisplay output={product}/>
            <Datadisplay label='Weight' output={`12.6 ${'g'}`}/>
            <Datadisplay label='Rate' output='8900'/>
            <Datadisplay label='Labour' output='1200'/>
            <Datadisplay label='Total' output='120000'/>
            <Datadisplay label='date' output='1/6/25'/>
            <Datadisplay label='Time' output='12:06'/>
        </div>
    )
}

export default Sales_block