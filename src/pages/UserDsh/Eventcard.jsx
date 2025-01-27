import React from 'react';
import event1 from '../../assets/images/fes.jpg'; // Import the image file
import event2 from '../../assets/images/image2.jpg'; // Import the image file
import event3 from '../../assets/images/image3.jpg';


const courses = [
  {
    image: event1, // Use the image file reference directly
  },
  {
    image: event2, // Repeat for other entries
  },
  {
    image: event3,
  },
];

const Eventcard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
      {courses.map((course, index) => (
        <div
          key={index}
          className="relative flex flex-col overflow-hidden transition-transform duration-300 bg-white border shadow-md rounded-xl border-blue-gray-100 hover:scale-105"
        >
          {/* Image Section */}
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={course.image} // Properly referencing the image path
              alt={`Course ${index + 1}`} // Adding an alt attribute for accessibility
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eventcard;
