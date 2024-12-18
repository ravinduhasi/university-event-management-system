import React, { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddManagerForm from "./AddManagerForm";

const courses = [
  {
    title: "Add Manager",
    icon: <IoPersonAddSharp className="w-10 h-10" />,
    description: "Adding Manager to the system",
    action: "add-manager", // Action identifier
  },
  {
    title: "Update Manager",
    icon: <FaUserEdit className="w-10 h-10" />,
    description: "Updating Manager details",
    navigateTo: "/UpdateManager",
  },
  {
    title: "View Manager",
    icon: <FaUser className="w-10 h-10" />,
    description: "View Manager details",
    navigateTo: "/view-manager",
  },
];

const Eventcard = () => {
  const navigate = useNavigate();
  const [showAddManagerPopup, setShowAddManagerPopup] = useState(false);

  const handleCardClick = (actionOrRoute) => {
    if (actionOrRoute === "add-manager") {
      setShowAddManagerPopup(true);
    } else {
      navigate(actionOrRoute); // Navigate to the route if specified
    }
  };

  return (
    <div>
      {/* Add Manager Popup */}
      {showAddManagerPopup && <AddManagerForm onClose={() => setShowAddManagerPopup(false)} />}

      {/* Event Cards */}
      <div className="grid grid-cols-1 gap-6 mt-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(course.action || course.navigateTo)}
            className="relative flex flex-col overflow-hidden transition-transform duration-300 bg-white border shadow-md rounded-xl border-blue-gray-100 hover:scale-105"
          >
            {/* Icon Section */}
            <div className="bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center rounded-xl absolute top-[0.8rem] left-4 shadow-md w-12 h-12">
              <div className="text-xl text-white">{course.icon}</div>
            </div>

            {/* Main Content */}
            <div className="px-4 pt-8 pb-4 text-right">
              <h4 className="text-2xl font-semibold text-blue-gray-900">{course.title}</h4>
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t border-blue-gray-50">
              <p className="text-base text-blue-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventcard;
