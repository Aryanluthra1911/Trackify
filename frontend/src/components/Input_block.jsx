import React from 'react'

const Input_block = ({ label, value,onChange, onFocus,element}) => {
    let placeholdertext = "";
    if(label === 'Weight') placeholdertext = "weight(in gram)"
    else if(label === 'Gold rate'||label==='Silver rate') placeholdertext = "rate(per gram)"
    else if(label === 'Labour'&& element==='gold') placeholdertext = "labour(percentage)"
    else if(label === 'Labour'&& element==='silver') placeholdertext = "labour cost"
    else if(label === 'Product') placeholdertext = "product name"
    return (
        <div className='flex items-center flex-row space-x-4'>
            <div className={`text-2xl  ${label==='Discount' ?  "text-gray-500": "text-[#ffff]"} `}>{label} : </div>
            <input className={` w-45 bg-neutral-700 h-10 rounded-3xl pl-4 text-neutral-200 border-2 border-black hover:border-white`}
            type="text" 
            placeholder={placeholdertext}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            />
        </div>
    )
}

export default Input_block