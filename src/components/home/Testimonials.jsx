// import React from 'react'
// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Marathon Runner",
//     text: "AthleticHub made it so easy to find and register for local races. The platform is intuitive and the event organization is top-notch!",
//     rating : 3
//   },
//   {
//     name: "Mike Chen",
//     role: "Swimmer",
//     text: "Great variety of events and excellent customer support. I've participated in 5 events through this platform and each was well-organized.",
//   rating : 5
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Track & Field",
//     image: "https://i.ibb.co/qLLttyh1/photo-1544717297-fa95b6ee9643.jpg",
//     text: "As an event organizer, AthleticHub has streamlined my entire process. Registration management and participant communication is seamless.",
//   rating : 2
//   },
// ];


// const Testimonials = () => {
//   return (
//      <div className="bg-gray-50 py-16 px-5">
//       <div className="max-w-7xl mx-auto ">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl 
//         md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">What Athletes Say</h2>
//           <p className="sm:text-lg text-gray-600">Join thousands of satisfied participants</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           {testimonials?.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg border border-gray-200"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image || "https://i.ibb.co/PsHDfWt8/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"}
//                   alt={testimonial?.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">{testimonial?.name}</h4>
//                   <p className="text-gray-600 text-[12px]">
//                     {testimonial?.role.length > 150 ? `${testimonial?.role.slice(0,150)}...` : testimonial?.role}
//                     </p>
//                 </div>
//               </div>
//               <p className="text-gray-700">"{testimonial.text}"</p>
//               <div className="mt-3">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={`text-3xl cursor-pointer transition-colors duration-200 ${
//                   testimonial.rating >= star ? "text-yellow-400" : "text-gray-400"
//                 }`}
//                 onClick={() => handleClick(star)}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Testimonials


import React from "react";
import './testimonial.css';
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    text: "AthleticHub made it so easy to find and register for local races. The platform is intuitive and the event organization is top-notch!",
    rating: 4,
    image: "https://i.ibb.co/PsHDfWt8/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png",
  },
  {
    name: "Mike Anderson",
    role: "Cyclist",
    text: "Thanks to AthleticHub, I discovered new cycling events in my area and improved my race times.",
    rating: 5,
    image: "",
  },
  {
    name: "Lisa Wong",
    role: "Triathlete",
    text: "The event details and registration process are super clear. I love tracking my progress through the platform.",
    rating: 5,
    image: "",
  },
  {
    name: "David Kim",
    role: "Soccer Player",
    text: "Joining local tournaments was never easier. AthleticHub connects athletes with great events seamlessly.",
    rating: 4,
    image: "",
  },
  {
    name: "Emily Carter",
    role: "Swimmer",
    text: "The community and event updates keep me motivated and informed. Highly recommended for all athletes.",
    rating: 3,
    image: "",
  },
  {
    name: "John Lee",
    role: "Basketball Enthusiast",
    text: "A fantastic platform that keeps everything organized, from event registration to results tracking.",
    rating: 4,
    image: "",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="marquee-container"  >
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">What Athletes Say</h2>
          <p className="sm:text-lg text-gray-600">Join thousands of satisfied participants</p>
        </div>

        <div className="marquee-track" role="list">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div className="testimonial-card" key={i} role="listitem">
              <div className="testimonial-header">
                <img
                  src={t.image || "https://i.ibb.co/PsHDfWt8/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"}
                  alt={t.name}
                  className="testimonial-image"
                />
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                {[1,2,3,4,5].map(star => (
                  <span key={star} className={star <= t.rating ? "" : "inactive"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
