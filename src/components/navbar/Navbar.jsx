import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../../controllers/AuthProvider';
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn,userInfo,
    setLoading,setUserInfo} = useContext(AuthContext)
  const [isMobileNav,setIsMobileNav] =useState(false)
  const handleLogout = async()=>{
    setLoading(true)
      try {
        await apiRequiestWithCredentials('get','/user/logout');
        setUserInfo(null)
        setIsLoggedIn(false)
        setLoading(false)
        toast.success('User logout successfull')
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
  }
  const asideItems =[
        {
            name : "Home",
            path : '/'
        },
        {
            name : "Events",
            path : '/events'
        }
        
]
  return (
    <nav
      className="sticky top-0 px-5  py-3 flex items-center justify-between z-50 
       bg-white border-b border-gray-200 "
    >
      {/* mobile nav */}
      {!isMobileNav ?  <button
        type="button"
        className={`sm:hidden cursor-pointer 
        ${isMobileNav ? '' : 'top-4 left-4'} z-20 px-1  rounded-sm sm:px-2 sm:py-1 sm:rounded-md 
          text-white hover:text-white 
          focus:outline-none border border-blue-700/50 `}
        onClick={() => {
          setIsMobileNav(!isMobileNav)
        }}
        aria-controls="mobile-menu"
        aria-expanded={isMobileNav}
      >
          <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6  text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
     
      </button> : 
      <button
        type="button"
        className={`sm:hidden cursor-pointer 
         z-20 px-2 py-1 rounded-md bg-blue-700
          text-white hover:text-white 
          focus:outline-none `}
        onClick={() => {
          setIsMobileNav(!isMobileNav)
        }}
        aria-controls="mobile-menu"
        aria-expanded={isMobileNav}
      >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
     
      </button>}

        {isMobileNav && <aside className="sm:hidden w-[100%] 
         h-screen text-white bg-blue-700  
         fixed inset-0 z-10">
          {/* <Asidebar/> */}
         <nav className="space-y-1 w-[100%] pt-15 lg:pt-0 mt-6 px-2 
         flex flex-col  items-center nav-item-active ">
           {asideItems.map((item,index)=>(
                <NavLink key={index} onClick={()=>setIsMobileNav(false)} to={item.path}
                className='text-[15px] xl:text-[16px] font-[400]  
                rounded-md py-1 px-2
                hover:bg-blue-600 '>
                {item.name}</NavLink> 
           ))}
           
          </nav>
        </aside>}

      {/* Logo Section */}
      <NavLink to='/'> 
      <div className="flex items-center justify-center ">
        <div className="flex items-center space-x-2">
          <svg
  width="32"
  height="32"
  viewBox="6 8 64 64"
  xmlns="http://www.w3.org/2000/svg"
  fill="#118df0"
>
  <g transform="translate(0, 0) scale(0.85)">
    <polygon points="71,48.7 71,18.2 54.8,9 38.7,9 63,22.8 63,36.7 63,53.3" />
    <polygon points="29,66 54.8,81 54.7,81 55.1,81.3 71.7,71.7 79.7,57.8 55.3,72 29,56.8" />
    <polygon points="61.2,57 61.3,57 46.9,65.2 54.8,69.8 81,54.5 81,35.2 73,21.3 73,49.8" />
    <polygon points="61,23.9 34.8,8.7 18.2,18.3 10.2,32.3 35,18 47,25 46.8,25 61,33.2" />
    <polygon points="35.2,20.3 9,35.6 9,54.8 17,68.7 17,40.2 28.8,33.2 28.8,33.2 43.2,24.9" />
    <polygon points="19,41.3 19,71.8 35.2,81 51.4,81 27,67.2 27,53.3 27,36.7" />
  </g>
</svg>


     
          <span className="text-[18px] sm:text-xl font-bold text-gray-900">AthleticHub</span>
        </div>
      </div></NavLink>

      {/* Navigation Menu */}
      <div className="hidden sm:flex gap-5 nav-item-active">
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

      {/* login/logout */}
      {isLoggedIn ? 
      <div className='flex items-center'> 
        <button onClick={handleLogout} className='mr-3 bg-blue-600 text-white px-4 py-1 rounded-sm
         hover:bg-blue-700 cursor-pointer transition-colors duration-200'>Logout</button> 
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content={isLoggedIn && userInfo?.name}
                alt="Tailwind CSS Navbar component"
                src={userInfo?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
              <Tooltip id="my-tooltip" place="bottom" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-md 
            z-1 mt-4 w-40 p-2 shadow nav-item-active space-y-1">
            <NavLink to='/profile'  className='rounded-sm'> 
            <li className=' px-2 rounded-sm text-sm'>
                Profile
            </li></NavLink>
            <NavLink to='/book-event' className='rounded-sm'>
            <li className=' px-2 rounded-sm text-sm '>
                Book Event
            </li></NavLink>
           <NavLink to='/my-bookings'  className='rounded-sm'> 
           <li className=' px-2 rounded-sm text-sm '>My Bookings</li></NavLink>
           <NavLink to='/manage-events'  className='rounded-sm'> 
           <li className=' px-2 rounded-sm text-sm '>Manage Events</li></NavLink>
          </ul>
        </div>
      </div>
      :
      <div className="flex gap-5">
        <NavLink to='/signup'>
        <button className=' w-full cursor-pointer font-medium 
        text-blue-600  px-4 py-1 rounded-sm
         bg-blue-100 transition-colors duration-200 '> 
         Signup
         </button></NavLink>
        <NavLink to='/login'><button className='w-full bg-blue-600 text-white px-4 py-1 rounded-sm
         hover:bg-blue-700 cursor-pointer transition-colors duration-200'>
         Login  </button></NavLink>  
      </div> 
      
      }
    </nav>
  );
};

export default Navbar;
