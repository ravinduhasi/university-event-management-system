import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, addDoc, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parking1 from '../../assets/parking1.jpg';
import parking2 from '../../assets/parking2.jpg';
import parking3 from '../../assets/parking3.jpg';
import parking4 from '../../assets/parking4.jpg';
import parking5 from '../../assets/parking6.jpg';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBubWYb40n-2cIv1TPNPLjSW1mRmfFo4uM",
  authDomain: "taskform-8c494.firebaseapp.com",
  databaseURL: "https://taskform-8c494-default-rtdb.firebaseio.com",
  projectId: "taskform-8c494",
  storageBucket: "taskform-8c494.appspot.com",
  messagingSenderId: "544113440895",
  appId: "1:544113440895:web:ff116c0ad3c4766338274a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const parkingSlots = [
  { name: 'A', description: 'Convenient spot near the main entrance.', image: parking1 },
  { name: 'S', description: 'Shaded area with easy access to elevators.', image: parking2 },
  { name: 'D', description: 'Spacious spot near the bike parking zone.', image: parking3 },
  { name: 'F', description: 'Prime location near the exit gate.', image: parking4 },
  { name: 'G', description: 'Close to the charging station for electric vehicles.', image: parking5 },
];

const ParkingManagementSystem = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    uid: '',
    username: '',
    vehicleName: '',
    phoneNumber: '',
    date: '',
    slotNumber: '1',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem("userSession"));
    if (sessionData && sessionData.uid) {
      setFormData((prevData) => ({
        ...prevData,
        uid: sessionData.uid,
      }));
    }
  }, []);

  const openBookingForm = (slotName) => {
    setSelectedSlot(slotName);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setFormData({
      uid: '',
      username: '',
      vehicleName: '',
      phoneNumber: '',
      date: '',
      slotNumber: '1',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { uid, date, slotNumber } = formData;

    try {
      const bookingsRef = collection(db, 'bookedSlots');
      const q = query(bookingsRef, where('date', '==', date), where('slotNumber', '==', slotNumber));
      const userQuery = query(bookingsRef, where('date', '==', date), where('uid', '==', uid));

      const existingSlot = await getDocs(q);
      const existingUser = await getDocs(userQuery);

      if (!existingSlot.empty) {
        toast.error('This slot is already booked for the selected date.');
        setLoading(false);
        return;
      }

      if (!existingUser.empty) {
        toast.error('You have already booked a slot for this day.');
        setLoading(false);
        return;
      }

      await addDoc(bookingsRef, { ...formData, slot: selectedSlot });
      localStorage.setItem("userSession", JSON.stringify({ uid }));

      toast.success('Slot booked successfully!');
      closeBookingForm();
    } catch (error) {
      console.error('Error booking slot:', error);
      toast.error('Failed to book the slot. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Parking Management System</h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parkingSlots.map((slot) => (
          <div
            key={slot.name}
            className="relative flex flex-col overflow-hidden transition-transform duration-300 bg-white border border-gray-200 shadow-md cursor-pointer rounded-xl hover:scale-105"
            onClick={() => openBookingForm(slot.name)}
          >
            <img src={slot.image} alt={`Parking Slot ${slot.name}`} className="object-cover w-full h-40" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">Parking Slot {slot.name}</h2>
              <p className="mt-2 text-sm text-gray-600">{slot.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isBookingFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Book Parking Slot</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">Vehicle Name</label>
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="slotNumber" className="block text-sm font-medium text-gray-700">Slot Number</label>
                <select
                  id="slotNumber"
                  name="slotNumber"
                  value={formData.slotNumber}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
                  required
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
                  className="px-4 py-2 text-gray-800 bg-gray-200 rounded-lg"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-gray-900 rounded-lg"
                  disabled={loading}
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ParkingManagementSystem;
