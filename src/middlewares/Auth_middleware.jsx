import React, { useContext } from 'react'
import { AuthContext } from '../controllers/AuthProvider'
import { Navigate } from 'react-router-dom'

const Auth_middleware = ({children}) => {
  
   const {isLoggedIn} = useContext(AuthContext)
   
  return (isLoggedIn ? children : <Navigate to='/login' />)
}

export default Auth_middleware
