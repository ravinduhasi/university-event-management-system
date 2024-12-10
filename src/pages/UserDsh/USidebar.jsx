import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BiBookAlt,
  BiUser,
  BiTask,
  BiHelpCircle,
  BiUserCircle,
} from 'react-icons/bi';
import LogOut from './LogOut';
import EventsContent from './EventsContent';
import UserContent from './UserContent';
import UProfileContent from './UProfileContent';
import UHelpContent from './UHelpContent';

const USidebar = ({ setActiveContent }) => {
  const [activeItem, setActiveItem] = useState("Events");
  const navigate = useNavigate();

  const menuItems = [
    { label: "Events", icon: <BiTask />, content: <EventsContent /> },
    { label: "Users", icon: <BiUser />, content: <UserContent /> },
    { label: "Profile", icon: <BiUserCircle />, content: <UProfileContent /> },
    { label: "Help", icon: <BiHelpCircle />, content: <UHelpContent /> },
  ];

  return (
    <div className="flex flex-col gap-10 h-[94vh] pl-5 bg-gray-100 p-8">
      {/* Header */}
      <div
        className="text-center px-3 py-10 text-[#27374d] flex items-center gap-5 cursor-pointer"
        onClick={() => {
          navigate("/"); // Navigate to the home page
          setActiveItem("Events"); // Reset the active item to Events
        }}
      >
        <h1 className="text-2xl font-semibold">  EventAura   </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-5 flex-grow">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveItem(item.label); // Update the active item
              setActiveContent(item.content); // Set the active content
            }}
            className={`flex items-center gap-5 text-lg font-semibold p-3 rounded-lg cursor-pointer transition duration-300 ease-in-out ${
              activeItem === item.label
                ? "bg-[#27374d] text-white"
                : "text-[#27374d] hover:bg-[#27374d] hover:text-white"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}

        {/* Logout Component */}
        <LogOut />
      </div>
    </div>
  );
};

export default USidebar;