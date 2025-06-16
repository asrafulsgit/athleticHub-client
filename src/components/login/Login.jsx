
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../controllers/AuthProvider";
import { apiRequiestWithCredentials } from "../../utilities/ApiCall";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const {handleLoginWithGoogle,setIsLoggedIn,setUserInfo} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const initLoginInfo={
      email: "",
      password: "",
    }
  const [loginInfo, setLoginInfo] = useState(initLoginInfo);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const [loginLoading,setLoginLoading]=useState(false)
  
    const handleSubmit = async(e) => {
     e.preventDefault();
     setLoginLoading(true)
     try {
      const data = await apiRequiestWithCredentials('post', '/user/login', loginInfo)
       setUserInfo(data.user)
       setIsLoggedIn(true)
       setLoginLoading(false)
       toast.success('User login successfull')
       setLoginInfo(initLoginInfo)
       navigate('/')
     } catch (error) {
        setLoginLoading(false)
        toast.error(error?.response?.data?.message)
        console.log(error)
     }
  };
  
    const handleGoogleRegister =async()=>{
      const isRegister =await handleLoginWithGoogle();
      if(isRegister){
        setIsLoggedIn(true)
        toast.success('User Login successfull')
        navigate('/')
      }else{
        toast.error('User Login failed')
      }
    }

  return (
   <><Helmet>
        <title>Login</title>
      </Helmet> <section
      id="login"
      className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 
      sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
     
              <svg
  width="50"
  height="50"
  viewBox="6 8 64 64"
  xmlns="http://www.w3.org/2000/svg"
  fill="#118df0"
>
  <g transform="translate(0, 0) scale(0.85)">
    <polygon points="71,48.7 71,18.2 54.8,9 38.7,9 63,22.8 63,36.7 63,53.3" />
    <polygon points="29,66 54.8,81 54.7,81 55.1,81.3 71.7,71.7 79.7,57.8 55.3,72 29,56.8" />
    <polygon points="61.2,57 61.3,57 46.9,65.2 54.8,69.8 81,54.5 81,35.2 73,21.3 73,49.8" />
    <polygon points="61,23.9 34.8,8.7 18.2,18.3 10.2,32.3 35,18 47,25 46.8,25 61,33.2" />
    <polygon points="35.2,20.3 9,35.6 9,54.8 17,68.7 17,40.2 28.8,33.2 28.8,33.2 43.2,24.9" />
    <polygon points="19,41.3 19,71.8 35.2,81 51.4,81 27,67.2 27,53.3 27,36.7" />
  </g>
</svg>
             
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Login to your AthleticHub account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
          <form id="loginForm" className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={loginInfo.email}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition-colors duration-200"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={loginInfo.password}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition-colors duration-200 pr-12"
                />
                <button
                  type="button"
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={15} cy={12} r={3} />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
            {loginLoading ? 'Loading...' : 'Login'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
              <button
                type="button"
                id="googleLogin"
                onClick={handleGoogleRegister}
                className="w-[100%] cursor-pointer flex items-center justify-center px-4 py-3 
                border border-gray-300 rounded-lg text-sm font-medium text-gray-700
                 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 
                 focus:ring-offset-2 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account? 
                <Link to='/signup' className="hover:text-blue-500 font-medium transition-colors duration-200">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section></>
  );
};

export default Login;
