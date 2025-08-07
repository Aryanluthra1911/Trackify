import React from 'react'

const InputBox = ({label,placeholdertext}) => {
    return (
        <div className='h-[30%] w-full '>
            <div className='h-[30%] '>{label}</div>
            <input
            className='h-[50%] focus:outline-none focus:ring-0 rounded pl-2 text-xl w-full border-b-3 border-white'
            type={`${placeholdertext === "Password"? 'password':'text'}`} placeholder={placeholdertext} />
        </div>
    )
}

export default InputBox