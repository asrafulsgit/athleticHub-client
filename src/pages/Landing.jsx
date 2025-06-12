import React from 'react'
import Hero from '../components/home/Hero'
import Featured_events from '../components/home/Featured_events'
import Popular_sports from '../components/home/Popular_sports'
import Testimonials from '../components/home/Testimonials'
import Action from '../components/home/Action'

const Landing = () => {
  return (
    <>
      <Hero />
      <Featured_events />
      <Popular_sports />
      <Testimonials />
      <Action />
    </>
  )
}

export default Landing;
