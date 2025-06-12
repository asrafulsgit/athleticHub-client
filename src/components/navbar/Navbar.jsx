import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 px-10 flex items-center justify-between z-50 
       bg-white border-b border-gray-200"
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">AthleticHub</span>
        </div>
      </div>
      {/* Navigation Menu */}
      <div className="flex gap-5 nav-item-active">
         <NavLink to='/'  className='px-3 py-1 
         text-[15px] font-medium text-gray-700 rounded-md border 
         border-transparent transition-all duration-200 
         hover:bg-gray-100 hover:text-gray-900 
         hover:border-gray-200' >Home</NavLink>
         <NavLink to='/events' className="px-3 py-1 
         text-[15px] font-medium text-gray-700 rounded-md border 
         border-transparent transition-all duration-200 
         hover:bg-gray-100 hover:text-gray-900 
         hover:border-gray-200">Events</NavLink>
      </div>
      <div className="flex gap-5">
        <button className='w-full font-medium text-blue-600  px-4 py-1 rounded-sm
         bg-blue-100 transition-colors duration-200 '> 
         <NavLink >Signin</NavLink>
         </button>
        <button className='w-full bg-blue-600 text-white px-4 py-1 rounded-sm
         hover:bg-blue-700 transition-colors duration-200'>
         <NavLink >Login</NavLink>   </button> 
      </div>
    </nav>
  );
};

export default Navbar;
