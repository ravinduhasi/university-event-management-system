import { NavLink } from 'react-router-dom';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from 'react-icons/bi';

const Sidebar = () => {
  const menuItems = [
    { path: "/", label: "Dashboard", icon: <BiHome /> },
    { path: "/assignment", label: "Assignment", icon: <BiMessage /> },
    { path: "/report", label: "Report", icon: <BiSolidReport /> },
    { path: "/stats", label: "Stats", icon: <BiStats /> },
    { path: "/tasks", label: "Tasks", icon: <BiTask /> },
    { path: "/help", label: "Help", icon: <BiHelpCircle /> },
  ];

  return (
    <div className="flex flex-col gap-10 h-[94vh]">
      <div className="text-center py-5 text-[#27374d] flex items-center gap-5">
        <BiBookAlt className="text-2xl" />
        <h1 className="text-2xl font-semibold">EDU</h1>
      </div>
      <div className="flex flex-col gap-5 flex-grow">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-5 text-lg font-semibold p-2 rounded-lg transition duration-300 ease-in-out ${
                isActive ? 'bg-[#27374d] text-[#dde6ed]' : 'text-[#27374d] hover:bg-[#27374d] hover:text-[#dde6ed]'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;