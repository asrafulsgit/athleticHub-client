import React, { useContext } from 'react'
import Hero from '../components/home/Hero'
import Featured_events from '../components/home/Featured_events'
import Popular_sports from '../components/home/Popular_sports'
import Testimonials from '../components/home/Testimonials'
import Action from '../components/home/Action'
import { AuthContext } from '../controllers/AuthProvider'

const Landing = () => {
  const {isLoggedIn}=useContext(AuthContext)
  return (
    <>
      <Hero />
      <Featured_events />
      <Popular_sports />
      <Testimonials />
      {!isLoggedIn && <Action />}
    </>
  )
}

export default Landing;
