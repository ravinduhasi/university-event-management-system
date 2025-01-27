import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import union from "../assets/union.png";
import leo from "../assets/leo.jpg";
import rotract from "../assets/rotract.jpg";
import art from "../assets/art.jpg";
import rayon from "../assets/rayon.jpg";
import gaval from "../assets/gavel.jpg";
import ieee from "../assets/ieee.jpg";
import net from "../assets/net.jpg";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HTicketHome from "./ticket/HTicketHome";
import Parking from "./UserDsh/Parking";

const Home = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 m-0">
        <div className="flex justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="object-cover w-full max-h-screen rounded-none shadow-lg"
          />
        </div>
      </section>
      <div className="h-auto bg-[#7171710b]">
        <div>
          <h1 className="px-5 text-4xl font-bold text-center text-black py-15">
            UNIVERSITY CLUBS...
          </h1>
          <div className="flex justify-center m-12 mt-2 space-x-20">
            {[rotract, rayon, union, leo].map((img, index) => (
              <div
                key={index}
                className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Club ${index + 1}`}
                  className="w-full h-full object-cover rounded-[30px]"
                />
                <p className="mx-2 font-semibold text-center text-black">
                  {/* Add respective club names here */}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-10 m-12 space-x-20">
            {[art, ieee, gaval, net].map((img, index) => (
              <div
                key={index}
                className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Club ${index + 5}`}
                  className="w-full h-full object-cover rounded-[30px]"
                />
                <p className="mx-2 font-semibold text-center text-black">
                  {/* Add respective club names here */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Blog />
      <div>
        <h1 className="text-4xl font-bold text-center text-black pt-11">
          Booking Your Ticket Now...
        </h1>
      </div>
      <HTicketHome />
      <Parking />
      <Footer />
    </>
  );
};

export default Home;
