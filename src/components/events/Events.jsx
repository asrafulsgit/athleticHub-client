import React from "react";
import { Link } from "react-router-dom";
import { apiRequiest } from "../../utilities/ApiCall";
import Spinner from "../aditionals/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";




const EventCard = ({ event }) => (
  <div  className="bg-white rounded-lg 
              border border-gray-200 overflow-hidden hover:shadow-lg 
              transition-shadow duration-300">
                  <img src={event?.image} alt={event.name} className="w-full h-48 bg-gray-300 object-cover" />
                  <div className="py-4 px-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`bg-blue-100 text-blue-800 text-xs font-medium 
                        px-2.5 py-0.5 rounded`}>
                        {event?.type}
                      </span>
                      <span className="text-sm text-gray-500">{event?.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-0.5">{event?.name}</h3>
                    <p className="text-gray-600  mb-2">{event?.location}</p>
                    <p className="text-gray-700 text-sm mb-4">
                {event?.description.length > 70 ? `${event?.description.slice(0,70)}...` : event?.description }</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">${event?.fee}</span>
                     <Link to={`/event-details/${event?._id}`} > 
                     <button className="bg-blue-600 text-sm sm:text-[16px] cursor-pointer text-white px-3 sm:px-4 
                     py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        View Details
                      </button></Link>
                    </div>
                  </div>
                </div>
);

const Events = () => {
  const [events,setEvents]=useState([])
  const [pageLoading,setPageLoading]=useState(true);
  const getEvents =async()=>{ 
      try {
          const data = await apiRequiest('get','/browse-events');
          setEvents(data?.events)
          setPageLoading(false)
      } catch (error) {
        setEvents([])
        toast.error(error?.response?.data?.message)
        console.log(error)
        setPageLoading(false)
      }
    }
    useEffect(()=>{
      getEvents()
    },[])
    const sports=[
                  "Running",
                  "Swimming",
                  "Sprinting",
                  "Long-jump",
                  "High-jump",
                  "Hurdle-race",
                  "Cycling",
                  "Basketball",
                  "Tennis",
                  "Track-field",
                  "Triathlon",
                  "Weightlifting",
                  "Volleyball",
                  "Marathon"
                ]

    const [filterType,setFilterType]=useState('')
    const [filterLoading,setFilterLoading]=useState(false)
    const handleTypefilter=async(e)=>{
      const type = e.target.value;
      if(!type){
        return;
      }
      setFilterType(type)
      setFilterLoading(true)
      try {
        const data = await apiRequiest('get',`/filter-events?eventType=${type}`)
        setEvents(data?.events)
        setFilterLoading(false)
        } catch (error) {
          toast.error(error?.response?.data?.message)
        setFilterLoading(false)
        
      }
    }
 let interval;
   const searchFunctionality=async(searchValue)=>{ 
     clearTimeout(interval)
     if (!searchValue.trim()) {
      getEvents();
      return;
    } 
     setFilterLoading(true)

       interval = setTimeout(async() => {
        
       try {
         const data = await apiRequiest('get',`/search-events?search=${searchValue}`)
           setEvents(data?.events)
            setFilterLoading(false)
         } catch (error) {
           console.log(error)
           setEvents([])
           toast.error(error?.response?.data?.message)
           setFilterLoading(false)
         }
      }, 1000); 
   }

   const handleSearchEvents =(e)=>{
     const searchValue = e.target.value.trim();
     searchFunctionality(searchValue)
   }



    if(pageLoading){
        return (<Spinner /> )
      }
  return (
   <> 
   <Helmet>
        <title>Events</title>
      </Helmet>
   
   <section className="px-5 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl 
        md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">All Events</h1>
        <p className="sm:text-lg text-gray-600">Discover and book athletic events near you</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          
          <div className="flex-1">
              <label htmlFor="search" className="block text-sm
               font-medium text-gray-700 mb-2">Search Events</label>
            <form  className="flex relative">
              <input
                type="text"
                id="search"
                onChange={handleSearchEvents}
                placeholder="Search by event name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                outline-none"
              />
              {/* <button className="absolute cursor-pointer right-0 top-0 bg-blue-600
               text-white px-4 py-[9px] rounded-r-lg hover:bg-blue-700 
               transition-colors duration-200">
                Search
              </button> */}
            </form>
          </div>

          <div className="md:w-48">
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <select
                name="type"
                value={filterType}
                onChange={handleTypefilter}
                className="w-full px-4 py-[9px] border border-gray-300 rounded-lg 
                outline-none"
              >
                <option value="">Select event type</option>
                {sports.map((type) => (
                  <option key={type} value={type}>
                    {type.replace(/-/g, " ")}
                  </option>
                ))}
              </select>
          </div>
          {/* <div className="md:w-48">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Locations</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="miami">Miami</option>
              <option value="phoenix">Phoenix</option>
            </select>
          </div> */}
        </div>
      </div>

     {filterLoading ? 
        <div className="flex justify-center items-center py-10">
          <p className="text-red-500">Loading...</p>
        </div>
     : events.length === 0 ? 
        <div className="flex justify-center items-center py-10">
          <p className="text-red-500 ">No events available for now!</p>
        </div>:
          <div> 
            {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event,index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
              <Pagination />
            </div>
      }
    </section>
    </>
  );
};


const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-8 rounded-lg">
      <div className="flex flex-1 justify-between sm:hidden">
        <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">9</span> of <span className="font-medium">27</span> results
          </p> */}
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="relative z-10 inline-flex items-center bg-blue-600 px-4 
            py-2 text-sm font-semibold text-white focus:z-20 
            focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-blue-600">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              3
            </button>
            <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};


export default Events;
