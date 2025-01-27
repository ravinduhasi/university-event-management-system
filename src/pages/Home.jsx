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
    // Array of image URLs with descriptions
    const sliderContent = [
        {
            image: image1,
            description: "Welcome to Uva Wellassa University - Where innovation meets excellence in higher education",
            alt: "University Main Building"
        },
        {
            image: image2,
            description: "Discovering new horizons through research and academic excellence",
            alt: "University Campus Life"
        },
        {
            image: image3,
            description: "Building tomorrow's leaders through quality education and practical experience",
            alt: "Student Activities"
        },
        {
            image: image4,
            description: "Join our vibrant community of learners and innovators",
            alt: "University Events"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            
            <section className="grid grid-cols-1 m-0">
                <div className="relative flex justify-center">
                    <img
                        src={sliderContent[currentImageIndex].image}
                        alt={sliderContent[currentImageIndex].alt}
                        className="w-full h-[600px] object-cover rounded-none shadow-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
                        <p className="text-xl text-center">
                            {sliderContent[currentImageIndex].description}
                        </p>
                    </div>
                </div>
            </section>
            <div className="h-[150vh] bg-[#00000017]">
                <div>
                    <h1 className="px-5 text-4xl font-bold text-center text-black py-15">UNIVERSITY CLUBS...</h1>
                    <div className="flex justify-center m-12 mt-2 space-x-20">
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={rotract} alt="Image 1" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Rotract club of uva wellassa university of srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={rayon} alt="Image 2" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Uva Rayon-Media club of Uva Wellassa University of Srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={union} alt="Image 3" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Main Students' Union-Uva Wellassa University of Srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={leo} alt="Image 3" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Leo club-Uva Wellassa University of Srilanka</p>
                        </div>
                    </div>

                    <div className="flex justify-center py-10 m-12 space-x-20">
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={art} alt="Image 1" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> art club of uva wellassa university of srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={ieee} alt="Image 2" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> IEEE club of Uva Wellassa University of Srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer">
                            <img src={gaval} alt="Image 3" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Gavel club-Uva Wellassa University of Srilanka</p>
                        </div>
                        <div className="w-[250px] h-[300px] bg-[#00000025] rounded-[30px] border-2 border-black transition duration-150 hover:scale-105 cursor-pointer ">
                            <img src={net} alt="Image 3" className="w-full h-full object-cover rounded-[30px]" />
                            <p className="mx-2 font-semibold text-center text-black"> Nature club-Uva Wellassa University of Srilanka</p>
                        </div>
                    </div>
                </div>
            </div>
            <Blog />
            <div>
                <h1 className="text-4xl font-bold text-center text-black pt-11">Booking Your Ticket Now...</h1>
            </div>
            <HTicketHome/>
            
            <Parking/>
            <Footer/>
        </>
    );
};

export default Home;