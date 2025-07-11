import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Toastify from './components/aditionals/Toastify'
import ScrollVehaviour from './components/aditionals/ScrollVehaviour'
import Loader from './components/aditionals/Loader'
import { AuthContext } from './controllers/AuthProvider'

const App = () => {
    const {loading}=useContext(AuthContext)
    const [showLoader, setShowLoader] = useState(true)
  
     
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, 500)
      return () => clearTimeout(timer)
    }, [])
  
    if (loading || showLoader) {
      return (<Loader />)
    }
  
    return (
      <> 
      <Toastify /> 
      <ScrollVehaviour />
      <div className=' bg-blue-50/70'>
        <div className="max-w-[1340px] bg-white inter-family">
          {/* navbar  */}
          <Navbar />
          {/*mobile nav*/}
          {/* Main Content */}
            <main >
                  <Outlet />     
            </main>
            <div>
              <Footer />
            </div>
        </div>
      </div>
      </>
      
    )
}

export default App
