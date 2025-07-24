import React, { useState } from 'react'

const Counter = ({counter,setcounter}) => {
    
    const pluscnt =()=>{
        setcounter(counter+1)
    }
    const minuscnt = ()=>{
        if(counter>0){
            setcounter(counter-1)
        }
    }
    return (
        <div className=' h-25 w-full  flex space-x-3 items-center'>
            <h1 className='text-2xl text-[#ffff]'>Quantity : </h1>
            <div className='space-x-3 flex items-center justify-center'>
                <button onClick={minuscnt} className='text-3xl h-8 w-8 rounded-3xl border-2 border-black hover:border-white text-[#ffff] pb-1 bg-slate-700 flex items-center justify-center'>
                    -
                </button>
                <div  className='text-2xl text-[#ffff]'>
                    {counter}
                </div>
                <button onClick={pluscnt} className='text-3xl h-8 w-8 rounded-3xl text-[#ffff] pb-1 border-2 border-black hover:border-white bg-slate-700 flex items-center justify-center'>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter