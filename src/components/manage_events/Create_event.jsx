import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../controllers/AuthProvider";
import { getDate, getTime } from "../../utilities/minimizeData";
import { apiRequiestWithCredentials } from "../../utilities/ApiCall";
import Spinner from "../aditionals/Spinner";
import { toast } from "react-toastify";

const Create_event = () => {
  const {userInfo}= useContext(AuthContext)
  const [dateTime,setDateTime]=useState("")
  const initEvent = {
    name: "",
    type: "",
    date: "",
    location: "",
    fee: 0,
    description: "",
    image: "",
    participants: 0,
    requirements: "",
    organizer :{
      image : userInfo?.avatar,
      name: userInfo?.name,
      email: userInfo?.email,
    }
  } 
  const [eventData, setEventData] = useState(initEvent);
  const [createLoading,setCreateLoading]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
      if(name === 'date'){
        setDateTime(value)
        setEventData((prev) => ({
          ...prev,
          date : getDate(value),
          time : getTime(value)
        }))
        return;
      };
    
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     setCreateLoading(true)
       try {
         await apiRequiestWithCredentials('post', '/create-event', eventData)
         toast.success('Event created successfull')
         setCreateLoading(false)
         setEventData(initEvent)
         setDateTime('')
       } catch (error) {
          setCreateLoading(false)
          toast.error(error?.response?.data?.message)
          console.log(error)
       }
    
  };

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
                ]
  if(!userInfo?.name || !userInfo?.email){
    return (<Spinner /> )
  }
  return (
    <section id="create-event" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <Header />

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                required
                placeholder="Enter event name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                 outline-none"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                value={eventData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              >
                <option value="">Select event type</option>
                {sports.map((type) => (
                  <option key={type} value={type}>
                    {type.replace(/-/g, " ")}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="date"
                value={dateTime}
                onChange={handleChange}
                required
                min="2025-06-12T06:39"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            {/* Event Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                required
                placeholder="Enter event location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            {/* Registration Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Fee <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  name="fee"
                  value={eventData.fee}
                  onChange={handleChange}
                  required
                  min ='1'
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 
                  rounded-lg outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Provide a detailed description of your event..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-vertical"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="image"
                value={eventData.image }
                onChange={handleChange}
                required
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <p className="mt-1 text-sm text-gray-500">
                Provide a URL to an image that represents your event
              </p>
            </div>

            

            {/* Max Participants */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Participants <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="participants"
                value={eventData.participants}
                onChange={handleChange}
                min='1'
                placeholder="Enter maximum number of participants"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
              />
              <p className="mt-1 text-sm text-gray-500">
                Leave empty for unlimited participants
              </p>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Requirements & Rules
              </label>
              <textarea
                name="requirements"
                value={eventData.requirements}
                onChange={handleChange}
                rows={3}
                placeholder="List any specific requirements, age limits, equipment needed, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-vertical"
              />
            </div>
            {/* Creator Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Creator Name 
                </label>
                <input
                  type="text"
                  value={eventData?.organizer?.name || ''}
                  readOnly
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 
                  rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Creator Email
                </label>
                <input
                  type="email"
                  value={eventData?.organizer?.email || ''}
                  disabled
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
            </div>      
            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreedToTerms"
                // checked={eventData.agreedToTerms}
                // onChange={handleChange}
                className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  terms and conditions
                </a>{" "}
                and confirm that all information provided is accurate. I
                understand that I am responsible for managing this event.
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
               {createLoading ? 'Creating...' : 'Create Event'}
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <HelpCenter />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Create New Event
      </h1>
      <p className="text-lg text-gray-600">
        Fill out the form below to create and publish your athletic event
      </p>
    </div>
  );
};
const HelpCenter = () => {
  return (
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-900 mb-3">
        Need Help Creating Your Event?
      </h3>
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
  );
};
export default Create_event;
