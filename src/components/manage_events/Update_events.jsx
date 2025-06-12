import React from 'react';

const Update_event = () => {
  return (
    <section id="update-event" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Manage Events
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Update Event</h1>
          <p className="text-lg text-gray-600">Edit your event details and save changes</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
          <form id="updateEventForm" className="space-y-6">
            {/* Event Name */}
            <div>
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-2">
                Event Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="eventName" name="eventName" required defaultValue="City Marathon Championship" placeholder="Enter event name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                Event Type <span className="text-red-500">*</span>
              </label>
              <select id="eventType" name="eventType" required defaultValue="running" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                <option value="">Select event type</option>
                <option value="running">Running</option>
                <option value="swimming">Swimming</option>
                <option value="sprinting">Sprinting</option>
                <option value="long-jump">Long Jump</option>
                <option value="high-jump">High Jump</option>
                <option value="hurdle-race">Hurdle Race</option>
                <option value="cycling">Cycling</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="track-field">Track & Field</option>
                <option value="triathlon">Triathlon</option>
                <option value="weightlifting">Weightlifting</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                Event Date <span className="text-red-500">*</span>
              </label>
              <input type="datetime-local" id="eventDate" name="eventDate" required defaultValue="2024-03-15T07:00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" />
            </div>

            {/* More form fields go here — truncated for brevity */}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Update_event;