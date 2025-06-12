import React from "react";

const Register = () => {
  return (
    <section
      id="register"
      className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">Join AthleticHub and start your athletic journey</p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
          <form id="registerForm" className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="name" name="name" required placeholder="Enter your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
              <div id="nameError" className="hidden text-red-500 text-sm mt-1"></div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
              <div id="emailError" className="hidden text-red-500 text-sm mt-1"></div>
            </div>

            {/* Profile Picture URL Field */}
            <div>
              <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture URL
              </label>
              <input type="url" id="profilePicture" name="profilePicture" placeholder="https://example.com/your-photo.jpg" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
              <p className="text-xs text-gray-500 mt-1">Optional: Add a URL to your profile picture</p>
              <div id="profilePictureError" className="hidden text-red-500 text-sm mt-1"></div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type="password" id="password" name="password" required placeholder="Create a password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 pr-12" />
                <button type="button" id="togglePassword" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  {/* SVG icons */}
                </button>
              </div>
              <div className="mt-2">
                <div className="text-xs text-gray-600 mb-2">Password requirements:</div>
                <div className="space-y-1 text-xs">
                  <div id="lengthCheck" className="flex items-center text-gray-400">
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1...z" clipRule="evenodd" />
                    </svg>
                    At least 6 characters
                  </div>
                  <div id="uppercaseCheck" className="flex items-center text-gray-400">One uppercase letter</div>
                  <div id="lowercaseCheck" className="flex items-center text-gray-400">One lowercase letter</div>
                </div>
              </div>
              <div id="passwordError" className="hidden text-red-500 text-sm mt-1"></div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
              <div id="confirmPasswordError" className="hidden text-red-500 text-sm mt-1"></div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input type="checkbox" id="terms" name="terms" required className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the
                <a href="#" className="text-blue-600 hover:text-blue-800 underline"> Terms of Service </a>
                and
                <a href="#" className="text-blue-600 hover:text-blue-800 underline"> Privacy Policy</a>
              </label>
            </div>

            {/* Register Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
              Create Account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Social Registration Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" id="googleRegister" className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                {/* Google SVG Icon */}
                Google
              </button>

              <button type="button" id="githubRegister" className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                {/* GitHub SVG Icon */}
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
