import React from 'react'

const Heading = ({label}) => {
    return (
        <div className={`w-[8%] h-full text-gray-300 flex items-center justify-center`}>{label}</div>
    )
}

export default Heading