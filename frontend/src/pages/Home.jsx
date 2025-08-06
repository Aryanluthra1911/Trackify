import React from 'react'
import Navbar from '../components/Navbar'
import Selected_input from '../components/Selected_input'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate =  useNavigate()
    return (
        <div>
            <button onClick={(()=>{
                navigate("/dashboard")
            })} className=' h-20 w-60 border-2 border-black rounded-2xl bg-gray-400 text-3xl'>dashboard</button>
            <button onClick={(()=>{
                navigate("/login")
            })} className=' h-20 w-60 border-2 border-black rounded-2xl bg-gray-400 text-3xl'>login</button>
        </div>
    )
}

export default Home