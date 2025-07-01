import React, { useContext, useState } from 'react'
import Hero from '../components/home/Hero'
import Featured_events from '../components/home/Featured_events'
import Popular_sports from '../components/home/Popular_sports'
import Testimonials from '../components/home/Testimonials'
import Action from '../components/home/Action'
import { AuthContext } from '../controllers/AuthProvider'
import { Helmet } from 'react-helmet'
import Upcoming_events from '../components/home/Upcoming_events'
import FAQ from '../components/home/FAQ'
import Sponsors from '../components/home/Sponsors'

const Landing = () => {
  const {isLoggedIn}=useContext(AuthContext)

  const [events,setEvents]=useState([])
  const featuredEvents=(events)=>{
    setEvents(events)
  }
  return (
    <>
    <Helmet>
        <title>AthleticHub</title>
      </Helmet>
      <Hero featuredEvents={featuredEvents}/>
      <Featured_events events={events} />
      <Upcoming_events  />
      <Popular_sports />
      <Testimonials />
      <FAQ />
      <Sponsors />
      {!isLoggedIn && <Action />}
    </>
  )
}

export default Landing;
