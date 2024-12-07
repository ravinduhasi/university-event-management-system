import { NavLink } from 'react-router-dom';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiUser,
  BiTask,
  BiHelpCircle,
  BiUserCircle,
} from 'react-icons/bi';
import LogOut from './LogOut';

const Sidebar = () => {
  const menuItems = [
    { path: "/", label: "Events", icon: <BiTask /> },
    { path: "/UserContent", label: "Users", icon: <BiUser /> },
    { path: "/ProfileContent", label: "Profile", icon: <BiUserCircle /> },
    { path: "/HelpContent", label: "Help", icon: <BiHelpCircle /> },
  ];

  return (
    <div className=" flex-col gap-10 h-[94vh] pl-5">
      {/* Header */}
      <div className="text-center px-3 py-10 text-[#27374d] flex items-center gap-5 ">
        <BiBookAlt className="text-2xl" />
        <h1 className="text-2xl font-semibold">EDU VCDVSJ VMMC </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-5 flex-grow">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-5 text-lg font-semibold p-3 rounded-lg transition duration-300 ease-in-out ${
                isActive
                  ? "bg-[#27374d] text-[#dde6ed]"
                  : "text-[#27374d] hover:bg-[#27374d] hover:text-[#dde6ed]"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Logout Component */}
        <LogOut />
      </div>
    </div>
  );
};

export default Sidebar;