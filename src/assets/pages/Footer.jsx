import React from "react";
import fb from '../images/fb.svg'; 
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import insta from '../images/insta.svg';
import img from '../images/fimg.jpg';
const Footer = () => {
  return (
    <div className="px-10 py-10 text-white bg-gray-800 md:px-20 lg:px-40">
      <div className="container grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:gap-50">

        {/* Contact Info Section */}
        <div className="space-y-2">
          <h4 className="p-1 mb-2 font-bold">Contact Info</h4>
          <a href="" className="block"><p>+94 766263405</p></a>
          <a href="" className="block"><p>tharindudilshan6263@gmaill.com</p></a>
          <a href="" className="block"><p>Badulla, Sri Lanka</p></a>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-2">
          <h4 className="mb-2 font-bold">Quick Links</h4>
          <a href="/resource" className="block"><p>Home</p></a>
          <a href="/testimonials" className="block"><p>Feedback</p></a>
          <a href="/stv" className="block"><p>Clubs</p></a>
        </div>

        {/* Legal Section */}
        <div className="space-y-4">
          <h4 className="mb-2 font-bold">Legal</h4>
          <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
            Contact Us
          </button>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-5">
            <img src={fb} alt="Facebook" className="w-6 h-6" />
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={insta} alt="Instagram" className="w-6 h-6" />
          </div>
        </div>

        <div>
        <img src={img} alt="Description of image" className="w-full h-full rounded-[8px] ring-2 ring-neutral-400" />
        </div>

      </div>

      <hr className="my-5 border-2 border-gray-700" />

      {/* Footer Bottom */}
      <div className="text-sm text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Created By Group 06. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="/terms"><p>Terms & Conditions</p></a>
          <a href="/privacy"><p>Privacy</p></a>
          <a href="/cookie"><p>Cookie Declaration</p></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
