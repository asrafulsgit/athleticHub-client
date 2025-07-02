import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { apiRequiestWithCredentials } from "../../utilities/ApiCall";
import { toast } from "react-toastify";
import Spinner from "../aditionals/Spinner";
import { Helmet } from "react-helmet";

const Book_event = () => {
  const [events,setEvents]=useState([])
  const [pageLoading,setPageLoading]=useState(true)
  const getBookEvents=async()=>{
    
    try {
            const data= await apiRequiestWithCredentials('get',`/book-events`)
            setEvents(data?.events)
            setPageLoading(false)
          } catch (error) {
            setEvents([])
            toast.error(error?.response?.data?.message)
            setPageLoading(false)
          }
  }
  useEffect(()=>{
      getBookEvents()
  },[])
  const handleDeleteEvent=async(id)=>{
    try {
            await apiRequiestWithCredentials('delete',`/book-event/${id}`)
            const fileterEvents = events.filter(events => events.event._id !== id);
            setEvents(fileterEvents)
            const fileterEventsIds = fileterEvents.map(book=> book.event._id)
            localStorage.setItem('bookeEvent',JSON.stringify(fileterEventsIds))
            toast.success('Book event deleted.')
          } catch (error) {
            toast.error(error?.response?.data?.message)
          }
  }
  if(pageLoading){
    return (<Spinner /> )
  }
  return (
   <><Helmet>
        <title>AthleticHub | Book event</title>
      </Helmet> <section  className="min-h-[70vh] px-5 bg-gray-50 py-8 block">
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="flex flex-col  md:items-start md:justify-start mb-8">
            <h1 className="text-2xl sm:text-3xl 
        md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Book Events</h1>
            <p className="sm:text-lg text-gray-600">Book Your Event – Be Game Ready.</p>
        </div>

        {/* Events Table */}
        {events.length===0 ? 
         <div className="flex justify-center items-center py-10">
          <p className="text-red-500 ">You have no book event!</p>
        </div>
        :<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((events) => {
                  const { _id, image, name, type, date, location, fee }=events?.event;
                  return(
                  <tr key={_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 bg-gray-300 rounded-lg object-cover" src={image} alt={name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{name}</div>
                          <div className="text-sm text-gray-500">{type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${fee}</td>
                    <td className="flex gap-3 px-6 py-4 whitespace-nowrap text-sm font-medium">
                     <Link to={`/event-details/${_id}`}> <button className="text-green-600 cursor-pointer
                       hover:text-green-900 transition-colors duration-200">
                        Book Now
                      </button></Link>
                      <button className="text-red-600 cursor-pointer
                       hover:text-red-900 transition-colors duration-200" 
                       onClick={()=>handleDeleteEvent(_id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>}
      </div>
    </section></>
  );
};

export default Book_event;
