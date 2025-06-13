import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const events = [
  { id : 1,
    title: "City Marathon Championship",
    date: "March 15, 2024",
    time : "7:00 AM",
    fee : 50,
    location: "Central Park, New York",
    image: "https://placehold.co/400x250?text=Marathon+Event",
    alt: "Marathon Event",
    description : "Join thousands of runners in this premier marathon event through the heart of New York City. This 26.2-mile race takes you through all five boroughs, offering stunning views and incredible crowd support throughout the entire course."
  },
  {id : 2,
    title: "State Swimming Championships",
    date: "March 22, 2024",
    time : "2:00 AM",
    fee : 40,
    location: "Aquatic Center, Los Angeles",
    image: "https://placehold.co/400x250?text=Swimming+Competition",
    alt: "Swimming",
    description : "Join thousands of runners in this premier marathon event through the heart of New York City. This 26.2-mile race takes you through all five boroughs, offering stunning views and incredible crowd support throughout the entire course."
  },
  {id : 3,
    title: "Regional Track & Field Meet",
    date: "April 5, 2024",
    time : "7:00 AM",
    fee : 50,
    location: "Olympic Stadium, Chicago",
    image: "https://placehold.co/400x250?text=Track+Field",
    alt: "Track and Field",
  },
  {id : 4,
    title: "Mountain Bike Challenge",
    date: "April 12, 2024",
    time : "7:00 AM",
    fee : 50,
    location: "Rocky Mountains, Colorado",
    image: "https://placehold.co/400x250?text=Cycling+Race",
    alt: "Cycling",
  },
  {id : 5,
    title: "3v3 Basketball Tournament",
    date: "April 18, 2024",
    time : "7:00 AM",
    fee : 50,
    location: "Sports Complex, Miami",
    image: "https://placehold.co/400x250?text=Basketball+Tournament",
    alt: "Basketball",
  },
  {id : 6,
    title: "Open Tennis Championship",
    date: "April 25, 2024",
    time : "7:00 AM",
    fee : 50,
    location: "Tennis Club, Phoenix",
    image: "https://placehold.co/400x250?text=Tennis+Championship",
    alt: "Tennis",
  },
];
const Event_details = () => {
  const {id}=useParams()
  const [event,setEvent]=useState({})
  
  useEffect(()=>{
      const filterEvent = events.find(event => event.id == id)
      console.log(filterEvent)
  },[])
  return (
    <section  className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Event Details */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
              <img
                src={event?.image}
                alt='Event Banner'
                className="w-full bg-gray-300 h-64 md:h-80 object-cover"
              />
            </div>

            {/* Event Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {event.alt}
                </span>
                <span className="text-sm text-gray-500">Event ID: {event.id}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event?.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Date", value: event?.date, iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                  { label: "Time", value: event?.time, iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Location", value: event?.location, iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                  { label: "Registration Fee", value: `$${event?.fee}`, iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
                ].map(({ label, value, iconPath }, idx) => (
                  <div className="flex items-center" key={idx}>
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      <p className={`font-semibold ${label === "Registration Fee" ? "text-green-600" : "text-gray-900"}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Description</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {event?.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Organizer</h3>
                <div className="flex items-center">
                  <img
                    src="https://avatar.iran.liara.run/public/15"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">sarah.johnson@athletichub.com</p>
                    <p className="text-sm text-gray-500">Event Organizer since 2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements & Information</h3>
              <div className="space-y-3">
                {["Minimum age requirement: 18 years", "Medical clearance recommended", "Registration closes 48 hours before event", "Packet pickup required day before event"].map((text, idx) => (
                  <div className="flex items-start" key={idx}>
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar will be added next */}

        </div>
      </div>
    </section>
  );
};

export default Event_details;