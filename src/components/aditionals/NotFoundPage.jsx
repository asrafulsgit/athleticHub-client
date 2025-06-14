import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animation from '../../../public/404.json'
const NotFoundPage = () => {

  return (
      <> 
      <div className={`nonito-family h-[100vh] w-[100%] flex flex-col gap-1.5 
      justify-center items-center inter-family`}>
    
        <Lottie animationData={animation} loop={true} 
        style={{ height: 400, width: 500  }} />
      <Link to='/'>
      <button className="mt-3 px-5 cursor-pointer py-2 border-none rounded-[3px]
       bg-blue-900 text-white font-bold text-[16px]">
              Go Back Home
            </button></Link>
    </div>
      </>
  )
}

export default NotFoundPage
