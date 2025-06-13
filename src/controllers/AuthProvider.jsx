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



const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children})=>{
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDark')))
    const [userInfo,setUserInfo]=useState(null)
    const [isLoggedIn,setIsLoggedIn]=useState(true)
    const [loading,setLoading]=useState(true)
    const [isMobileNav,setIsMobileNav] = useState(false)

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const googleRegister = () => {
        return signInWithPopup(auth, googleProvider);
      };
      const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const forget_password =async(email)=>{
        try {
          return await sendPasswordResetEmail(auth, email);
        } catch (error) {
           ToastContainer.error(error)
        }
      }
    
      const logout = () => {
        setLoading(true);
        return signOut(auth);
      };
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
        loading,setLoading,register,login,logout,
        googleRegister,userInfo,setUserInfo,isDark,setIsDark,isMobileNav,setIsMobileNav}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}