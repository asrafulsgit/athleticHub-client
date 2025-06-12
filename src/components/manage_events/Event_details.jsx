import React from "react";

const Event_details = () => {
  return (
    <section id="event-details" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Event Details */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
              <img
                src="https://placehold.co/800x400?text=City+Marathon+Championship"
                alt="City Marathon Championship"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Event Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Running
                </span>
                <span className="text-sm text-gray-500">Event ID: #EVT001</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">City Marathon Championship</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Date", value: "March 15, 2024", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                  { label: "Time", value: "7:00 AM", iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Location", value: "Central Park, New York", iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                  { label: "Registration Fee", value: "$45.00", iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
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
                  Join thousands of runners in this premier marathon event through the heart of New York City. This 26.2-mile race takes you through all five boroughs, offering stunning views and incredible crowd support throughout the entire course.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you're a seasoned marathoner or taking on your first 26.2-mile challenge, this event offers a world-class experience with professional timing, aid stations every mile, and post-race festivities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All participants will receive a finisher's medal, technical t-shirt, and access to the post-race celebration with food, drinks, and live entertainment.
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