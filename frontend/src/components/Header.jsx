import React from 'react'
import logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const navigate = useNavigate();
    const movetodashboard = () => {
        navigate("/dashboard")
    }
    const location = useLocation();
    const currentPath = location.pathname;
    
    const handleLogout = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {}, {
                withCredentials: true 
            });
            
            if (response.data.status) {
                localStorage.clear();
                sessionStorage.clear();
                navigate('/', { replace: true });
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            }
        } catch (error) {
            console.error('Logout error:', error);
            localStorage.clear();
            sessionStorage.clear();
            navigate('/', { replace: true });
        }
    };
    
    return (
        <div className="bg-gradient-to-r from-black via-zinc-900 to-black border-b border-amber-400/30 h-[10%] w-[100%] flex shadow-lg backdrop-blur-sm">
            <div onClick={() => {
                currentPath === '/login' ||
                currentPath === '/signup' ||
                currentPath === '/'
                    ? navigate('/')
                    : movetodashboard()
            }} 
                className='left h-full w-[70%] flex items-center cursor-pointer hover:brightness-110 transition-all duration-200'>
                <img src={logo} alt="website logo" className="ml-4 h-15 w-auto" />
            </div>
            <div className='right h-full w-[30%] flex items-center justify-end mr-5'>
                {currentPath === '/login' ||
                currentPath === '/signup' || 
                currentPath === '/' 
                    ? null
                    : <button 
                        onClick={handleLogout}
                        className="w-8 h-8 hover:w-9 hover:h-9 transition-all duration-200 cursor-pointer hover:brightness-125 flex items-center justify-center rounded-full hover:bg-red-500/20 group"
                        title="Logout"
                    >
                        <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}

export default Header