import React from 'react'
const events = [
  {
    title: "City Marathon Championship",
    date: "March 15, 2024",
    location: "Central Park, New York",
    image: "https://placehold.co/400x250?text=Marathon+Event",
    alt: "Marathon Event",
  },
  {
    title: "State Swimming Championships",
    date: "March 22, 2024",
    location: "Aquatic Center, Los Angeles",
    image: "https://placehold.co/400x250?text=Swimming+Competition",
    alt: "Swimming Competition",
  },
  {
    title: "Regional Track & Field Meet",
    date: "April 5, 2024",
    location: "Olympic Stadium, Chicago",
    image: "https://placehold.co/400x250?text=Track+Field",
    alt: "Track and Field",
  },
  {
    title: "Mountain Bike Challenge",
    date: "April 12, 2024",
    location: "Rocky Mountains, Colorado",
    image: "https://placehold.co/400x250?text=Cycling+Race",
    alt: "Cycling Race",
  },
  {
    title: "3v3 Basketball Tournament",
    date: "April 18, 2024",
    location: "Sports Complex, Miami",
    image: "https://placehold.co/400x250?text=Basketball+Tournament",
    alt: "Basketball Tournament",
  },
  {
    title: "Open Tennis Championship",
    date: "April 25, 2024",
    location: "Tennis Club, Phoenix",
    image: "https://placehold.co/400x250?text=Tennis+Championship",
    alt: "Tennis Championship",
  },
];
const Featured_events = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Events
        </h2>
        <p className="text-lg text-gray-600">
          Discover upcoming athletic competitions near you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
          See All Events
        </button>
      </div>
    </div>
  );
};


export default Featured_events;
