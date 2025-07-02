
import React, { useContext } from "react";
import { AuthContext } from "../../controllers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
    const {isLoggedIn} = useContext(AuthContext)
  return (
   <> 
   <Helmet>
    <title>AthleticHub | About Us</title>
   </Helmet>
   
   <div className="max-w-5xl mx-auto px-5 py-10 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">About AthleticHub</h1>
        <p className="sm:text-lg text-gray-600">
          Connecting athletes with the best events to compete, grow, and succeed.
        </p>
      </header>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At AthleticHub, our mission is to empower athletes of all levels by providing a comprehensive platform
          to discover, register, and participate in athletic events with ease. We aim to foster a thriving
          community where sports enthusiasts can connect, compete, and achieve their personal best.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          AthleticHub was born out of a passion for sports and a need for a streamlined way to manage
          athletic events. Founded in 2023 by a team of sports lovers and tech enthusiasts, we recognized
          the challenges athletes face in finding and registering for events. Our platform was created to solve
          this problem by making event management and participation simple and accessible for everyone.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Easy user registration and secure login using JWT and social authentication.</li>
          <li>Comprehensive event discovery with filters for sports type, date, and location.</li>
          <li>Seamless event registration and booking management.</li>
          <li>Tools for event organizers to create, manage, and analyze their events.</li>
          <li>User profiles with personalized dashboards and performance tracking.</li>
          <li>Community engagement through reviews, ratings, and feedback.</li>
          <li>Mobile-friendly, responsive design for access on any device.</li>
        </ul>
      </section>

      {/* Call to Action */}
      {!isLoggedIn && <section className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Join AthleticHub Today</h2>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Whether you're an athlete looking for your next competition or an organizer wanting to reach more participants,
          AthleticHub is here to support your journey.
        </p>
        <Link to='/signup'
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Get Started
        </Link>
      </section>}
    </div></>
  );
};

export default About;
