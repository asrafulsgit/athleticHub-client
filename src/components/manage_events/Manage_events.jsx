import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Manage_events = () => {
  const initEvents=[
                  {
                    id: 1,
                    title: "City Marathon Championship",
                    sub: "Running • Central Park, NY",
                    date: "March 15, 2024",
                    participants: "45 / 100",
                    status: "Active",
                    revenue: "$2,025",
                    img: "https://placehold.co/100x100?text=Marathon",
                  },
                  {
                    id: 2,
                    title: "State Swimming Championships",
                    sub: "Swimming • Los Angeles, CA",
                    date: "March 22, 2024",
                    participants: "32 / 50",
                    status: "Active",
                    revenue: "$2,120",
                    img: "https://placehold.co/100x100?text=Swimming",
                  },
                ]
  const [events,setEvents]=useState(initEvents)
  return (
    <section id="manage-events" className="min-h-screen bg-gray-50 py-8 block">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manage Events</h1>
            <p className="text-lg text-gray-600">Organize and manage your created athletic events</p>
          </div>
          <div className="mt-4 md:mt-0">
           <NavLink to='/create-event' > 
           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New Event
            </button>
            </NavLink>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Events", value: 8, color: "blue", iconPath: "M6 2a1 1 0 00-1 1v1H4a2 2..." },
            { label: "Active Events", value: 5, color: "green", iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16..." },
            { label: "Total Participants", value: 247, color: "purple", iconPath: "M9 6a3 3 0 11-6 0 3 3 0 016 0z..." },
            { label: "Revenue", value: "$2,240", color: "yellow", iconPath: "M8.433 7.418c.155-.103.346-.196..." },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`p-2 bg-${stat.color}-100 rounded-lg`}>
                  <svg className={`w-6 h-6 text-${stat.color}-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path d={stat.iconPath} />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Your Created Events</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Event", "Date", "Participants", "Status", "Revenue", "Actions"].map((heading, i) => (
                    <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={event.img} alt={event.title} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{event.sub}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <span className="font-medium">{event.participants.split("/")[0]}</span>
                        <span className="text-gray-500 ml-1">/ {event.participants.split("/")[1]}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
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

export default Manage_events;
