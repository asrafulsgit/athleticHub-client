import React from 'react'

const Action = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Athletic Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join our community of athletes and discover your next challenge
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Browse Events
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Action


































































