import React, { useEffect, useState } from 'react';

const ProfileHeader = () => {
  const [userData, setUserData] = useState(null);

  // Fetch session data from localStorage when the component mounts
  useEffect(() => {
    const session = localStorage.getItem('userSession');
    if (session) {
      setUserData(JSON.parse(session));
    }
  }, []);

  // If userData is null, display a loading message or spinner
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl min-h-[500px]">
      {/* Left Section: Profile Card */}
      <div className="flex flex-col items-center p-8 border-b border-gray-300 md:border-b-0 md:border-r gap-y-5">
        <h2 className="mb-6 text-xl font-semibold">User PROFILE</h2>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 mb-4 border-4 border-white rounded-full shadow-md"
        />
        <h3 className="mb-2 text-lg font-semibold">{userData.name}</h3>
        <button className="bg-[#27374d] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#1c2d3b] transition">
          Edit Profile
        </button>

        
      </div>

      {/* Right Section: Profile Details */}
      <div className="flex-1 p-8">
        <h3 className="mb-8 text-3xl font-bold text-center text-gray-800">Full Profile Details</h3>
        <ul className="space-y-6 divide-y divide-gray-300">
          <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
            <span className="font-medium text-gray-500">Full Profile Name:</span>
            <span className="font-semibold text-gray-800">{userData.name}</span>
          </li>
          <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
            <span className="font-medium text-gray-500">Position:</span>
            <span className="font-semibold text-gray-800">{userData.role}</span>
          </li>

          <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
            <span className="font-medium text-gray-500">E-Mail:</span>
            <span className="font-semibold text-gray-800">{userData.email}</span>
          </li>
          <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
            <span className="font-medium text-gray-500">Phone No:</span>
            <span className="font-semibold text-gray-800">{userData.phone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
