import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Event Details</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying events */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white table-fixed">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Event Name</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Date & Time</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Venue</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Coordinates</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Coordinator Name</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Coordinator Phone</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center">{event.eventName}</td>
                <td className="px-6 py-4 text-center">
                  {new Date(`${event.date}T${event.time}`).toLocaleString()}
                </td>

                <td className="px-6 py-4 text-center">{event.venue}</td>
                <td className="px-6 py-4 text-center">
                  {event.coordinates ? event.coordinates : "N/A"}
                </td>
                <td className="px-6 py-4 text-center">{event.coordinatorName}</td>
                <td className="px-6 py-4 text-center">{event.coordinatorPhone}</td>
                <td className="px-6 py-4 text-center">{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEvents;
