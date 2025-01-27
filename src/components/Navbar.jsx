import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (

        <nav className="flex items-center justify-between h-[70px] shadow-md bg-[#000000e6] px-12">
            <h3 className="mb-2 text-2xl font-semibold text-white">EventAura.</h3>
            <ul
                className={`${Mobile ? "flex flex-col absolute bg-white w-full left-0 top-16" : "hidden"
                    } md:flex md:flex-row md:space-x-8 md:w-auto `}
                onClick={() => setMobile(false)}
            >
                <li>
                    <Link to="/" className="block py-2 mt-1 text-lg text-center text-white md:py-0 ">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="block py-2 mt-1 text-lg text-center text-white md:py-0">
                        About
                    </Link>
                </li>

                <li>
                    <Link to="/feedback" className="block py-2 mt-1 text-lg text-center text-white md:py-0">
                        Feedback
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="block py-2 mt-1 text-lg text-center text-white md:py-0">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/signup"
                        className="text-lg py-1 px-6 block text-center text-white border border-white rounded-[60px] transition duration-300 hover:bg-[#ebebeb] hover:text-[#000000]"
                    >
                        SignUp
                    </Link>

                </li>
            </ul>

            <button
                className="text-2xl md:hidden"
                onClick={() => setMobile(!Mobile)}
            >
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
