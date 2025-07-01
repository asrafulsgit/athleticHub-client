import React from "react";

const faqData = [
  {
    question: "How do I register for an event?",
    answer:
      "To register for an event, simply create an account, browse the events, and click on the 'Register' button for the event you want to join.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking from the 'My Bookings' section in your profile, subject to the event’s cancellation policy.",
  },
  {
    question: "Are there any fees for joining AthleticHub?",
    answer:
      "Creating an account is free. Some events may have registration fees which will be displayed on the event details page.",
  },
  {
    question: "How can I become an event organizer?",
    answer:
      "You can apply to become an event organizer by contacting us via the 'Contact' page. Once approved, you can create and manage your own events.",
  },
];

const FAQ = () => {
  return (
    <div className="md:max-w-10/12 mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      </div>
      {faqData.map((faq,index)=>(
        <div key={index} className="collapse collapse-plus 
        bg-base-100 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          {faq.question}
        </div>
        <div className="collapse-content text-sm">
          {faq.answer}
        </div>
      </div>
      )) }
     
    </div>
  );
};

export default FAQ;
