import React from 'react'
import { Outlet } from 'react-router-dom'

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
      <div className="">
  
        {/* navbar  */}
     
  
        {/*mobile nav*/}
          
         
   
        {/* Main Content */}
          <main className="pt-15">
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
