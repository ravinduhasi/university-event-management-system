import Addclub from "../../assets/images/Addclub.png";
import Updateclub from "../../assets/images/Updateclub.png";
import Viewclub from "../../assets/images/Viewclub.png";

const courses = [
  {
    title: "Add Club",
    icon: <img src={Addclub} alt="Add Club" className="w-10 h-10" />,
    description: "Adding club to the system",
  },
  {
    title: "Update Club",
    icon: <img src={Updateclub} alt="Update Club" className="w-10 h-10" />,
    description: "Updating club details",
  },
  {
    title: "View Club",
    icon: <img src={Viewclub} alt="View Club" className="w-10 h-10" />,
    description: "View club details",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
      {courses.map((course, index) => (
        <div
          key={index}
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
  );
};

export default Card;