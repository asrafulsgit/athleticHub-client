import React, { useContext, useState } from 'react'
import Hero from '../components/home/Hero'
import Featured_events from '../components/home/Featured_events'
import Popular_sports from '../components/home/Popular_sports'
import Testimonials from '../components/home/Testimonials'
import Action from '../components/home/Action'
import { AuthContext } from '../controllers/AuthProvider'
import { Helmet } from 'react-helmet'

const Landing = () => {
  const {isLoggedIn}=useContext(AuthContext)
  const [heroEvents,setHeroEvents]=useState([])
  const setCarouselEvents=(events)=>{
    setHeroEvents(events)
  }
  return (
    <>
    <Helmet>
        <title>AthleticHub</title>
      </Helmet>
      <Hero heroEvents={heroEvents}/>
      <Featured_events setCarouselEvents={setCarouselEvents} />
      <Popular_sports />
      <Testimonials />
      {!isLoggedIn && <Action />}
    </>
  )
}

export default Landing;
