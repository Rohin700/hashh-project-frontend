import React, { useState } from 'react';
import { Cigarette, LeafyGreen, Contact, Menu, X } from "lucide-react";
import { useNavigate, Outlet } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let navg = useNavigate();

    let doNavigate = (url) => {
        navg("/" + url);
        setIsMobileMenuOpen(false); // Close menu after navigation
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <nav className="bg-gradient-to-r from-black to-green-700 shadow-lg">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left Side - Logo and Company Name */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-green-600 font-bold text-xl">
                                    <img src="/gg.jpg" alt="icon" className="w-6 h-6" />
                                </span>
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-white">Green Garden</span>
                        </div>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-2 lg:gap-4">
                            <button 
                                className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("")}
                            >
                                <Cigarette className="h-4 w-4" />
                                <span>Home</span>
                            </button>
                            
                            <button 
                                className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("product")}
                            >
                                <LeafyGreen className="h-4 w-4" />
                                <span>Joints and Buds</span>
                            </button>
                            
                            <button 
                                className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("contact")}
                            >
                                <Contact className="h-4 w-4" />
                                <span>Contact</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button - Visible only on mobile */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white p-2 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu - Visible only when menu is open */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2">
                            <button 
                                className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("")}
                            >
                                <Cigarette className="h-5 w-5" />
                                <span>Home</span>
                            </button>
                            
                            <button 
                                className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("product")}
                            >
                                <LeafyGreen className="h-5 w-5" />
                                <span>Joints and Buds</span>
                            </button>
                            
                            <button 
                                className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white hover:text-green-600 font-medium transition-all duration-300 rounded-lg" 
                                onClick={() => doNavigate("contact")}
                            >
                                <Contact className="h-5 w-5" />
                                <span>Contact</span>
                            </button>
                        </div>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    );
}