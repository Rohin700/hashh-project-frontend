import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    let navg = useNavigate();
    let doNavigate = (url) => {
        navg("/" + url);
    }

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Contact Button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <button
            onClick={()=>doNavigate("contact")}
            className="px-10 sm:px-14 lg:px-20 py-4 sm:py-5 
                     bg-white hover:bg-gray-100
                     text-black font-bold text-base sm:text-lg lg:text-xl
                     rounded-full
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300 ease-out
                     shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30"
          >
            CONTACT
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}