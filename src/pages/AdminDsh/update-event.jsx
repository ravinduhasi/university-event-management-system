import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const UpdateEventForm = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    venue: "",
    coordinates: "",
    ticketPrices: "",
    description: "",
    eventId: "",
  });
  const navigate = useNavigate();

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventData);
    };
    fetchEvents();
  }, []);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle event update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.eventId) return;

    try {
      const eventRef = doc(db, "events", formData.eventId);
      await updateDoc(eventRef, {
        eventName: formData.eventName,
        date: formData.date,
        time: formData.time,
        venue: formData.venue,
        coordinates: formData.coordinates,
        ticketPrices: formData.ticketPrices.split(",").map((price) => price.trim()),
        description: formData.description,
      });

      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === formData.eventId
            ? { ...event, ...formData, ticketPrices: formData.ticketPrices.split(",").map((price) => price.trim()) }
            : event
        )
      );

      alert("Event updated successfully!");
      setFormData({
        eventName: "",
        date: "",
        time: "",
        venue: "",
        coordinates: "",
        ticketPrices: "",
        description: "",
        eventId: "",
      });
      setSelectedEvent(null);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  // Handle delete event
  const handleDelete = async (id) => {
    try {
      const eventRef = doc(db, "events", id);
      await deleteDoc(eventRef);
      alert("Event deleted successfully!");
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  // Prefill form for updating
  const handleEdit = (event) => {
    setSelectedEvent(event);
    setFormData({
      eventName: event.eventName,
      date: event.date,
      time: event.time,
      venue: event.venue,
      coordinates: event.coordinates,
      ticketPrices: event.ticketPrices.join(", "),
      description: event.description,
      eventId: event.id,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Events</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying events */}
      <div className="overflow-auto rounded-lg">
        <table className="w-[90%] bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-center text-gray-600">Event Name</th>
              <th className="px-6 py-4 text-center text-gray-600">Date</th>
              <th className="px-6 py-4 text-center text-gray-600">Time</th>
              <th className="px-6 py-4 text-center text-gray-600">Venue</th>
              <th className="px-6 py-4 text-center text-gray-600">Ticket Prices</th>
              <th className="px-6 py-4 text-center text-gray-600">Update</th>
              <th className="px-6 py-4 text-center text-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center">{event.eventName}</td>
                <td className="px-6 py-4 text-center">{event.date}</td>
                <td className="px-6 py-4 text-center">{event.time}</td>
                <td className="px-6 py-4 text-center">{event.venue}</td>
                <td className="px-6 py-4 text-center">
                  {event.ticketPrices ? event.ticketPrices.join(", ") : "N/A"}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEdit(event)}
                    className="px-12 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="px-12 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update form in a modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Update Event</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              {[{ id: "eventName", label: "Event Name", type: "text", value: formData.eventName },
                { id: "date", label: "Date", type: "date", value: formData.date },
                { id: "time", label: "Time", type: "time", value: formData.time },
                { id: "venue", label: "Venue", type: "text", value: formData.venue },
                { id: "coordinates", label: "Coordinates", type: "text", value: formData.coordinates },
                { id: "ticketPrices", label: "Ticket Prices", type: "text", value: formData.ticketPrices }].map(({ id, label, type, value }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={handleInputChange}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEvent(null);
                    setFormData({
                      eventName: "",
                      date: "",
                      time: "",
                      venue: "",
                      coordinates: "",
                      ticketPrices: "",
                      description: "",
                      eventId: "",
                    });
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateEventForm;
