import React from 'react'

const Details = ({label,output}) => {
    return (
        <div className='h-8 text-2xl text-[#ffff] flex space-x-5'>
            <div className='h-full text-2xl text-gray-500'>{label}</div>
            <div className='h-full text-2xl text-[#ffff] font-bold'>{output}</div>
        </div>
    )
}

export default Details