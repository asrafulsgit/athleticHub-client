import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'activity', label: 'Recent Activity' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'preferences', label: 'Preferences' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="https://avatar.iran.liara.run/public/45"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-100"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">John Athlete</h1>
            <p className="text-gray-600 mb-2">john@athletichub.com</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Athlete</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Event Organizer</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Premium Member</span>
            </div>
            <p className="text-gray-700 text-sm">
              Passionate runner and event organizer with 5+ years of experience in athletic competitions. Love connecting
              athletes with amazing events!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Edit Profile
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Events Participated', value: 12, color: 'blue' },
          { label: 'Events Organized', value: 8, color: 'green' },
          { label: 'Total Participants', value: 247, color: 'purple' },
          { label: 'Average Rating', value: '4.9', color: 'yellow' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`tab-button py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-500'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Full Name', value: 'John Athlete' },
                    { label: 'Email', value: 'john@athletichub.com' },
                    { label: 'Phone', value: '+1 (555) 123-4567' },
                    { label: 'Location', value: 'New York, NY' },
                    { label: 'Member Since', value: 'January 2023' },
                    { label: 'Date of Birth', value: 'March 15, 1990' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-600">{item.label}:</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Athletic Profile */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Athletic Profile</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 block mb-2">Preferred Sports:</span>
                    <div className="flex flex-wrap gap-2">
                      {['Running', 'Swimming', 'Cycling', 'Triathlon'].map((sport, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience Level:</span>
                    <span className="font-medium">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Marathon Time:</span>
                    <span className="font-medium">3:15:42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Contact:</span>
                    <span className="font-medium">Jane Doe - (555) 987-6543</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              {/* Similar to your HTML structure, map through activity data if needed */}
              <p className="text-gray-500">Activity list goes here...</p>
            </div>
          )}

          {activeTab === 'achievements' && <p className="text-gray-500">Achievements content goes here...</p>}
          {activeTab === 'preferences' && <p className="text-gray-500">Preferences content goes here...</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
