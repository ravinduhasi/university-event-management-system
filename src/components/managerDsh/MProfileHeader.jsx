import React from 'react';

const ProfileHeader = () => {
  return (
    
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl min-h-[600px]">
        {/* Left Section: Profile Card */}
        <div className="p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-300 gap-y-5">
          <h2 className="text-xl font-semibold mb-6">MANAGER PROFILE</h2>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-md"
          />
          <h3 className="text-lg font-semibold mb-2">PROFILE NAME</h3>
          <button className="bg-[#27374d] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#1c2d3b] transition">
          Edit Profile
          </button>
        </div>

        {/* Right Section: Profile Details */}
        <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Full Profile Details</h3>
            <ul className="space-y-6 divide-y divide-gray-300">
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">Full Profile Name:</span>
                <span className="font-semibold text-gray-800">ABCDEF GHIJKLRGBBC BHJHDBFHV</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">Position:</span>
                <span className="font-semibold text-gray-800">ABCDEF GHIJKLRGBBC</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">Address:</span>
                <span className="font-semibold text-gray-800 text-right">
                  ABCDEF, GHIJKLRGBBC JHVDBFJHSB, DKVDFKJ VHJFD, DVJFD KDGFHBJRHDBV, EHJRBGVJERJHRB, JHRVNHVRHR.
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">E-Mail:</span>
                <span className="font-semibold text-gray-800">ABCDEF@GMAIL.COM</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">Phone No:</span>
                <span className="font-semibold text-gray-800">+123 456 789</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between py-4">
                <span className="font-medium text-gray-500">Alternate Phone:</span>
                <span className="font-semibold text-gray-800">071-12344567 / 041-1234567</span>
              </li>
            </ul>
          </div>

        </div>
      
    
  );
};

export default ProfileHeader;
