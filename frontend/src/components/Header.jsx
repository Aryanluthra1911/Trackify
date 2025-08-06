import React from 'react'
import setting from '../assets/Setting.svg';
import logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const movetodashboard = ()=>{
        navigate("/dashboard")
    }
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className=' bg-gradient-to-b from-black to-[#0d0d0d] h-[10%] w-[100%] flex shadow-lg'>
            <div onClick={movetodashboard} className='left h-full w-[70%] flex '>
                <img src={logo} alt="website logo"/>
            </div>
            <div className='right h-full w-[30%] flex items-center justify-end mr-5'>
                {currentPath === '/login' || currentPath === '/setting'?
                <>
                
                </>:
                    <img onClick={()=>{
                        navigate('/setting')
                    }} src={setting} alt="setting" className="w-8 h-8 hover:w-9 hover:h-9" />
                }
                
                
            </div>
        </div>
    )
}

export default Header