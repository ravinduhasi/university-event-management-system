import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook
import {
  BiHome,
  BiMessage,
  BiUser,
  BiTask,
  BiHelpCircle,
  BiUserCircle,
} from "react-icons/bi";
import LogOut from "./LogOut";
import Content from "./Content";
import ManagerContent from "./ManagerContent";
import UserContent from "./UserContent";
import EventsContent from "./EventsContent";
import ProfileContent from "./ProfileContent";
import HelpContent from "./HelpContent";

const ASidebar = ({ setActiveContent }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate(); // Initialize the navigate function

  const menuItems = [
    { label: "Dashboard", icon: <BiHome />, content: <Content /> },
    { label: "Event Managers", icon: <BiMessage />, content: <ManagerContent /> },
    { label: "Users", icon: <BiUser />, content: <UserContent /> },
    { label: "Events", icon: <BiTask />, content: <EventsContent /> },
    { label: "Profile", icon: <BiUserCircle />, content: <ProfileContent /> },
    { label: "Help", icon: <BiHelpCircle />, content: <HelpContent /> },
  ];

  return (
    <div className="flex flex-col gap-10 h-[94vh] pl-5 bg-gray-100">
      {/* Header */}
      <div
        className="text-center px-3 py-10 text-[#27374d] flex items-center gap-5 cursor-pointer"
        onClick={() => {
          navigate("/"); // Navigate to the home page
          setActiveItem("Dashboard"); // Reset the active item to Dashboard
          setActiveContent(<Content />); // Set the content to Dashboard's content
        }}
      >
        <h1 className="text-2xl font-semibold">EventAura</h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-5 flex-grow">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveContent(item.content);
              setActiveItem(item.label); // Update the active item
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

export default ASidebar;
