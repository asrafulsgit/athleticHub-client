import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../controllers/AuthProvider';
import { apiRequiest } from '../../utilities/ApiCall';
import { toast } from 'react-toastify';

// const upcomingTournaments = [
//   {
//     _id: "t001",
//     name: "City Marathon 2025",
//     type: "Running",
//     date: "2025-08-15",
//     location: "New York, NY",
//     fee: 50,
//     description: "Join thousands of runners for the annual City Marathon featuring multiple race categories.",
//     image: "https://images.unsplash.com/photo-1508606572321-901ea443707e?auto=format&fit=crop&w=800&q=80",
//   }
// ];

const Upcoming_events = () => {
  const [events,setEvents]=useState([])
  const getUpcomingEvents =async()=>{
    try {
        const data = await apiRequiest('get','/upcoming-events');
        setEvents(data?.events)
    } catch (error) {
      setEvents([])
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(()=>{
    getUpcomingEvents()
  },[])
  return (
    <div className="py-10 px-5  mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
      Upcoming Tournaments
    </h2>
    <p className="sm:text-lg text-gray-600">
      Don’t miss these exciting tournaments starting soon
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {events.map((tournament, index) => (
      <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={tournament?.image}
          alt={tournament.name}
          className="w-full h-48 bg-gray-300 object-cover"
        />
        <div className="py-4 px-3">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tournament?.type}
            </span>
            <span className="text-sm text-gray-500">{tournament?.date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-0.5">{tournament?.name}</h3>
          <p className="text-gray-600 mb-2">{tournament?.location}</p>
          <p className="text-gray-700 text-sm mb-2 md:min-h-[40px]">
            {tournament?.description.length > 70 ? `${tournament?.description.slice(0, 70)}...` : tournament?.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">${tournament?.fee}</span>
            <Link to={`/event-details/${tournament?._id}`}>
              <button className="bg-blue-600 text-sm sm:text-[16px]
               cursor-pointer text-white px-3 sm:px-4 py-2 rounded-lg
                hover:bg-blue-700 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center">
    <Link to="/events">
      <button className="bg-gray-900 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
        See All Tournaments
      </button>
    </Link>
  </div>
</div>

  );
};


export default Upcoming_events;
