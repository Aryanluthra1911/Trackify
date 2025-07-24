import React, { useState } from 'react'
import Dashboard_icon from '../assets/Dashboard_icon.svg';
import sales_icon from '../assets/Sales_icon.svg';
import custombill_icon from '../assets/custombill.svg';
import gstsales_icon from '../assets/gstsales.svg'
import orders_icon from '../assets/orders.svg'
import { useLocation, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className='navbar w-[7%] h-full bg-[#202020] flex flex-col items-center justify-center shadow-lg space-y-4'>
            <div onClick={()=>{
                navigate("/dashboard")
            }} className={` text-amber-50 h-[12%] hover:bg-[#3A3D46] w-full flex flex-col items-center justify-center
            ${currentPath==="/dashboard" ?'border-2 border-white rounded-2xl': 'border-2 border-transparent rounded-2xl' }`}>
                <img src={Dashboard_icon} alt="" className='w-10 h-9'/>
                <div>Dashboard</div>
            </div>
            <div onClick={()=>{
                navigate("/sales")
            }} className={` text-amber-50 h-[12%] hover:bg-[#3A3D46] w-full flex flex-col items-center justify-center
            ${currentPath==="/sales" ?'border-2 border-white rounded-2xl': 'border-2 border-transparent rounded-2xl' }`}>
                <img src={sales_icon} alt="" className='w-10 h-9'/>
                <div>Sales</div>
            </div>
            <div onClick={()=>{
                navigate("/gstsales")
            }} className={` text-amber-50 h-[12%] hover:bg-[#3A3D46] w-full flex flex-col items-center justify-center
            ${currentPath==="/gstsales" ?'border-2 border-white rounded-2xl': 'border-2 border-transparent rounded-2xl' }`}>
                <img src={gstsales_icon} alt="" className='w-10 h-9'/>
                <div>GST Sales</div>
            </div>
            <div onClick={()=>{
                navigate("/custombills")
            }} className={` text-amber-50 h-[12%] hover:bg-[#3A3D46] w-full flex flex-col items-center justify-center
            ${currentPath==="/custombills" ?'border-2 border-white rounded-2xl': 'border-2 border-transparent rounded-2xl' }`}>
                <img src={custombill_icon} alt="" className='w-10 h-9'/>
                <div>Custom bill</div>
            </div>
            <div onClick={()=>{
                navigate("/orders")
            }} className={` text-amber-50 h-[12%] hover:bg-[#3A3D46] w-full flex flex-col items-center justify-center
            ${currentPath==="/orders" ?'border-2 border-white rounded-2xl': 'border-2 border-transparent rounded-2xl' }`}>
                <img src={orders_icon} alt="" className='w-10 h-9'/>
                <div>Orders</div>
            </div>
        </div>
    )
}

export default Navbar