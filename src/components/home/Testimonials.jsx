import React from 'react'
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    image: "https://avatar.iran.liara.run/public/12",
    text: "AthleticHub made it so easy to find and register for local races. The platform is intuitive and the event organization is top-notch!",
  },
  {
    name: "Mike Chen",
    role: "Swimmer",
    image: "https://avatar.iran.liara.run/public/25",
    text: "Great variety of events and excellent customer support. I've participated in 5 events through this platform and each was well-organized.",
  },
  {
    name: "Emily Rodriguez",
    role: "Track & Field",
    image: "https://avatar.iran.liara.run/public/38",
    text: "As an event organizer, AthleticHub has streamlined my entire process. Registration management and participant communication is seamless.",
  },
];
const Testimonials = () => {
  return (
     <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Athletes Say</h2>
          <p className="text-lg text-gray-600">Join thousands of satisfied participants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.text}"</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
