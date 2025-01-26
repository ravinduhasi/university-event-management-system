import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, storage } from "../firebase"; // Adjust the path based on your file structure
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddEventForm = ({ onClose }) => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [ticketPrice1, setTicketPrice1] = useState("");
  const [ticketPrice2, setTicketPrice2] = useState("");
  const [ticketPrice3, setTicketPrice3] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null); // State for photo file

  const handleAddEvent = async (e) => {
    e.preventDefault();

    if (
      !eventName ||
      !date ||
      !time ||
      !venue ||
      !coordinates ||
      !ticketPrice1 ||
      !ticketPrice2 ||
      !ticketPrice3 ||
      !description ||
      !photo
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      // Upload photo to Firebase Storage
      const storageRef = ref(storage, `event_photos/${photo.name}`);
      await uploadBytes(storageRef, photo);
      const photoURL = await getDownloadURL(storageRef);

      // Add event to Firestore
      await addDoc(collection(db, "events"), {
        eventName,
        date,
        time,
        venue,
        coordinates,
        ticketPrices: [ticketPrice1, ticketPrice2, ticketPrice3],
        description,
        photoURL, // Save the uploaded photo URL
        createdAt: new Date(),
      });

      toast.success("Event added successfully!");
      setEventName("");
      setDate("");
      setTime("");
      setVenue("");
      setCoordinates("");
      setTicketPrice1("");
      setTicketPrice2("");
      setTicketPrice3("");
      setDescription("");
      setPhoto(null);
    } catch (error) {
      toast.error("Failed to add event. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <ToastContainer />
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

        <form onSubmit={handleAddEvent} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "eventName", label: "Event Name", value: eventName, type: "text", placeholder: "Enter Event Name", setter: setEventName },
              { id: "date", label: "Date", value: date, type: "date", setter: setDate },
              { id: "time", label: "Time", value: time, type: "time", setter: setTime },
              { id: "ticketPrice1", label: "Ticket Price 1", value: ticketPrice1, type: "number", placeholder: "Enter Ticket Price 1", setter: setTicketPrice1 },
              { id: "coordinates", label: "Coordinates", value: coordinates, type: "text", placeholder: "Enter Coordinates", setter: setCoordinates },
              { id: "ticketPrice2", label: "Ticket Price 2", value: ticketPrice2, type: "number", placeholder: "Enter Ticket Price 2", setter: setTicketPrice2 },
              { id: "venue", label: "Venue", value: venue, type: "text", placeholder: "Enter Venue", setter: setVenue },
              { id: "ticketPrice3", label: "Ticket Price 3", value: ticketPrice3, type: "number", placeholder: "Enter Ticket Price 3", setter: setTicketPrice3 },
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
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Event Photo</label>
              <input
                type="file"
                id="photo"
                onChange={handlePhotoChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Event Description"
              rows="3"
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
