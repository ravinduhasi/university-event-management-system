import React from 'react';
import home from '../assets/images/samurai.jpg';
import CST from '../assets/images/CST_LAN.jpg';
import ENM from '../assets/images/ENM.jpg';
import MS from '../assets/images/MSCLUB.jpg';
import ICTGET from '../assets/images/ICTGET.jpg';
import AMUTHUDOSTHARA from '../assets/images/amuthudosthara.jpg';

const Blog = () => {
    return (
        
        <div className='px-20  py-6  bg-[#ffffff4e] h-full'>
                <div className='container'>
                    <div className='mb-5 text-center max-w-[600px]  mx-auto '>
                        
                        <p className='text-[45px] font-semibold text-[#073560]'>Club Artical</p>
                        <h1 className='text-3xl font-bold'>Main Notice</h1>
                    
                    </div>

                   
                    <div>
                        <div className='grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-3 place-items-center'>
                        
                            {/* card section */}

                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={MS}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>MS Club</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'>✨ MS Club of Uva Wellassa University ✨ 📢 Save the Date! We are thrilled to announce the Annual General Meeting of the  MS Club at Uva Wellassa University!  📅 Date:  January 8, 2025 🕛 Time:  05:30 PM Onwards 📍 Venue: TLT Join us for this historic occasion as we take the first step in building a vibrant community that embraces technology, fosters creativity, and empowers leaders of tomorrow.</p>
                                </div>
                            </div>
                            
                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={ENM}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>ENM Trophy</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'> G et ready for the ENM Trophy 2024 🔥🏏 Get ready for the ENM Trophy 2024 🔥🏏 #uwu🏆 After 2 years..Its back better than ever ...! Get ready for epic matches,unforgettable moments and cheer for your team...😎🤟🏻 Tomorrow is the day - Let's claim the trophy and bring the energy ! 💥 Let the battle begin ⚔🛡 </p>

                                </div>
                            </div>


                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={CST}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>CST LAN</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'> We are delighted to invite you to an electrifying DJ Night, organized by the students of the Computer Science and Technology degree program at Uva Wellassa University of Sri Lanka, in celebration of the CST Lan Challenge 2025.Date: 26th January 2025 (Today) Time: From 6.30 PM onwards Venue: MLT Car Park Bring your energy and let’s light up the night together—we can’t wait to see you on the dance floor!</p>
                                </div>
                            </div>
                            
                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={ICTGET}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>ICT Get Together</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'>Infosphere 25 - ICT Get Together💫 Join us for an evening of innovation, connection, and celebration! 📅 Date: January 11  🕔 Time: 5:00 PM  📍 Venue: Crown Regency, Badulla  Come together with industry professionals, tech enthusiasts, and friends for an unforgettable gathering. Let's connect, collaborate, and create lasting memories. Don't miss out—be part of the future of ICT!</p>
                                </div>
                            </div>

                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={AMUTHUDOSTHARA}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>New Event</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'> අමුතු දොස්තරගේ වෙල්ලස්සෙ ආගමනයට... තව දින 03 යි. 
                                        කලා සංගමය මහා ශිෂ්‍ය සංගමය
                                         ඌව වෙල්ලස්ස විශ්වවිද්‍යාල</p>
                                </div>
                            </div>

                            <div className='bg-[#ffffff] rounded-lg shadow-2xl h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[100px] sm:w-[300px] md:w-[200px] lg:w-[400px]'>
                                <img
                                    src={home}
                                    className='h-[250px] w-full object-cover rounded-md transition duration-700 ease-in-out hover:scale-105 cursor-pointer'
                                    alt='Samurai'
                                />
                                <div>
                                    <h3 className='font-semibold text-[25px] text-[#06b6d4] p-2'>New Event</h3>
                                    <p className='pl-2 text-sm text-gray-600 gap-7'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio, beatae voluptas eius laborum recusandae doloremque minima fugit, pariatur voluptatibus hic perferendis voluptatum iste, quas exercitationem aperiam magnam in numquam.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
        </div> 
        
    );
};

export default Blog;
