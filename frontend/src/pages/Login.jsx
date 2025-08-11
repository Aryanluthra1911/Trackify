import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import InputBox from '../components/InputBox'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const login = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            if (response.data.status) {
                navigate('/dashboard')
            } else {
                alert("error")
            }
        } catch (err) {
            console.log("login error:", err)
        }
    }
    
    return (
        <div className='w-screen h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden relative'>
            {/* Subtle background elements with golden hints - same as home */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-amber-500/3 to-yellow-500/2 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-16 w-96 h-96 bg-white/2 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-500/2 to-amber-400/3 rounded-full blur-3xl animate-pulse'></div>
            </div>
            
            {/* Grid pattern with golden highlights - same as home */}
            <div className='absolute inset-0 opacity-5'
                style={{
                    backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(251,191,36,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}>
            </div>
            
            <Header />
            
            <div className='h-[90%] flex justify-center items-center relative z-10'>
                <div className='h-120 w-120 bg-black/50 backdrop-blur-2xl border border-white/10 hover:border-amber-400/30 shadow-2xl shadow-black/50 p-6 rounded-2xl flex flex-col items-center justify-around transition-all duration-700'>
                    
                    {/* Glass layers for depth - same as home buttons */}
                    <div className='absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl'></div>
                    <div className='absolute inset-px rounded-2xl bg-gradient-to-b from-white/8 via-amber-500/5 to-white/2'></div>
                    
                    {/* Login/Signup Toggle - same styling as home buttons */}
                    <div className='relative z-10 h-[15%] w-[95%] flex items-start justify-around'>
                        <button className='group relative border-2 h-[90%] w-[47%] rounded-2xl overflow-hidden
                                        bg-gradient-to-br from-black/50 via-amber-900/10 to-black/50 backdrop-blur-2xl 
                                        border-amber-500/30 hover:border-amber-400/50 text-amber-200 text-2xl
                                        transform hover:scale-105 transition-all duration-700 ease-out
                                        shadow-xl hover:shadow-amber-500/20'>
                            
                            {/* Golden shimmer effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/15 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                            
                            <div className='relative z-10 h-full flex items-center justify-center'>
                                <span className='group-hover:text-amber-100 transition-colors duration-300'>Login</span>
                            </div>
                            
                            {/* Golden glow */}
                            <div className='absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700'></div>
                        </button>
                        
                        <button 
                            onClick={() => { navigate('/signup') }}
                            className='group h-[90%] w-[47%] text-gray-300 hover:text-amber-200 text-2xl
                                    transition-all duration-300 hover:scale-105'
                        >
                            <span className='transition-colors duration-300'>Signup</span>
                        </button>
                    </div>
                    
                    {/* Form Fields */}
                    <div className='relative z-10 h-[60%] w-[95%] flex flex-col justify-evenly'>
                        <InputBox 
                            label="Email" 
                            placeholdertext='Email Address' 
                            type='text' 
                            set={setemail}
                        />
                        <InputBox 
                            label="Password" 
                            placeholdertext='Password' 
                            type='password' 
                            set={setpassword}
                        />
                    </div>
                    
                    {/* Login Button - styled exactly like home page buttons */}
                    <div className='relative z-10 h-[20%] w-[95%] flex items-center justify-center'>
                        <button 
                            onClick={() => { login() }}
                            className='group relative h-[70%] w-[80%] rounded-2xl overflow-hidden
                                    bg-gradient-to-br from-black/50 via-amber-900/10 to-black/50 backdrop-blur-2xl 
                                    border border-amber-500/20 hover:border-amber-400/40
                                    transform hover:scale-105 hover:-translate-y-2
                                    transition-all duration-700 ease-out
                                    shadow-2xl shadow-black/50 hover:shadow-amber-500/20 text-3xl'
                        >
                            
                            {/* Glass layers with golden tint */}
                            <div className='absolute inset-0 bg-gradient-to-b from-amber-400/8 to-transparent rounded-2xl'></div>
                            <div className='absolute inset-px rounded-2xl bg-gradient-to-b from-amber-300/10 via-white/3 to-amber-500/5'></div>
                            
                            {/* Golden shimmer effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                            
                            {/* Button content */}
                            <div className='relative z-10 h-full flex items-center justify-center'>
                                <span className='text-amber-200 group-hover:text-amber-100 transition-colors duration-300 tracking-wide'>
                                    {currentPath === '/login' ? 'Login' : ''}
                                </span>
                            </div>
                            
                            {/* Enhanced golden glow */}
                            <div className='absolute inset-0 rounded-2xl bg-amber-400/8 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700'></div>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Corner glass elements with golden hints - same as home */}
            <div className='absolute top-16 left-8'>
                <div className='w-24 h-24 border border-white/5 rounded-full backdrop-blur-sm'></div>
                <div className='absolute top-6 left-6 w-12 h-12 border border-amber-500/15 rounded-full'></div>
                <div className='absolute top-9 left-9 w-6 h-6 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full'></div>
            </div>
            
            <div className='absolute bottom-16 right-8'>
                <div className='w-20 h-20 border border-white/5 rounded-full backdrop-blur-sm'></div>
                <div className='absolute top-5 left-5 w-10 h-10 border border-amber-500/15 rounded-full'></div>
                <div className='absolute top-7.5 left-7.5 w-5 h-5 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full'></div>
            </div>
            
            {/* Floating glass cards with golden edges - same as home */}
            <div className='absolute top-32 right-32 w-32 h-20 bg-black/30 backdrop-blur-xl border border-amber-500/10 rounded-lg opacity-30 transform rotate-12'>
                <div className='absolute top-1 left-1 w-4 h-px bg-amber-400/30'></div>
            </div>
            <div className='absolute bottom-32 left-32 w-28 h-16 bg-black/30 backdrop-blur-xl border border-amber-500/10 rounded-lg opacity-25 transform -rotate-6'>
                <div className='absolute bottom-1 right-1 w-3 h-px bg-amber-400/30'></div>
            </div>
        </div>
    )
}

export default Login