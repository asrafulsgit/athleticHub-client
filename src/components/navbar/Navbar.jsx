import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../../controllers/AuthProvider';
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn,setLoading,setUserInfo} = useContext(AuthContext)
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
  return (
    <nav
      className="sticky top-0 px-10 flex items-center justify-between z-50 
       bg-white border-b border-gray-200"
    >
      {/* Logo Section */}
      <NavLink to='/'> <div className="flex items-center justify-center h-16">
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


     
          <span className="text-xl font-bold text-gray-900">AthleticHub</span>
        </div>
      </div></NavLink>

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

      {/* login/logout */}
      {!isLoggedIn ? <div className="flex gap-5">
        <NavLink to='/signup'><button className='w-full cursor-pointer font-medium text-blue-600  px-4 py-1 rounded-sm
         bg-blue-100 transition-colors duration-200 '> 
         Signup
         </button></NavLink>
        <NavLink to='/login'><button className='w-full bg-blue-600 text-white px-4 py-1 rounded-sm
         hover:bg-blue-700 cursor-pointer transition-colors duration-200'>
         Login  </button></NavLink>  
      </div> :
      <div className='flex items-center'> 
        <button onClick={handleLogout} className='mr-3 bg-blue-600 text-white px-4 py-1 rounded-sm
         hover:bg-blue-700 cursor-pointer transition-colors duration-200'>Logout</button> 
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-md 
            z-1 mt-4 w-40 p-2 shadow">
            <NavLink to='/profile'> <li className='hover:bg-gray-100 px-2 rounded-sm text-sm'>
                Profile
            </li></NavLink>
            <NavLink to='/book-event'><li className='hover:bg-gray-100 px-2 rounded-sm text-sm mt-1'>
                Book Event
            </li></NavLink>
           <NavLink to='/my-bookings'> <li className='hover:bg-gray-100 px-2 rounded-sm text-sm mt-1'>My Bookings</li></NavLink>
           <NavLink to='/manage-events'> <li className='hover:bg-gray-100 px-2 rounded-sm text-sm mt-1'>Manage Events</li></NavLink>
          </ul>
        </div>
      </div>
      }
    </nav>
  );
};

export default Navbar;
