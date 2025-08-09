import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
    const logout = async()=>{
        await axios.get('http://localhost:4444/setting/logout',{ withCredentials: true })
    }
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-[#0d0d0d] text-white'>
            <Header/>
            <div className='h-[90%] flex'>
                <div className=' h-[8%] w-[90%]  flex-row flex justify-around items-center'>
                    <button onClick={async()=>{
                        await logout();
                        navigate('/login')
                    }} className='border-2 h-13 w-30'> logout</button>
                </div>
            </div>
        </div>
    )
}

export default Setting