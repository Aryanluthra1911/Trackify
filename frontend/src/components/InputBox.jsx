import React, { useState } from 'react'
import {Eye , EyeOff} from 'lucide-react'
const InputBox = ({label,placeholdertext,type,set}) => {
    const [active,setactive]=useState(false)
    return (
        <div className='h-[30%] w-full '>
            <div className='h-[30%] '>{label}</div>
            {label === 'Password'?
            <>
                <div className='flex h-[50%] focus:outline-none focus:ring-0 rounded pl-2 text-xl w-full border-b-3 border-white'>
                    <input onChange={(e)=>{
                        set(e.target.value)
                    }}
                    className='h-full focus:outline-none focus:ring-0 text-xl w-[90%] border-white'
                    type={active?'text':type} placeholder={placeholdertext} />
                    <div onClick={()=>{
                        setactive(!active)
                    }} className='w-[10%] flex justify-center items-center'>{active ?<Eye color="white" size={20} />:<EyeOff color="white" size={20}/>}</div>
                </div>
            </>:<>
                <input onChange={(e)=>{
                    set(e.target.value)
                }}
                className='h-[50%] focus:outline-none focus:ring-0 rounded pl-2 text-xl w-full border-b-3 border-white'
                type={type} placeholder={placeholdertext} />
            </>}
            
            
            {/* <div>{placeholdertext === "Password" ? <Eye color="red" size={48} /> : <EyeOff /> }</div> */}
        </div>
    )
}

export default InputBox