import { IoPersonAddSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const courses = [
  {
    title: "Add Manager",
    icon: <IoPersonAddSharp className="w-10 h-10" />,
    description: "Adding Manager to the system",
  },
  {
    title: "Update Manager",
    icon: <FaUserEdit className="w-10 h-10" />,
    description: "Updating Manager details",
  },
  {
    title: "View Manager",
    icon: <FaUser className="w-10 h-10" />,
    description: "View Manager details",
  },
];

const Eventcard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 cursor-pointer">
      {courses.map((course, index) => (
        <div
          key={index}
          className="relative flex flex-col bg-white rounded-xl shadow-md border border-blue-gray-100 overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          {/* Icon Section */}
          <div className="bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center rounded-xl absolute top-[0.8rem] left-4 shadow-md w-12 h-12">
            <div className="text-white text-xl">{course.icon}</div>
          </div>

          {/* Main Content */}
          <div className="pt-8 pb-4 px-4 text-right">
            <h4 className="text-2xl font-semibold text-blue-gray-900">{course.title}</h4>
          </div>

          {/* Footer Section */}
          <div className="border-t border-blue-gray-50 p-4">
            <p className="text-base text-blue-gray-600">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eventcard;