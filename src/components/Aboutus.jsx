import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fes from '../assets/fes.jpg';
import union from '../assets/union.png';
import leo from '../assets/leo.jpg';
import rotract from '../assets/rotract.jpg';
import net from '../assets/net.jpg';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="py-20 text-center text-black bg-gradient-to-r from-stone-100 to-neutral-600">
                    <div className="container px-4 mx-auto">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">About EventAura</h1>
                        <p className="mb-8 text-xl md:text-2xl">Your Gateway to University Events and Experiences</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container px-4 py-16 mx-auto">
                    {/* Introduction Section */}
                    <section className="mb-20">
                        <h2 className="mb-8 text-3xl font-bold text-gray-800">Who We Are</h2>
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600">
                                    Eventaura is the official event management platform of Uva Wellassa University, 
                                    created to bring together students, faculty, and the community through engaging 
                                    university activities and club events.
                                </p>
                                <p className="text-lg text-gray-600">
                                    Founded in 2024 by Group 06, our platform serves as the central hub for all 
                                    university-related events, ticket bookings, and club interactions.
                                </p>
                            </div>
                            <img 
                                src={fes} 
                                alt="University Union" 
                                className="object-cover w-full h-64 rounded-lg shadow-xl"
                            />
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="mb-20">
                        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Features</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold">Event Management</h3>
                                <p className="text-gray-600">Comprehensive tools for clubs to organize and promote events</p>
                            </div>
                            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold">Ticket Booking</h3>
                                <p className="text-gray-600">Secure online ticket purchasing system for all university events</p>
                            </div>
                            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold">Club Hub</h3>
                                <p className="text-gray-600">Central platform for all university clubs and their activities</p>
                            </div>
                        </div>
                    </section>

                    {/* Participating Clubs Section */}
                    <section className="mb-20">
                        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Participating Clubs</h2>
                        <div className="grid gap-6 md:grid-cols-4">
                            <div className="club-card">
                                <img src={rotract} alt="Rotaract Club" className="club-image" />
                                <p className="club-name">Rotaract Club</p>
                            </div>
                            <div className="club-card">
                                <img src={leo} alt="Leo Club" className="club-image" />
                                <p className="club-name">Leo Club</p>
                            </div>
                            <div className="club-card">
                                <img src={net} alt="IEEE Club" className="club-image" />
                                <p className="club-name">IEEE Club</p>
                            </div>
                            <div className="club-card">
                                <img src={union} alt="Students' Union" className="club-image" />
                                <p className="club-name">Students' Union</p>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="px-8 py-16 mb-20 text-center bg-blue-50 rounded-xl">
                        <h2 className="mb-8 text-3xl font-bold text-gray-800">Our Mission</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            To enhance student life by providing a unified platform for event discovery, 
                            ticket management, and club engagement while fostering a vibrant university community.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;

// Add these styles to your CSS file
const styles = `
.club-card {
    @apply bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer;
}

.club-image {
    @apply w-full h-48 object-cover;
}

.club-name {
    @apply p-4 text-center font-semibold text-gray-700;
}
`;