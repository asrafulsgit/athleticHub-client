import React from 'react'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import { useContext } from 'react';
import { AuthContext } from '../../controllers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Profile_Update = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {setUserInfo}=useContext(AuthContext)
  const [profileInfo, setProfileInfo] = useState(state);
  const [selectedExpertise, setSelectedExpertise] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') return;

    setProfileInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const [updateLoading,setUpadateLoading]=useState(false)
  const handleUpdateProfile = async(e) => {
    e.preventDefault();
    setUpadateLoading(true)
    try {
        await apiRequiestWithCredentials('post','/update-profile',profileInfo)
        setUserInfo((prev)=>{
            return{
                ...prev,
                name : profileInfo.name,
                avatar : profileInfo.avatar
            }
        })
        setUpadateLoading(false)
        toast.success('Profile update successfull.')
        navigate('/profile')
    } catch (error) {
        setUpadateLoading(false)
        toast.success(error?.response?.data?.message)
    }
  };

  const handleExpertiseChange = (e) => {
    setSelectedExpertise(e.target.value);
  };

  const addExpertise = () => {
    if (
      selectedExpertise &&
      !profileInfo.experties?.includes(selectedExpertise)
    ) {
      setProfileInfo((prev) => {
        return{
            ...prev,
            experties : [...prev.experties,selectedExpertise]
        }
      });
      setSelectedExpertise('');
    }
  };

  const removeExpertise = (expertise) => {
    setProfileInfo((prev) => ({
      ...prev,
      experties: prev.experties.filter((exp) => exp !== expertise)
    }));
  };
  const sports=[
                  "Running",
                  "Swimming",
                  "Sprinting",
                  "Long-jump",
                  "High-jump",
                  "Hurdle-race",
                  "Cycling",
                  "Basketball",
                  "Tennis",
                  "Track-field",
                  "Triathlon",
                  "Weightlifting",
                  "Volleyball",
                  "Marathon"
                ]
  return (
   <>
   <Helmet>
        <title>Update profile</title>
      </Helmet>
   
   <section id="create-event" className="min-h-screen bg-gray-50 py-8"> 
      <div className="max-w-4xl mx-auto px-4">

      {/* Account Settings */}
        <form className="space-y-6" onSubmit={handleUpdateProfile}>
  {/* Personal Info */}
  <div>
    <h4 className="text-md font-medium text-gray-900 mb-4">Personal Information</h4>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={profileInfo?.name}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={profileInfo?.dob}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
        />
      </div>

      
    </div>
  </div>

  {/* Contact Info */}
  <div>
    <h4 className="text-md font-medium text-gray-900 mb-4">Contact Information</h4>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          defaultValue={profileInfo?.email}
          disabled
          readOnly
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none disabled:bg-gray-100 disabled:text-gray-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={profileInfo?.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={profileInfo?.location}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
        />
      </div>
    </div>
  </div>

  {/* Profile Picture */}
  <div>
    <h4 className="text-md font-medium text-gray-900 mb-4">Profile Picture</h4>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Profile Picture URL
    </label>
    <input
      type="text"
      name="avatar"
      value={profileInfo?.avatar}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
    />
  </div>

  {/* Bio */}
  <div>
    <h4 className="text-md font-medium text-gray-900 mb-4">About</h4>
    <div className="space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expertise
        </label>
        <div className="flex gap-4">
          <select
            value={selectedExpertise}
            onChange={handleExpertiseChange}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none"
          >
            <option value="">Select an expertise</option>
            {sports.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={addExpertise}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Display added expertises */}
        {profileInfo?.experties?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {profileInfo.experties.map((exp) => (
              <span
                key={exp}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2"
              >
                {exp}
                <button
                  type="button"
                  onClick={() => removeExpertise(exp)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
   <div> <label className="block text-sm font-medium text-gray-700 mb-2">
      Bio
    </label>
    <textarea
      name="bio"
      rows="4"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
      placeholder="Tell us about yourself..."
      value={profileInfo?.bio}
      onChange={handleChange}
    /></div>
  </div>
</div>
  {/* Form Actions */}
  <div className="flex  gap-4 pt-6 border-t border-gray-200">
    <Link to='/profile'> 
        <button
            type="button"
            className="flex-1 cursor-pointer bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
            >
            Cancel
        </button>
    </Link>
    <button
      type="submit"
      className="flex-1 cursor-pointer bg-blue-600 text-white py-3 
      px-6 rounded-lg font-semibold hover:bg-blue-700 
      transition-colors duration-200"
    >
      {updateLoading ? 'Saving...' : 'Save Changes'}
    </button>
  </div>
</form>


    </div>
    </section>

      {/* Account Security */}
      {/* <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Account Security
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Password</h4>
              <p className="text-sm text-gray-500">Last updated 2 months ago</p>
            </div>
            <button
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              onClick={() => alert("Open change password modal")}
            >
              Change Password
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-500">
                Add an extra layer of security
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
              Enable 2FA
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
            <div>
              <h4 className="font-medium text-red-900">Delete Account</h4>
              <p className="text-sm text-red-600">
                Permanently delete your account and all data
              </p>
            </div>
            <button
              className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
              onClick={() => alert("Open delete modal")}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div> */}
    </>
  
  )
}

export default Profile_Update
