import React from 'react'

const Datadisplay = ({label,output}) => {
    return (
        <div className={`w-auto h-full text-gray-300 flex items-center m-3 ${!label ? 'text-2xl font-bold': ''}`}>{!label ?output:` ${label} : ${output}`}</div>
    )
}

export default Datadisplay