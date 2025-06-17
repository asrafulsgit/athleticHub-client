import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequiestWithCredentials } from "../../utilities/ApiCall";
import Spinner from "../aditionals/Spinner";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../controllers/AuthProvider";
import { Helmet } from "react-helmet";

const Event_details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});

  const [bookeEvents, setBookeEvents] = useState(
    JSON.parse(localStorage.getItem("bookeEvent")) || []
  );
  const [isBookedEvent, setIsBookedEvent] = useState(bookeEvents.includes(id));

  const [pageLoading, setPageLoading] = useState(true);
  const getEvent = async () => {
    try {
      const data = await apiRequiestWithCredentials(
        "get",
        `/event-details/${id}`
      );
      setEvent(data?.event);
      setPageLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setEvent({});
      setPageLoading(false);
      navigate('/404')
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  const handleBookEvent = async () => {
    try {
      await apiRequiestWithCredentials("post", `/create/book-event/${id}`);
      localStorage.setItem("bookeEvent", JSON.stringify([...bookeEvents, id]));
      setIsBookedEvent(true);
      toast.success("Book event successfull.");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const [createReview, setCreateReview] = useState({});
  const setNewReview = (rev) => {
    setCreateReview(rev);
  };
  if (pageLoading) {
    return <Spinner />;
  }
  return (
  <>   
  <Helmet>
        <title>Event details</title>
      </Helmet>
  <section className="min-h-screen bg-gray-50 py-8 px-4">
      {!event.name || !event.type || !event.image ? (
        <div className="flex justify-center items-center pt-10">
          <p className="text-red-500 ">This event is not available for now!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Main Event Details */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
              <img
                src={event?.image}
                alt="Event Banner"
                className="w-full bg-gray-300 h-64 md:h-80 object-cover"
              />
              {isBookedEvent ? (
                <button
                  disabled
                  className="absolute top-5 
            right-5 w-8 cursor-pointer bg-blue-900 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-blue-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 3A1.5 1.5 0 005.25 4.5v15.75a.75.75 0 001.168.63L12 17.25l5.582 3.63a.75.75 0 001.168-.63V4.5A1.5 1.5 0 0017.25 3H6.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleBookEvent}
                  className="absolute top-5 right-5 w-8 cursor-pointer bg-blue-900 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-blue-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 4.5h10.5c.414 0 .75.336.75.75v14.25a.75.75 0 01-1.168.63L12 16.5l-4.832 3.63a.75.75 0 01-1.168-.63V5.25c0-.414.336-.75.75-.75z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Event Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6">
              <div className="flex flex-col gap-2 sm:flex-row items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium 
                px-3 py-1 rounded-full">
                  {event?.type}
                </span>
                <span className="text-sm text-gray-500">
                  Event ID: {event?._id}
                </span>
              </div>

              <h1 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {event?.name}
              </h1>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  {
                    label: "Date",
                    value: event?.date,
                    iconPath:
                      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                  },
                  {
                    label: "Time",
                    value: event?.time,
                    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    label: "Location",
                    value: event?.location,
                    iconPath:
                      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  },
                  {
                    label: "Registration Fee",
                    value: `$${event?.fee}`,
                    iconPath:
                      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                  },
                ].map(({ label, value, iconPath }, idx) => (
                  <div className="flex items-center" key={idx}>
                    <svg
                      className="w-5 h-5 text-gray-400 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={iconPath}
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      <p
                        className={`font-semibold ${
                          label === "Registration Fee"
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Event Description
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {event?.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Event Organizer
                </h3>
                <div className="flex items-center">
                  <img
                    src={
                      event?.organizer?.image ||
                      "https://avatar.iran.liara.run/public/15"
                    }
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {event?.organizer?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {event?.organizer?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Requirements & Information
              </h3>
             {event?.requirements && <div className="space-y-3">
                  <div className="flex items-start" >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                    <p className="text-gray-700">{event?.requirements}</p>
                  </div>
              </div>}
            </div>
          </div>

          {/* Booking Sidebar will be added next */}
          <BookingCard event={event} setNewReview={setNewReview} />
        </div>
      )}

      {/* event reviews */}
      <EventReviews eventId={id} newReview={createReview} />
    </section>
  </>
  );
};

const BookingCard = ({ event, setNewReview }) => {
  const { userInfo } = useContext(AuthContext);
  const [bookLoading, setBookLoading] = useState(false);
  const [form, setForm] = useState({
    name: userInfo?.name,
    email: userInfo?.email,
    phone: "",
  });

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("myBookings")) || []
  );
  const [isBooked, setIsBooked] = useState(bookings.includes(event._id));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookLoading(true);
    try {
      await apiRequiestWithCredentials(
        "post",
        `/create/booking/${event?._id}`,
        form
      );
      localStorage.setItem(
        "myBookings",
        JSON.stringify([...bookings, event._id])
      );
      setIsBooked(true);
      setBookLoading(false);
      toast.success("Event booking successfull.");
    } catch (error) {
      setBookLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="lg:col-span-1 sticky top-8">
        {/* Booking Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6  ">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-gray-900 mb-2">
              ${event?.fee}
            </p>
            <p className="text-sm text-gray-600">Registration Fee</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Participant Name
              </label>
              <input
                type="text"
                id="name"
                value={form?.name}
                readOnly
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={form?.email}
                readOnly
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="participantPhone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+88 01825623548"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                outline-none"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="termsAgreed" className="mt-1 mr-3" />
              <label htmlFor="termsAgreed" className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  waiver of liability
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isBooked}
              className={`w-full  bg-blue-600 text-white 
              py-3 px-4 rounded-lg font-semibold ${
                isBooked
                  ? "cursor-no-drop"
                  : "cursor-pointer  hover:bg-blue-700"
              } 
              transition-colors duration-200`}
            >
              {isBooked
                ? "Booked"
                : bookLoading
                ? "Booking..."
                : `Book Now - ${event?.fee}.00`}
            </button>
          </form>

          {/* Availability Stats */}
          {/* <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Spots Available</span>
              <span className="font-semibold text-green-600">247 / 500</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '49.4%' }}></div>
            </div>
          </div> */}

          {/* Payment Info */}
          {/* <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">Secure payment processing</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <svg className="w-8 h-5" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="4" fill="#1434CB" />
                <path d="M8.5 8.5h15v3h-15v-3z" fill="white" />
              </svg>
              <svg className="w-8 h-5" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="4" fill="#EB001B" />
                <circle cx="12" cy="10" r="6" fill="#FF5F00" />
                <circle cx="20" cy="10" r="6" fill="#F79E1B" />
              </svg>
            </div>
          </div> */}
        </div>
        {isBooked && (
          <CreateReviewCard eventId={event._id} setNewReview={setNewReview} />
        )}
      </div>
    </>
  );
};
const EventReviews = ({ eventId, newReview }) => {
  const { userInfo } = useContext(AuthContext);
  const [eventReviews, setEventReviews] = useState([]);

  const getReviews = async () => {
    try {
      const data = await apiRequiestWithCredentials(
        "get",
        `/browse-reviews/${eventId}`
      );
      setEventReviews(data?.reviews);
    } catch (error) {
      setEventReviews([]);
    }
  };
  useEffect(() => {
    getReviews();
  }, []);
  useEffect(() => {
    setEventReviews((prev) => {
      return [
        ...prev,
        {
          ...newReview,
          user: {
            avatar: userInfo?.avatar,
            name: userInfo?.name,
            email: userInfo?.email,
          },
        },
      ];
    });
  }, [newReview]);
  const handleDeleteReview = async (id) => {
    try {
      await apiRequiestWithCredentials("delete", `/delete-review/${id}`);
      const filterReview = eventReviews.filter((rev) => rev._id !== id);
      setEventReviews(filterReview);
      toast.success("Review deleted!");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="mt-5 md:mt-15 md:w-[50%]">
      <h1 className="text-[18px] border-b mb-5 border-gray-400 font-bold text-blue-900">
        Reviews
      </h1>

      <div className="flex flex-col gap-5">
        {" "}
        {eventReviews?.map((review, index) => {
          return (
            <div
              key={index}
              className="border  border-[#00000034] p-4 rounded-lg"
            >
              <div className="flex border-b border-[#0000002a]  py-3 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={
                      review?.user?.avatar && review.user.avatar.trim() !== ""
                        ? review.user.avatar
                        : "https://i.ibb.co/hRGTZWdX/download.jpg"
                    }
                    className="w-[35px] h-[35px]  rounded-[50%]"
                    alt="profile"
                  />
                  <div>
                    <h3 className="font-bold text-sm">{review?.user?.name}</h3>
                    <p className="text-sm opacity-90">{review?.date}</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-yellow-500 text-[16px]">
                    ★ {review.rating}{" "}
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <p className="mt-2 font-medium opacity-80">{review.comment}</p>
              </div>
              {review?.user?.email === userInfo?.email && (
                <div
                  className="text-end border-t border-[#0000002a]  
                   pt-1 "
                >
                  <button
                    type="button"
                    className="w-full cursor-pointer inline-flex justify-center 
              rounded-md border border-transparent shadow-sm 
              text-xs px-1 py-0.5 bg-red-600  
              font-medium text-white hover:bg-red-700  
              sm:ml-3 sm:w-auto "
                    onClick={() => handleDeleteReview(review._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CreateReviewCard = ({ eventId, setNewReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleClick = (index) => {
    setRating(index);
  };
  const [reviewLoading, setReviewLoading] = useState(false);
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const review = {
      event: eventId,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };
    if (!comment || rating <= 0 || !eventId) {
      toast.error("comment, rating and event is required!");
      return;
    }
    setReviewLoading(true);
    try {
      const data = await apiRequiestWithCredentials(
        "post",
        "/create-review",
        review
      );
      
      setNewReview({...review,_id : data?.id});
      setComment("");
      setRating(0);
      toast.success("Thanks a lot for sharing your thoughts with us!");
      setReviewLoading(false);
    } catch (error) {  
      toast.error(error?.response?.data?.message);
      setReviewLoading(false);
    }
  };
  return (
    <>
      <div className="border  border-[#00000034] p-4 rounded-lg  mt-10">
        <div className="border-b border-[#0000002a]  pb-2 justify-between items-center">
          <p className="text-[15px] font-medium opacity-80">Your Rating</p>
          {/* implement rating */}
          <div className="">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl cursor-pointer transition-colors duration-200 ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleClick(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmitReview} className="mb-3">
          <textarea
            name="review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="review"
            rows={5}
            placeholder="Comment"
            className="w-[100%] p-1 outline-none mt-2 h-[100px] border border-[#0000002a] resize-none"
          ></textarea>
          <div>
            <input type="checkbox" name="term" id="term" className="mr-3" />
            <span className="opacity-90 text-[15px] ">
              We care about your data, here is our{" "}
              <a className="opacity-100 font-semibold" href="">
                Privacy Policy
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="px-4 cursor-pointer py-2 rounded-[3px] 
            font-[400] mt-3  text-[16px] bg-[#0000008a] text-white"
          >
            {reviewLoading ? "Submiting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </>
  );
};

const UpdateReview = ({
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
        `/delete-event/${deleteEvent}`
      );
      setDeleteEvent();
      setIsModalOpen();
      deleteFromUi(deleteEvent);
      toast.success("Event delete successfull.");
    } catch (error) {
      setDeleteEvent();
      toast.error(error?.response?.data?.message);
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
                  Delete Event
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this event? This action
                    cannot be undone and all participant registrations will be
                    cancelled.
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
              Delete
            </button>
            <button
              type="button"
              className="mt-3 cursor-pointer w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleCencelDelete}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_details;
