import React from 'react'

const Searchbar = ({search_input,setsearch_input ,findsales}) => {
    return (
        <input onChange={(e) =>{
            const value = e.target.value
            setsearch_input(value)
            findsales(value)
        }}
        type="text"
        className='w-50 h-10 bg-[#2b2b2b] rounded-2xl pl-5
        text-white border-2 hover:border-white border-black' 
        placeholder='Find record'/>
    )
}

export default Searchbar