import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [userInfo, setUserInfo] = useState(null)
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/gettoken`, {
                    withCredentials: true
                });
                
                if (response.data.token) {
                    setIsAuthenticated(true);
                    // You can decode the token to get user info or make another API call
                    setUserInfo({ email: 'user@example.com', name: 'User' });
                } else {
                    setIsAuthenticated(false);
                    navigate('/', { replace: true });
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                setIsAuthenticated(false);
                navigate('/', { replace: true });
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);
    
    const logout = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {}, {
                withCredentials: true 
            });
            
            console.log('Logout response:', response.data);
            
            if (response.data.status) {
                localStorage.clear();
                sessionStorage.clear();
                navigate('/', { replace: true });
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            } else {
                console.error('Logout failed:', response.data.message);
                navigate('/', { replace: true });
            }
            
        } catch (error) {
            console.error('Logout error:', error);
            localStorage.clear();
            sessionStorage.clear();
            navigate('/', { replace: true });
        }
    }

    if (isLoading) {
        return (
            <div className="w-screen h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-amber-300">Loading settings...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className='w-screen h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden relative'>
            {/* Background elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-amber-500/3 to-yellow-500/2 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-16 w-96 h-96 bg-white/2 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-500/2 to-amber-400/3 rounded-full blur-3xl animate-pulse'></div>
            </div>
            
            {/* Grid pattern */}
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
                <div className='h-[80%] w-[90%] max-w-4xl bg-black/50 backdrop-blur-2xl border border-white/10 hover:border-amber-400/30 shadow-2xl shadow-black/50 p-8 rounded-3xl transition-all duration-700'>
                    
                    {/* Glass layers */}
                    <div className='absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl'></div>
                    <div className='absolute inset-px rounded-3xl bg-gradient-to-b from-white/8 via-amber-500/5 to-white/2'></div>
                    
                    {/* Header */}
                    <div className='relative z-10 text-center mb-12'>
                        <div className='w-20 h-20 mx-auto mb-6 relative'>
                            <div className='absolute inset-0 border-2 border-amber-500/30 rounded-full animate-pulse'></div>
                            <div className='absolute inset-3 border border-white/30 rounded-full'></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg shadow-amber-500/20'></div>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full'></div>
                        </div>
                        
                        <h1 className='text-5xl font-thin mb-4 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent tracking-wider'>
                            SETTINGS
                        </h1>
                        <div className='w-32 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-6'></div>
                        <p className='text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light'>
                            Manage your account preferences and security settings with
                            <span className='text-amber-300 font-normal'> golden precision</span>
                        </p>
                    </div>
                    
                    {/* Settings Grid */}
                    <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                        
                        {/* Profile Section */}
                        <div className='group bg-black/30 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105'>
                            <div className='flex items-center space-x-4 mb-6'>
                                <div className='w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center'>
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-white'>Profile</h3>
                                    <p className='text-gray-400 text-sm'>Manage your account details</p>
                                </div>
                            </div>
                            
                            <div className='space-y-4'>
                                <div className='bg-white/5 rounded-lg p-3'>
                                    <label className='text-xs text-gray-400 uppercase tracking-wider'>Name</label>
                                    <p className='text-white font-medium'>{userInfo?.name || 'User Name'}</p>
                                </div>
                                <div className='bg-white/5 rounded-lg p-3'>
                                    <label className='text-xs text-gray-400 uppercase tracking-wider'>Email</label>
                                    <p className='text-white font-medium'>{userInfo?.email || 'user@example.com'}</p>
                                </div>
                                <button className='w-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-200 py-2 rounded-lg hover:from-amber-500/30 hover:to-yellow-500/30 transition-all duration-300'>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        
                        {/* Security Section */}
                        <div className='group bg-black/30 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105'>
                            <div className='flex items-center space-x-4 mb-6'>
                                <div className='w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center'>
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-white'>Security</h3>
                                    <p className='text-gray-400 text-sm'>Password and privacy settings</p>
                                </div>
                            </div>
                            
                            <div className='space-y-4'>
                                <button className='w-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-200 py-2 rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300'>
                                    Change Password
                                </button>
                                <button className='w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-200 py-2 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300'>
                                    Two-Factor Auth
                                </button>
                                <button className='w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 py-2 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300'>
                                    Privacy Settings
                                </button>
                            </div>
                        </div>
                        
                        {/* Preferences Section */}
                        <div className='group bg-black/30 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105'>
                            <div className='flex items-center space-x-4 mb-6'>
                                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center'>
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-white'>Preferences</h3>
                                    <p className='text-gray-400 text-sm'>Customize your experience</p>
                                </div>
                            </div>
                            
                            <div className='space-y-4'>
                                <div className='flex items-center justify-between bg-white/5 rounded-lg p-3'>
                                    <span className='text-white'>Dark Theme</span>
                                    <div className='w-12 h-6 bg-amber-500/30 rounded-full relative cursor-pointer'>
                                        <div className='w-5 h-5 bg-amber-400 rounded-full absolute top-0.5 right-0.5 transition-all duration-300'></div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between bg-white/5 rounded-lg p-3'>
                                    <span className='text-white'>Notifications</span>
                                    <div className='w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer'>
                                        <div className='w-5 h-5 bg-gray-400 rounded-full absolute top-0.5 left-0.5 transition-all duration-300'></div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between bg-white/5 rounded-lg p-3'>
                                    <span className='text-white'>Auto-save</span>
                                    <div className='w-12 h-6 bg-amber-500/30 rounded-full relative cursor-pointer'>
                                        <div className='w-5 h-5 bg-amber-400 rounded-full absolute top-0.5 right-0.5 transition-all duration-300'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* System Section */}
                        <div className='group bg-black/30 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105'>
                            <div className='flex items-center space-x-4 mb-6'>
                                <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center'>
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold text-white'>System</h3>
                                    <p className='text-gray-400 text-sm'>App and data management</p>
                                </div>
                            </div>
                            
                            <div className='space-y-4'>
                                <button className='w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 py-2 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300'>
                                    Export Data
                                </button>
                                <button className='w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-200 py-2 rounded-lg hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300'>
                                    Clear Cache
                                </button>
                                <button className='w-full bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/30 text-gray-200 py-2 rounded-lg hover:from-gray-500/30 hover:to-slate-500/30 transition-all duration-300'>
                                    About App
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Logout Section */}
                    <div className='relative z-10 text-center'>
                        <div className='w-32 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent mx-auto mb-6'></div>
                        
                        <button 
                            onClick={logout}
                            className='group relative px-12 py-4 bg-gradient-to-r from-red-600/20 to-red-800/20 border-2 border-red-500/30 hover:border-red-400/50 text-red-200 text-xl font-medium rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20'
                        >
                            {/* Shimmer effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-red-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out'></div>
                            
                            {/* Content */}
                            <div className='relative z-10 flex items-center space-x-3'>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Logout</span>
                            </div>
                        </button>
                        
                        <p className='text-gray-500 text-sm mt-4'>Click to securely log out of your account</p>
                    </div>
                </div>
            </div>
            
            {/* Corner decorations */}
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
        </div>
    )
}

export default Setting