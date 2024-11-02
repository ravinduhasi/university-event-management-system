import React, { useState, useEffect } from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
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

const Home = () => {
    // Array of image URLs
    const images = [
        image1,
        image2,
        image3,
    ];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // 

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {/* Photo section */}
            <section className="grid grid-cols-1 m-0">
                <div className="flex justify-center">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                        className="w-full h-[600px] object-cover rounded-none shadow-lg"
                    />
                </div>
            </section>
            <div className="h-[150vh] bg-[#00000017]">
                <div>
                    <motion.h1
                    initial={{y: 50,opacity: 0}}
                    whileInView={{y:0,opacity: 1}}
                    transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,}}
                    
                    className="px-5 py-24 font-mono text-4xl font-bold text-center text-black">UNIVERSITY CLUBS...</motion.h1>
                    <motion.div
                    initial={{y: 50,opacity: 0}}
                    whileInView={{y:0,opacity: 1}}
                    transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,}}
                    
                    className="flex justify-center m-12 mt-2 space-x-20">
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
                    </motion.div>

                    <motion.div
                    initial={{y: 50,opacity: 0}}
                    whileInView={{y:0,opacity: 1}}
                    transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,}}
                    
                    className="flex justify-center py-10 m-12 space-x-20">
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
                    </motion.div>


                </div>


            </div>
            <Blog />
            <div>
                <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                
                className="px-5 py-16 font-mono text-4xl font-bold text-center text-black">UPCOMING EVENTS AND BOOKINGS...</motion.h1>

            </div>
            <Footer/>
        </>
    );
};

export default Home;
