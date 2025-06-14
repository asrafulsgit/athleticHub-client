import React from 'react'
import Lottie from 'lottie-react';
import myAnimation from '../../../public/spinner.json'
const Spinner = () => {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={myAnimation} loop={true} />
    </div>
  )
}

export default Spinner
