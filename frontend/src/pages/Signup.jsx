import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import InputBox from '../components/InputBox'

const Signup = () => {
    const navigate =  useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-[#0d0d0d] text-white'>
            <Header/>
            <div className='h-[90%] flex justify-center items-center'>
                <div className='h-130 w-120 bg-white/10 backdrop-blur-md border border-white/20  shadow-lg p-6 rounded-2xl flex flex-col items-center justify-around'>
                    <div className='h-[15%] w-[95%] flex items-start justify-around'>
                        <button   onClick={()=>{
                            navigate('/login')
                        }}className={` h-[90%] w-[47%] text-gray-300 text-2xl `} >Login</button>
                        <button className={`  h-[90%] w-[47%] rounded-2xl bg-gradient-to-b from-black via-[#1a1a1a] to-[#0d0d0d] text-gray-300 border-sky-400 border-2 text-2xl `} >Signup</button>
                    </div>
                    <div  className='h-[60%] w-[95%]  flex flex-col justify-evenly'>
                        <InputBox label = "Name" placeholdertext= 'Username'/>
                        <InputBox label = "Email" placeholdertext= 'Email Address'/>
                        <InputBox label = "Password" placeholdertext= 'Password'/>
                    </div>
                    <div className='h-[20%] w-[95%] flex items-center justify-center'>
                        <button className='h-[70%] w-[80%] bg-gradient-to-r from-cyan-500 to-blue-600 hover:to-blue-800 text-whitehover:from-cyan-600 rounded-2xl text-3xl '>
                            {currentPath === '/signup'? 
                            <>Signup</>:
                            <></>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup