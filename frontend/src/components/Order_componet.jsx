import React from 'react'

const Order_componet = ({label,output}) => {
    return (
        <div className={`w-[30%] h-full text-m text-white flex items-center justify-center`}>{`${label}: ${output}`}</div>
    )
}

export default Order_componet