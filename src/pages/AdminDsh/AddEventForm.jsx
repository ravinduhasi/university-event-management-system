import React, { useState } from "react";
import { db } from "../firebase"; // Adjust the path based on your file structure
import { collection, addDoc } from "firebase/firestore";

const AddEventForm = ({ onClose }) => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [coordinatorName, setCoordinatorName] = useState("");
  const [coordinatorPhone, setCoordinatorPhone] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!eventName || !date || !time || !venue || !coordinates || !coordinatorName || !coordinatorPhone || !description) {
      setError("All fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "events"), {
        eventName,
        date,
        time,
        venue,
        coordinates,
        coordinatorName,
        coordinatorPhone,
        description,
      });

      setSuccess("Event added successfully!");
      setEventName("");
      setDate("");
      setTime("");
      setVenue("");
      setCoordinates("");
      setCoordinatorName("");
      setCoordinatorPhone("");
      setDescription("");
    } catch (error) {
      setError("Failed to add event. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-3 right-3 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="mb-6 text-xl font-semibold text-center text-blue-600">Add New Event</h2>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        {success && <p className="mb-4 text-sm text-green-500">{success}</p>}

        <form onSubmit={handleAddEvent} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "eventName", label: "Event Name", value: eventName, type: "text", placeholder: "Enter Event Name", setter: setEventName },
              { id: "date", label: "Date", value: date, type: "date", setter: setDate },
              { id: "time", label: "Time", value: time, type: "time", setter: setTime },
              { id: "venue", label: "Venue", value: venue, type: "text", placeholder: "Enter Venue", setter: setVenue },
              { id: "coordinates", label: "Coordinates (Latitude, Longitude)", value: coordinates, type: "text", placeholder: "Enter Coordinates", setter: setCoordinates },
              { id: "coordinatorName", label: "Coordinator Name", value: coordinatorName, type: "text", placeholder: "Enter Coordinator Name", setter: setCoordinatorName },
              { id: "coordinatorPhone", label: "Coordinator Phone", value: coordinatorPhone, type: "text", placeholder: "Enter Coordinator Phone", setter: setCoordinatorPhone },
            ].map(({ id, label, value, type, placeholder, setter }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  id={id}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder || ""}
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Event Description"
              rows="1"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
