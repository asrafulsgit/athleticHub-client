import React, { useContext, useEffect, useState } from 'react'
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
import { apiRequiest } from '../utilities/ApiCall'
import { toast } from 'react-toastify'
import Spinner from '../components/aditionals/Spinner'

const Landing = () => {
  const {isLoggedIn}=useContext(AuthContext)
  const [loading,setLoading]=useState(true);
  const [events,setEvents]=useState([])
  const getFeaturedEvents =async()=>{
    try {
        const data = await apiRequiest('get','/featured-events');
        setEvents(data?.events)
    } catch (error) {
      setEvents([])
      toast.error(error?.response?.data?.message)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getFeaturedEvents()
  },[])
   if (loading) {
      return (<Spinner /> );
    }
  return (
    <>
    <Helmet>
        <title>AthleticHub | Home</title>
      </Helmet>
      <Hero  events={events}/>
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
