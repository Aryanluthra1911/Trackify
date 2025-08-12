import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
    const navigate = useNavigate()
    
    const logout = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {}, {
                withCredentials: true 
            });
            
            console.log('Logout response:', response.data);
            
            // Check if logout was successful
            if (response.data.status) {
                // Clear any local storage
                localStorage.clear();
                sessionStorage.clear();
                
                // Navigate to home page instead of login
                navigate('/', { replace: true });
                
                // Force page reload to clear everything
                setTimeout(() => {
                    window.location.reload();
                }, 100);
                
            } else {
                console.error('Logout failed:', response.data.message);
                // Still redirect on failure
                navigate('/', { replace: true });
            }
            
        } catch (error) {
            console.error('Logout error:', error);
            
            // Clear storage even if API fails
            localStorage.clear();
            sessionStorage.clear();
            
            // Force redirect regardless of error
            navigate('/', { replace: true });
        }
    }

    return (
        <div className='w-screen h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-[#0d0d0d] text-white'>
            <Header/>
            <div className='h-[90%] flex'>
                <div className='h-[90%] w-[100%] flex-row flex justify-center items-center'>
                    <button 
                        onClick={logout}
                        className='border-2 border-white rounded-2xl px-6 py-3 hover:bg-red-600 text-2xl transition-colors duration-300'
                    > 
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Setting