import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
   <> 
   <Helmet>
    <title>AthleticHub | Privacy Policy</title>
   </Helmet>
   <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-2xl  md:text-3xl font-bold mb-3 md:mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>AthleticHub</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Personal Information:</strong> such as your name, email address, and contact details when you register or update your profile.</li>
        <li><strong>Event Information:</strong> details about the events you create, register for, or participate in.</li>
        <li><strong>Usage Data:</strong> including your interactions with our platform, pages visited, and features used.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Provide and improve our services.</li>
        <li>Process event registrations and payments.</li>
        <li>Communicate with you about updates, events, and promotions.</li>
        <li>Ensure the security and integrity of our platform.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your data with:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Trusted service providers who help us operate our platform.</li>
        <li>Event organizers for events you register for.</li>
        <li>Authorities if required by law or to protect our rights.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">4. Your Choices</h2>
      <p className="mb-4">
        You can:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Access and update your personal information in your profile.</li>
        <li>Opt out of marketing emails by following the unsubscribe instructions.</li>
        <li>Request deletion of your account by contacting us.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">5. Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your information. However, no system can guarantee absolute security.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> support@athletichub.com
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: July 1, 2025
      </p>
    </div></>
  );
};

export default PrivacyPolicy;
