import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImage from '../../assets/404.jpg'
const NotFoundPage = () => {

  return (
      <> 
      <div className={`h-[100vh]  w-[100%] flex flex-col gap-4 
       items-center  justify-center inter-family overflow-hidden`}>
        <img src={notFoundImage} alt="not found image" className='w-[250px] sm:w-[300px] md:w-[500px]' />
      <Link to='/'>
      <button className="mt-3 px-5 cursor-pointer py-2 border-none rounded-[3px]
       bg-blue-700 text-white font-bold text-[16px]">
              Go Back Home
            </button></Link>
    </div>
      </>
  )
}

export default NotFoundPage
