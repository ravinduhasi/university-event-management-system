import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import mapImage from '../assets/map.png'; // Add a map image to your assets

const ContactUs = () => {
    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="py-16 text-white bg-gradient-to-r from-blue-800 to-purple-900">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
                        <p className="text-xl">Get in touch with Eventaura team</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container px-4 py-16 mx-auto">
                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Contact Form */}
                        <div className="p-8 bg-white shadow-lg rounded-xl">
                            <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-gray-700">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-gray-700">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-gray-700">Message</label>
                                    <textarea 
                                        rows="5"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit"
                                    className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            {/* Contact Methods */}
                            <div className="p-8 bg-white shadow-lg rounded-xl">
                                <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <p className="text-gray-600">Uva Wellassa University, Badulla, Sri Lanka</p>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <p className="text-gray-600">+94 11 054 1325</p>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <p className="text-gray-600">eventaura@uwu.ac.lk</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="p-8 bg-white shadow-lg rounded-xl">
                                <h2 className="mb-6 text-2xl font-bold text-gray-800">Follow Us</h2>
                                <div className="flex space-x-6">
                                    <a href="#" className="transition-opacity hover:opacity-75">
                                        <img src={fb} alt="Facebook" className="w-8 h-8" />
                                    </a>
                                    <a href="#" className="transition-opacity hover:opacity-75">
                                        <img src={twitter} alt="Twitter" className="w-8 h-8" />
                                    </a>
                                    <a href="#" className="transition-opacity hover:opacity-75">
                                        <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                                <img 
                                    src={mapImage} 
                                    alt="University Location" 
                                    className="object-cover w-full h-64"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactUs;