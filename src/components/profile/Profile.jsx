import React, { useState } from 'react';
import { useEffect } from 'react';
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import Spinner from '../aditionals/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../../controllers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const {userInfo}=useContext(AuthContext)
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
  const [pageLoading,setPageLoading]=useState(true)
  const [stats,setStats]=useState({})
  const [profile,setProfile]=useState({
    name :userInfo?.name,
    email :userInfo?.email,
    avatar : userInfo?.avatar,
    experties: [],
    bio : '',
    phone : '',
    location : '',
    dob : ''
  })
  const getProfileInfo=async()=>{
    try {
      const data = await apiRequiestWithCredentials('get','/profile');
      setStats(data?.stats)
      const profileInfo = data?.profile;
      setProfile((prev)=>{
        return{
          ...prev,
          ...profileInfo
        }
      })
      setPageLoading(false)
    } catch (error) {
      
      setPageLoading(false)
    }
  }

  useEffect(()=>{
    getProfileInfo();
  },[])


  if(pageLoading){
    return(<Spinner /> )
  }

  return (
  <> <Helmet>
        <title>AthleticHub | Profile</title>
      </Helmet> <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={profile.avatar || "https://i.ibb.co/PsHDfWt8/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-100"
            />
            {/* <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button> */}
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{profile?.name}</h1>
            <p className="text-gray-600 mb-2">{profile?.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              {profile?.experties.map((expert,index)=>{
                return(
                  <span key={index} className="bg-blue-100 text-blue-800 
              text-xs font-medium px-2.5 py-0.5 rounded-full">{expert}</span>
                )
              }) }
             </div>
            <p className="text-gray-700 text-sm">
              {profile?.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
           <Link to='/update-profile' state={profile}> 
              <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Edit Profile
                </button>
            </Link>
            {/* <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
              Settings
            </button> */}
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Events Participated', value: stats?.eventsPaticipated || 0, color: 'blue' },
          { label: 'Events Organized', value: stats?.eventsOrganized || 0, color: 'green' },
          { label: 'Total Participants', value: stats?.totalParticipants || 0, color: 'purple' },
          { label: 'Average Rating', value: stats?.avgRating || 0, color: 'yellow' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className={`text-3xl font-bold text-${stat?.color}-600 mb-2`}>
              {stat?.value < 10 ? `0${stat?.value}` : stat?.value}
            </div>
            <div className="text-sm text-gray-600">{stat?.label}</div>
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
                    { label: 'Full Name', value: profile?.name },
                    { label: 'Email', value: profile?.email },
                    { label: 'Phone', value: profile?.phone },
                    { label: 'Location', value: profile?.location },
                    { label: 'Date of Birth', value: profile?.dob}
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-600">{item.label}:</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Athletic Profile */}
              {/* <div>
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
              </div> */}
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              
              <p className="text-gray-500">Activity list goes here...</p>
            </div>
          )}

          {activeTab === 'achievements' && <p className="text-gray-500">Achievements content goes here...</p>}
          {activeTab === 'preferences' && <p className="text-gray-500">Preferences content goes here...</p>}
        </div>
      </div>
    </div></>
  );
};

export default Profile;
