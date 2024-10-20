import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (

        <nav className="flex items-center justify-between h-[70px] shadow-md bg-[#000000e6] px-12">
            <h3 className="text-2xl font-semibold text-white mb-2">EventAura.</h3>
            <ul
                className={`${Mobile ? "flex flex-col absolute bg-white w-full left-0 top-16" : "hidden"
                    } md:flex md:flex-row md:space-x-8 md:w-auto `}
                onClick={() => setMobile(false)}
            >
                <li>
                    <Link to="/" className="text-lg py-2 md:py-0 block text-center text-white mt-1 ">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-lg py-2 md:py-0 block text-center text-white mt-1">
                        About
                    </Link>
                </li>

                <li>
                    <Link to="/skills" className="text-lg py-2 md:py-0 block text-center text-white mt-1">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-lg py-2 md:py-0 block text-center text-white mt-1">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-lg py-1 px-6 block text-center text-white border border-white rounded-[60px] transition duration-300 hover:bg-[#ebebeb] hover:text-[#000000]"
                    >
                        Login
                    </Link>

                </li>
            </ul>

            <button
                className="md:hidden text-2xl"
                onClick={() => setMobile(!Mobile)}
            >
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
