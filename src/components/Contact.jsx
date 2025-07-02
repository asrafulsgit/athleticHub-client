import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,subject,email, message}=formData;
    if(!name || !subject || !email || !message){
      toast.error('Please, fillup all required field.')
      return;
    }

    toast.success('Thanks for contacting us! We’ll be in touch shortly.')
   
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
   <> 
   <Helmet>
    <title>AthleticHub | Contact</title>
   </Helmet>
   <div className="max-w-3xl mx-auto px-6  py-10 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Contact Us</h1>
      <p className="sm:text-lg text-gray-600">
        Have questions or need help? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 
            outline-none focus:ring focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 
            outline-none focus:ring focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-800" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2  outline-none focus:ring focus:border-blue-500"
            placeholder="Subject of your message"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-800" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2  
            outline-none focus:ring focus:border-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div></>
  );
};

export default Contact;
