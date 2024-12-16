import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, user data, etc.)
    console.log('User logged out');
    // Redirect to the home page after logout
    navigate('/');
  };

  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-5 text-lg font-semibold p-2 rounded-lg transition duration-300 ease-in-out text-[#27374d] hover:bg-[#27374d] hover:text-[#dde6ed] cursor-pointer"
    >
      <BiLogOut />
      <span>Logout</span>
    </div>
  );
};

export default LogOut;