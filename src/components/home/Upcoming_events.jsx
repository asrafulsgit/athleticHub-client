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
//   },
//   {
//     _id: "t002",
//     name: "National Cycling Championship",
//     type: "Cycling",
//     date: "2025-09-05",
//     location: "San Francisco, CA",
//     fee: 75,
//     description: "Compete with the best cyclists in the country in this highly anticipated championship event.",
//     image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     _id: "t003",
//     name: "Regional Basketball Tournament",
//     type: "Basketball",
//     date: "2025-07-30",
//     location: "Chicago, IL",
//     fee: 30,
//     description: "Show off your skills and teamwork in the regional basketball tournament for all age groups.",
//     image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     _id: "t004",
//     name: "State Swimming Gala",
//     type: "Swimming",
//     date: "2025-08-22",
//     location: "Miami, FL",
//     fee: 40,
//     description: "Dive into competition with swimmers from across the state in this exciting gala event.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     _id: "t005",
//     name: "Youth Soccer Cup",
//     type: "Soccer",
//     date: "2025-09-12",
//     location: "Dallas, TX",
//     fee: 25,
//     description: "A fun and competitive tournament for youth soccer teams to showcase their talent.",
//     image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
//   },
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
    <div className="py-16 px-5 max-w-7xl mx-auto">
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
