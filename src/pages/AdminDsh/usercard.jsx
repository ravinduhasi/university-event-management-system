import React, { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUserEdit, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm"; // Replace with the correct path to AddUserForm

const cards = [
  {
    title: "Add User",
    icon: <IoPersonAddSharp className="w-10 h-10" />,
    description: "Adding User to the system",
    action: "add-user", // Action identifier
  },
  {
    title: "Update User",
    icon: <FaUserEdit className="w-10 h-10" />,
    description: "Updating User details",
    navigateTo: "/update-user", // Navigation route
  },
  {
    title: "View User",
    icon: <FaUser className="w-10 h-10" />,
    description: "View User details",
    navigateTo: "/view-user", // Navigation route
  },
];

const Usercard = () => {
  const navigate = useNavigate();
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);

  const handleCardClick = (actionOrRoute) => {
    if (actionOrRoute === "add-user") {
      setShowAddUserPopup(true);
    } else {
      navigate(actionOrRoute);
    }
  };

  return (
    <div>
      {/* Add User Popup */}
      {showAddUserPopup && (
        <AddUserForm onClose={() => setShowAddUserPopup(false)} />
      )}

      {/* User Cards */}
      <div className="grid grid-cols-1 gap-6 mt-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.action || card.navigateTo)}
            className="relative flex flex-col overflow-hidden transition-transform duration-300 bg-white border shadow-md rounded-xl border-blue-gray-100 hover:scale-105"
          >
            {/* Icon Section */}
            <div className="bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center rounded-xl absolute top-[0.8rem] left-4 shadow-md w-12 h-12">
              <div className="text-xl text-white">{card.icon}</div>
            </div>

            {/* Main Content */}
            <div className="px-4 pt-8 pb-4 text-right">
              <h4 className="text-2xl font-semibold text-blue-gray-900">{card.title}</h4>
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t border-blue-gray-50">
              <p className="text-base text-blue-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usercard;
