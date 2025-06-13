import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Book_event = () => {
  const initEvents=[
                   {
    _id: "665e5d4a6f5c9bcd123a0008",
    name: "Kickboxing Clash",
    type: "Kickboxing",
    date: "2025-09-05",
    time: "5:00 PM",
    location: "Mirpur Combat Zone",
    fee: 20,
    description: "One-on-one competitive kickboxing bouts across multiple weight classes.",
    image: "https://example.com/images/kickboxing.jpg",
    participants: "40 fighters",
    requirements: "Mouthguard, gloves, medical form",
    organizer: {
      image: "",
      name: "John Athlete",
      email: "john@athletichub.com"
    }
  },
  {
    _id: "665e5d4a6f5c9bcd123a0009",
    name: "National Badminton Series",
    type: "Badminton",
    date: "2025-07-12",
    time: "9:00 AM",
    location: "Indoor Sports Complex, Uttara",
    fee: 20,
    description: "A national-level badminton competition with singles and doubles events.",
    image: "https://example.com/images/badminton.jpg",
    participants: "80+ players",
    requirements: "Badminton gear, registration receipt",
    organizer: {
      image: "",
      name: "John Athlete",
      email: "john@athletichub.com"
    }
  },
                ]
  const [events,setEvents]=useState(initEvents)
  return (
    <section  className="min-h-screen bg-gray-50 py-8 block">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col  md:items-start md:justify-start mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Events</h1>
            <p className="text-lg text-gray-600">Book Your Event – Be Game Ready.</p>
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          
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
                {events.map(({ _id, image, name, type, date, location, fee }) => (
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
                       hover:text-green-900 transition-colors duration-200" onClick={() => cancelBooking(id)}>
                        Book Now
                      </button></Link>
                      <button className="text-red-600 cursor-pointer hover:text-red-900 transition-colors duration-200" onClick={() => cancelBooking(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_event;
