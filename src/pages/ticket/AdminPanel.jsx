import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const AdminPanel = () => {
  const [ticket, setTicket] = useState({
    title: '',
    price: '',
    currency: '',
    frequency: '',
    description: '',
    features: '',
    cta: 'Book now', // Default value
    mostPopular: false, // Default is false, admin can change this
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox for boolean values
    }));
  };

  const handleAddTicket = async () => {
    try {
      const featuresArray = ticket.features.split(','); // Separate features by commas
      await addDoc(collection(db, 'tickets'), { ...ticket, features: featuresArray });
      alert('Ticket added successfully');
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold">Admin Panel - Add Ticket</h2>
      <input name="title" placeholder="Title" onChange={handleChange} className="block mb-2" />
      <input name="price" placeholder="Price" onChange={handleChange} className="block mb-2" />
      <input name="currency" placeholder="Currency" onChange={handleChange} className="block mb-2" />
      <input name="frequency" placeholder="Frequency" onChange={handleChange} className="block mb-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="block mb-2"></textarea>
      <input name="features" placeholder="Features (comma-separated)" onChange={handleChange} className="block mb-2" />
      
      {/* Checkbox for Most Popular */}
      <label className="block mb-2">
        <input
          type="checkbox"
          name="mostPopular"
          checked={ticket.mostPopular}
          onChange={handleChange}
        />{' '}
        Mark as Most Popular
      </label>
      
      <button onClick={handleAddTicket} className="px-4 py-2 text-white bg-blue-500">Add Ticket</button>
    </div>
  );
};

export default AdminPanel;
