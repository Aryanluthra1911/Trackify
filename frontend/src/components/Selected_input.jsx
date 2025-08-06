import React from 'react'

const Selected_input = ({label,options,onChange}) => {
    return (
        <div className='flex items-center flex-row space-x-4'>
            <div className='text-2xl text-[#ffff]'>{label} : </div>
            <select className=' w-45 bg-[#3a3d46] h-10 rounded-3xl pl-4 text-neutral-200 border-2 border-black hover:border-white'
            onChange={onChange}>
                {options.map((product,idx)=>(
                    <option key={idx}>{product}</option>
                ))}
            </select>
        </div>
    )
}

export default Selected_input