import React from "react";

const Create_event = () => {
  return (
    <section id="create-event" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create New Event
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to create and publish your athletic event
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
          <form className="space-y-6">
            {/* Event Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Name <span className="text-red-500">*</span>
              </label>
              <input type="text" required placeholder="Enter event name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type <span className="text-red-500">*</span>
              </label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select event type</option>
                {[
                  "running", "swimming", "sprinting", "long-jump", "high-jump",
                  "hurdle-race", "cycling", "basketball", "tennis", "track-field",
                  "triathlon", "weightlifting"
                ].map((type) => (
                  <option key={type} value={type}>{type.replace(/-/g, ' ')}</option>
                ))}
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date <span className="text-red-500">*</span>
              </label>
              <input type="datetime-local" required min="2025-06-12T06:39" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Event Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Location <span className="text-red-500">*</span>
              </label>
              <input type="text" required placeholder="Enter event location" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Registration Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Fee <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input type="number" required min="0" step="0.01" placeholder="0.00" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea required rows={5} placeholder="Provide a detailed description of your event..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"></textarea>
            </div>

            {/* Event Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Image URL <span className="text-red-500">*</span>
              </label>
              <input type="url" required placeholder="https://example.com/image.jpg" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-sm text-gray-500">Provide a URL to an image that represents your event</p>
            </div>

            {/* Creator Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Creator Name</label>
                <input type="text" value="John Athlete" readOnly className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Creator Email</label>
                <input type="email" value="john@athletichub.com" readOnly className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600" />
              </div>
            </div>

            {/* Max Participants */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Participants
              </label>
              <input type="number" min="1" placeholder="Enter maximum number of participants" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-sm text-gray-500">Leave empty for unlimited participants</p>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Requirements & Rules
              </label>
              <textarea rows={3} placeholder="List any specific requirements, age limits, equipment needed, etc." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"></textarea>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input type="checkbox" required className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-800 underline">terms and conditions</a> and confirm that all information provided is accurate. I understand that I am responsible for managing this event.
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button type="button" className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Save as Draft
              </button>
              <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Create Event
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Need Help Creating Your Event?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <h4 className="font-medium mb-2">Event Guidelines:</h4>
              <ul className="space-y-1">
                <li>• Provide clear and detailed descriptions</li>
                <li>• Set realistic participant limits</li>
                <li>• Include all necessary requirements</li>
                <li>• Use high-quality event images</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Best Practices:</h4>
              <ul className="space-y-1">
                <li>• Plan events at least 2 weeks in advance</li>
                <li>• Consider weather and venue availability</li>
                <li>• Provide emergency contact information</li>
                <li>• Set up proper registration deadlines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal (Hidden by default) */}
      <div className="fixed inset-0 z-50 hidden" aria-modal="true" aria-hidden="true">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Event Created Successfully!</h3>
              <p className="text-sm text-gray-500 mb-6">Your event has been created and is now live. Participants can start registering immediately.</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">View Event</button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create_event;