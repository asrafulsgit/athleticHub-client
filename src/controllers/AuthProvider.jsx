import {  createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";

import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
import {app} from "./firebase_config";
import { ToastContainer } from "react-toastify";
import { apiRequiestWithCredentials } from "../utilities/ApiCall";



const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children})=>{
    const [userInfo,setUserInfo]=useState(null)
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [loading,setLoading]=useState(true)
    const [isMobileNav,setIsMobileNav] = useState(false)

    
    const handleLoginWithGoogle =async()=>{
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const token = await result.user.getIdToken();
  
          await apiRequiestWithCredentials('post','/google/login',{token})
          return true;
        } catch (err) {
          console.error("Google login failed:", err);
          return false;
        }
    }



      const forget_password =async(email)=>{
        try {
          return await sendPasswordResetEmail(auth, email);
        } catch (error) {
           ToastContainer.error(error)
        }
      }
    
      
      useEffect(() => {
        // const unsubscribe = onAuthStateChanged(auth, currentUser => {
        //   if(currentUser){
        //     setUserInfo(currentUser)
        //      setIsLoggedIn(true)
        //      setLoading(false);
        //     }else{
        //       setLoading(false);
        //   }
        // });
        // return () => unsubscribe();
      }, []);
    
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,forget_password,
        loading,setLoading,handleLoginWithGoogle,
        userInfo,setUserInfo,isMobileNav,setIsMobileNav}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}