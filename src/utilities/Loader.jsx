import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'

const Loader = () => {
  const {isDark} = useContext(AuthContext)
  return (
    <div className={`min-w-[100%] min-h-[100vh] ${isDark ? 'bg-black' : 'bg-white'} flex justify-center items-center`}>
      <span className="loading loading-spinner text-green-900"></span>
    </div>
  )
}

export default Loader
