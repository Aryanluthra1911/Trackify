import React from "react";
import Navbar from "../components/Navbar";
import Selected_input from "../components/Selected_input";
import { redirect, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-amber-500/3 to-yellow-500/2 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-16 w-96 h-96 bg-white/2 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-500/2 to-amber-400/3 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(251,191,36,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            ></div>

            <Header />

            <div className="h-[90%] flex flex-col justify-center items-center relative z-10">
                <div className="text-center mb-20">
                    <div className="mx-auto w-24 h-24 mb-8 relative">
                        <div
                            className="absolute inset-0 border-2 border-gradient-to-r from-amber-400/30 via-yellow-400/40 to-amber-400/30 rounded-full"
                            style={{
                                borderImage:
                                    "linear-gradient(45deg, rgba(251,191,36,0.3), rgba(250,204,21,0.4), rgba(251,191,36,0.3)) 1",
                            }}
                        ></div>

                        <div className="absolute inset-3 border border-white/30 rounded-full"></div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg shadow-amber-500/20"></div>

                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
                    </div>

                    <h1 className="text-7xl font-thin mb-4 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent tracking-widest">
                        TRACKIFY
                    </h1>
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Advanced jewelry inventory management system. Track, manage, and
                        monitor your precious collections with
                        <span className="text-amber-300 font-normal">
                            {" "}
                            golden precision
                        </span>{" "}
                        and style.
                    </p>
                </div>

                {/* Glassy buttons with golden accents */}
                <div className="flex gap-8 flex-wrap justify-center items-center">
                    {/* Get Started Button */}
                    <button
                        onClick={() => {
                            redirect("/dashboard");
                        }}
                        className="group relative h-20 w-64 rounded-2xl overflow-hidden
                                bg-black/50 backdrop-blur-2xl 
                                border border-white/10 hover:border-amber-400/30
                                transform hover:scale-105 hover:-translate-y-2
                                transition-all duration-700 ease-out
                                shadow-2xl shadow-black/50 hover:shadow-amber-500/10"
                    >
                        {/* Glass layers */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
                        <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-white/8 via-amber-500/5 to-white/2"></div>

                        {/* Golden shimmer effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/15 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out"
                        ></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-center justify-center">
                            <div className="flex items-center space-x-3">
                                {/* Get Started icon with golden accent */}
                                <div className="w-6 h-6 relative">
                                    <div className="absolute inset-0 border border-white/40 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-sm shadow-amber-500/30"></div>
                                    <div className="absolute top-1/2 left-1/2 transform  -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
                                </div>
                                <span className="text-2xl font-light text-white group-hover:text-amber-100 transition-colors duration-300 tracking-wide">
                                    Dashboard
                                </span>
                            </div>
                        </div>

                        {/* Golden glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                    </button>

                    {/* Login Button */}
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="group relative h-20 w-64 rounded-2xl overflow-hidden
                                bg-gradient-to-br from-black/50 via-amber-900/10 to-black/50 backdrop-blur-2xl 
                                border border-amber-500/20 hover:border-amber-400/40
                                transform hover:scale-105 hover:-translate-y-2
                                transition-all duration-700 ease-out
                                shadow-2xl shadow-black/50 hover:shadow-amber-500/20"
                    >
                        {/* Glass layers with golden tint */}
                        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/8 to-transparent rounded-2xl"></div>
                        <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-amber-300/10 via-white/3 to-amber-500/5"></div>

                        {/* Golden shimmer effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out"
                        ></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-center justify-center">
                            <div className="flex items-center space-x-3">
                                {/* Login icon with golden accent */}
                                <div className="w-6 h-6 relative">
                                    <div className="absolute inset-0 border border-amber-400/50 rounded-full"></div>
                                    <div className="absolute top-2 left-2 right-2 h-2 border border-amber-400/50 rounded-t-full"></div>
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full"></div>
                                </div>
                                <span className="text-2xl font-light text-amber-200 group-hover:text-amber-100 transition-colors duration-300 tracking-wide">
                                    Login
                                </span>
                            </div>
                        </div>

                        {/* Enhanced golden glow */}
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/8 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                    </button>
                </div>

                {/* Bottom accent with golden elements */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/40"></div>
                        <div className="w-3 h-3 border-2 border-amber-400/60 rounded-full animate-pulse">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
                        </div>
                        <div className="w-16 h-px bg-gradient-to-r from-amber-400/30 via-white/20 to-amber-400/30"></div>
                        <div
                            className="w-3 h-3 border-2 border-amber-400/60 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
                        </div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/40"></div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-xs bg-gradient-to-r from-gray-500 via-amber-300 to-gray-500 bg-clip-text text-transparent tracking-wider font-medium">
                            PRECISION • LUXURY • EXCELLENCE
                        </p>
                    </div>
                </div>

                {/* Corner glass elements with golden hints */}
                <div className="absolute top-16 left-8">
                    <div className="w-24 h-24 border border-white/5 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute top-6 left-6 w-12 h-12 border border-amber-500/15 rounded-full"></div>
                    <div className="absolute top-9 left-9 w-6 h-6 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full"></div>
                </div>

                <div className="absolute bottom-16 right-8">
                    <div className="w-20 h-20 border border-white/5 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute top-5 left-5 w-10 h-10 border border-amber-500/15 rounded-full"></div>
                    <div className="absolute top-7.5 left-7.5 w-5 h-5 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full"></div>
                </div>

                {/* Floating glass cards with golden edges */}
                <div className="absolute top-32 right-32 w-32 h-20 bg-black/30 backdrop-blur-xl border border-amber-500/10 rounded-lg opacity-30 transform rotate-12">
                    <div className="absolute top-1 left-1 w-4 h-px bg-amber-400/30"></div>
                </div>
                <div className="absolute bottom-32 left-32 w-28 h-16 bg-black/30 backdrop-blur-xl border border-amber-500/10 rounded-lg opacity-25 transform -rotate-6">
                    <div className="absolute bottom-1 right-1 w-3 h-px bg-amber-400/30"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;