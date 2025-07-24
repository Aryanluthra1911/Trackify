import React, { useState } from 'react'

const Button_block = ({element,setelement}) => {
    return (
        <div className=' h-[8%] w-[90%]  flex-row flex justify-around items-center'>
            <button onClick={(ev)=>{
                setelement('gold')
            }} className={` border-2 h-full w-[30%] rounded-2xl ${element==='gold'? 'ring-2 ring-sky-500':' '} bg-[#2D2F36] text-gray-300 hover:bg-[#3A3D46] border-[#3B3E47] text-2xl `} >Gold</button>
            <button onClick={(ev)=>{
                setelement('silver')
            }} className={` border-2 h-full w-[30%] rounded-2xl ${element==='silver'?'ring-2 ring-sky-500':' '} bg-[#2D2F36] text-gray-300 hover:bg-[#3A3D46] border-[#3B3E47] text-2xl `} >Silver</button>
        </div>
    )
}

export default Button_block