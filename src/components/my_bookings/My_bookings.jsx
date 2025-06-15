import React, { useState } from 'react';
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Spinner from '../aditionals/Spinner';

const My_bookings = () => {
  const initBookings = [
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
  {
    _id: "665e5d4a6f5c9bcd123a0010",
    name: "Kids' Athletic Fun Day",
    type: "Kids Sports",
    date: "2025-06-30",
    time: "9:00 AM",
    location: "Savar Sports Ground",
    fee: 20,
    description: "Fun races, sack race, tug-of-war, and more for children aged 5–12.",
    image: "https://example.com/images/kids-sports.jpg",
    participants: "100+ kids",
    requirements: "Parental consent, sports outfit",
    organizer: {
      image: "",
      name: "John Athlete",
      email: "john@athletichub.com"
    }
  }
  ];
   const [table,setTable]=useState(true)
   const [pageLoading, setPageLoading] = useState(true);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [deleteEvent, setDeleteEvent] = useState("");
   const [bookings,setBookings]=useState(initBookings)

       
      const getMyBookings = async () => {
        try {
          const data = await apiRequiestWithCredentials("get", "/my-bookings");
          console.log(data)
          setBookings(data?.events);
          setPageLoading(false);
        } catch (error) {
          setBookings([]);
          console.log(error);
          toast.error(error?.response?.data?.message)
          setPageLoading(false);
        }
      };
      useEffect(() => {
        getMyBookings();
      }, []);
      const deleteFromUi = (id) => {
        const filteredEvents = bookings.filter((booking) => booking.event._id !== id);
        setBookings(filteredEvents);
      };
      const calculateBookingsStats = () => {
        let upcomingBookings =0;
        let completeBookings = 0;
        let totalSpend =0;
        bookings.forEach(({event}) => {
          const dateTimeString = `${event?.date} ${event?.time}`;
          const eventDateTime = new Date(dateTimeString);
          const now = new Date();
          if(eventDateTime > now){
            upcomingBookings++
          }else{
            completeBookings++
          }
          totalSpend  += event?.fee ;
        });
        return {upcomingBookings,completeBookings,totalSpend};
      };
     
    
      if (pageLoading) {
        return <Spinner />;
      }



  return (
   <> 
   <section id="my-bookings" className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Bookings</h1>
            <p className="text-lg text-gray-600">Manage your event registrations and bookings</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button onClick={()=>setTable(!table)}
              className={`px-3 py-1 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900  ${table && 'bg-blue-600 text-white'} 
              rounded-md transition-colors duration-200`}>
                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Table
              </button>
              <button onClick={()=>setTable(!table)}
              className={`px-3 py-1 text-sm font-medium text-gray-600 cursor-pointer ${!table && 'bg-blue-600 text-white'}
              hover:text-gray-900 rounded-md transition-colors duration-200`}>
                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Cards
              </button>
            </div>
          </div>
        </div>
       {/* stats cards */}
        <StatCards totalBookings={bookings.length} calculateBookingsStats={()=>calculateBookingsStats()}/>
        
      {bookings.length ===0 ?<div className="flex justify-center items-center py-10">
          <p className="text-red-500 ">You have no booking!</p>
        </div> :  table ?
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Your Event Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((booking) => {
                  const { _id, image,time, name, type, date, location, fee } = booking?.event;
                  return(
                  <tr key={_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={image} alt={name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{name}</div>
                          <div className="text-sm text-gray-500">{type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location}</td>
                
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${fee}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => {
                              setDeleteEvent(_id);
                              setIsModalOpen(!isModalOpen);
                            }} className="text-red-600 cursor-pointer hover:text-red-900 
                      transition-colors duration-200" >
                        Cancel
                      </button>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div> : 
        <div className='overflow-hidden'>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Event Bookings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {bookings.map((booking,index)=>{
              const { _id, image,time, name, type, date, location, fee } = booking?.event;
              return(
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={ image} alt={type} className="w-full h-48 bg-gray-300 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded`}>
            {type}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-2 flex items-center"><svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg> {date}||{time}</p>
        <p className="text-gray-600 mb-4 flex items-center"><svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> {location}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">${fee}</span>
          {/* {isCompleted ? (
            <span className="text-gray-400 text-sm">Completed</span>
          ) : ( */}
            <button onClick={() => {
                              setDeleteEvent(_id);
                              setIsModalOpen(!isModalOpen);
                            }} className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
              Cancel
            </button>
          {/* // )} */}
        </div>
      </div>
    </div>
              )
             })}
             </div> 
        </div>
        }
      </div>
    </section>
    <CencelBooking
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
        deleteEvent={deleteEvent}
        setDeleteEvent={() => setDeleteEvent("")}
        deleteFromUi={deleteFromUi}
      />
    </>
  );
};


const StatCards = ({totalBookings,calculateBookingsStats}) => {
  const cards = [
    {
      label: "Total Bookings",
      value: totalBookings,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      iconPath:
        "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    },
    {
      label: "Upcoming Events",
      value: calculateBookingsStats()?.upcomingBookings,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      iconPath:
        "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    },
    {
      label: "Completed",
      value: calculateBookingsStats()?.completeBookings,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      iconPath:
        "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    },
    {
      label: "Total Spent",
      value: `$${calculateBookingsStats()?.totalSpend}`,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      iconPath1:
        "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z",
      iconPath2:
        "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${card.iconBg}`}>
              <svg
                className={`w-6 h-6 ${card.iconColor}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d={card.iconPath || card.iconPath1}
                  clipRule="evenodd"
                />
                {card.iconPath2 && (
                  <path
                    fillRule="evenodd"
                    d={card.iconPath2}
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CencelBooking = ({
  isModalOpen,
  setIsModalOpen,
  deleteEvent,
  setDeleteEvent,
  deleteFromUi,
}) => {
  if (!isModalOpen) return null;
  const handleDelete = async () => {
    try {
      await apiRequiestWithCredentials(
        "delete",
        `/my-booking/${deleteEvent}`
      );
      setDeleteEvent();
      setIsModalOpen();
      deleteFromUi(deleteEvent);
      toast.success("Booking cencel successfull.");
    } catch (error) {
      setDeleteEvent();
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  const handleCencelDelete = () => {
    setIsModalOpen();
    setDeleteEvent();
  };
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-500/70 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={setIsModalOpen}
        ></div>

        {/* Modal panel */}
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Close Button (top-right) */}
          <button
            type="button"
            className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={handleCencelDelete}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 
                    1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 
                    0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Cencel Booking
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to cencel this booking?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleDelete}
            >
              Cencel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_bookings;
