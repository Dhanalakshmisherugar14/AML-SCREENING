import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md px-8 py-4 sticky top-0 z-[1000] font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="Taghash Logo" 
            className="h-16 w-auto object-contain" 
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <a href="#" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">Home</a>
            <a href="#why-aml" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">Why AML?</a>
            <a href="#obligations" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">SEBI Obligations</a>
            <a href="#documents" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">Documents</a>
            <a href="#faq" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">FAQ</a>

            <a href="#contact" className="text-gray-500 text-[13px] font-medium hover:text-blue-700 transition duration-300">Contact</a>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm">
              Sign In
            </a>

            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold 
              hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-blue-200">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-700 transition">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <a href="#" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              Home
            </a>

            <a href="#why-aml" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              Why AML?
            </a>

            <a href="#obligations" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              SEBI Obligations
            </a>

            <a href="#documents" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              Documents
            </a>

            <a href="#faq" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              FAQ
            </a>



            <a href="#contact" onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-50 transition">
              Contact
            </a>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <a href="#" className="block w-full text-center px-5 py-3 rounded-xl text-gray-700 font-semibold bg-gray-50 border border-gray-200 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all">
                Sign In
              </a>
              <button className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 shadow-md transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
