import React from 'react'
import setting from '../assets/Setting.svg';
import logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const movetodashboard = () => {
        navigate("/dashboard")
    }
    const location = useLocation();
    const currentPath = location.pathname;
    
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
                currentPath === '/setting' ||
                currentPath === '/' 
                    ? null
                    : <img 
                        onClick={() => {
                            navigate('/setting')
                        }} 
                        src={setting} 
                        alt="setting" 
                        className="w-8 h-8 hover:w-9 hover:h-9 transition-all duration-200 cursor-pointer hover:brightness-125 filter brightness-75 hover:filter " 
                    />
                }
            </div>
        </div>
    )
}

export default Header