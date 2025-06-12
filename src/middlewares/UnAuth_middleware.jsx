import React, { useContext } from 'react'
import { AuthContext } from '../controllers/AuthProvider'
import { Navigate } from 'react-router-dom'

const UnAuth_middleware = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    
    return (!isLoggedIn ? children : <Navigate to='/' />)
}

export default UnAuth_middleware
