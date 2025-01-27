import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import user1 from "../assets/user1.jpg"; // Add user placeholder images
import user2 from "../assets/user2.jpg";
import user3 from "../assets/image2.jpg";


const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="py-16 text-black bg-gradient-to-r from-stone-100 to-neutral-600">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Share Your Feedback</h1>
                        <p className="text-xl">We value your experience with Eventaura</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container px-4 py-16 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Feedback Form */}
                        <div className="p-8 bg-white shadow-lg rounded-xl">
                            <h2 className="mb-6 text-2xl font-bold text-gray-800">Submit Feedback</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-gray-700">Your Name</label>
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
                                
                                <div className="space-y-2">
                                    <label className="block mb-2 text-gray-700">Rating</label>
                                    <div className="flex space-x-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                type="button"
                                                key={star}
                                                className={`text-3xl ${star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"}`}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setRating(star)}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block mb-2 text-gray-700">Your Feedback</label>
                                    <textarea 
                                        rows="5"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        placeholder="Share your experience with us..."
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit"
                                    className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        </div>

                        {/* Testimonials */}
                        <div className="space-y-8">
                            <h2 className="mb-6 text-2xl font-bold text-gray-800">Recent Feedback</h2>
                            <div className="space-y-6">
                                {/* Testimonial Cards */}
                                <div className="p-6 bg-white rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <img src={user1} alt="User" className="object-cover w-12 h-12 rounded-full" />
                                        <div className="ml-4">
                                            <h4 className="font-semibold">Prasha Michel</h4>
                                            <p className="text-sm text-gray-500">March 15, 2024</p>
                                        </div>
                                        <div className="ml-auto text-yellow-400">★★★★★</div>
                                    </div>
                                    <p className="text-gray-600">
                                        Amazing platform! Made event management so much easier for our university club.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <img src={user2} alt="User" className="object-cover w-12 h-12 rounded-full" />
                                        <div className="ml-4">
                                            <h4 className="font-semibold">Shani Fernando</h4>
                                            <p className="text-sm text-gray-500">March 12, 2024</p>
                                        </div>
                                        <div className="ml-auto text-yellow-400">★★★★☆</div>
                                    </div>
                                    <p className="text-gray-600">
                                        Great user experience, but would love to see more payment options.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <img src={user3} alt="User" className="object-cover w-12 h-12 rounded-full" />
                                        <div className="ml-4">
                                            <h4 className="font-semibold">Amila Sadakelum</h4>
                                            <p className="text-sm text-gray-500">March 10, 2024</p>
                                        </div>
                                        <div className="ml-auto text-yellow-400">★★★★★</div>
                                    </div>
                                    <p className="text-gray-600">
                                        The ticket booking process was seamless and straightforward. Highly recommend!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FeedbackPage;