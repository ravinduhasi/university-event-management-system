import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data from localStorage
    localStorage.removeItem('userSession');
    console.log('User session cleared and logged out');

    // Redirect to the home page or login page
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
