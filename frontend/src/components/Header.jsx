import React from 'react'
import setting from '../assets/Setting.svg';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const movetodashboard = ()=>{
        navigate("/dashboard")
    }
    return (
        <div className='bg-[#1c1c1c] h-[10%] w-[100%] flex shadow-lg'>
            <div onClick={movetodashboard} className='left h-full w-[70%] flex '>
                <img src={logo} alt="website logo"/>
            </div>
            <div className='right h-full w-[30%] flex items-center justify-end mr-5'>
                
                <div className='mail bg-gray-500 w-10 mr-5 h-10 flex items-center justify-center rounded-3xl'> A</div>
                <img src={setting} alt="setting" className="w-8 h-8" />
            </div>
        </div>
    )
}

export default Header