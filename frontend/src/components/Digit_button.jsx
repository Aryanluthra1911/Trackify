import React, { useState } from 'react'
import backspace from '../assets/backspace.svg';

const Digit_button = ({no, onClick }) => {
    
    const [clicked,setclicked] =  useState(false);
    const handleClick = () => {
        setclicked(true);
        onClick(); 
        setTimeout(() => {
            setclicked(false);
        }, 200); 
    };
    return (
        <button
        onClick={handleClick}
        className={`h-[20%] w-[30%] border-2 rounded-2xl ml-1 mr-1 bg-[#3a3d46] text-2xl  flex items-center justify-center ${
        clicked ? 'border-amber-50':'border-black'}
        text-[#ffff]`}>{no}</button>
    )
}

export default Digit_button