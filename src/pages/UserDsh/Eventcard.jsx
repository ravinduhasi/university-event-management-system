import React from 'react';
import event from '../../assets/images/udashevent.jpg';

const courses = [
  {
    image: event, // Use the image file reference directly
  },
  {
    image: event, // Repeat for other entries
  },
  {
    image: event,
  },
];

const Eventcard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {courses.map((course, index) => (
        <div
          key={index}
          className="relative flex flex-col bg-white rounded-xl shadow-md border border-blue-gray-100 overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          {/* Image Section */}
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={course.image} // Properly referencing the image path
              alt={`Course ${index + 1}`} // Adding an alt attribute for accessibility
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eventcard;
