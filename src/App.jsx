import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

const App = () => {
  // const {loading,isDark,isMobileNav}=useContext(AuthContext)
  //   const [showLoader, setShowLoader] = useState(true)
  
     
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowLoader(false)
  //     }, 1000)
  //     return () => clearTimeout(timer)
  //   }, [])
  
  //   if (loading || showLoader) {
  //     return (
  //       <div className={`w-full h-screen flex justify-center items-center
  //       ${isDark ? 'bg-black' : ''}`}>
  //         <div className='w-60 h-60'>
  //           <Lottie animationData={loadingAnimation} loop={true} />
  //         </div>
  //       </div>
  //     )
  //   }
  
    return (
      <> 
      {/* <Toastify />  */}
      {/* <ScrollVehaviour /> */}
      <div className="inter-family">
  
        {/* navbar  */}
         <Navbar />
  
        {/*mobile nav*/}
          
         
   
        {/* Main Content */}
          <main >
                <Outlet />     
          </main>
          <div>
            {/* <Footer /> */}
          </div>
        </div>
      </>
      
    )
}

export default App
