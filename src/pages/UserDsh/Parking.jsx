import React, { useState } from 'react';

const parkingSlots = [
  {
    name: 'A',
    description: 'Convenient spot near the main entrance.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'S',
    description: 'Shaded area with easy access to elevators.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'D',
    description: 'Spacious spot near the bike parking zone.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'F',
    description: 'Prime location near the exit gate.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'G',
    description: 'Close to the charging station for electric vehicles.',
    image: 'https://via.placeholder.com/300x200'
  }
];

const ParkingManagementSystem = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    vehicleName: '',
    phoneNumber: '',
    date: '',
    slotNumber: '1'
  });

  const openBookingForm = (slotName) => {
    setSelectedSlot(slotName);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setFormData({
      username: '',
      vehicleName: '',
      phoneNumber: '',
      date: '',
      slotNumber: '1'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { slot: selectedSlot, ...formData });
    closeBookingForm();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Parking Management System</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {parkingSlots.map((slot) => (
          <div
            key={slot.name}
            className="relative flex flex-col bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openBookingForm(slot.name)}
          >
            <img
              src={slot.image}
              alt={`Parking Slot ${slot.name}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">Parking Slot {slot.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{slot.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isBookingFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Book Parking Slot</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="slotNumber" className="block text-sm font-medium text-gray-700">
                  Slot Number
                </label>
                <select
                  id="slotNumber"
                  name="slotNumber"
                  value={formData.slotNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeBookingForm}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingManagementSystem;
