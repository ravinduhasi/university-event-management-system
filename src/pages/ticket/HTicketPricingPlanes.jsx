import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Adjust the path based on your file structure
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Pricing() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("createdAt", "desc"), limit(3));
        const querySnapshot = await getDocs(q);

        const fetchedEvents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(fetchedEvents);
      } catch (err) {
        console.error("Error fetching events: ", err);
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const handleNavigate = (eventId) => {
    console.log("Navigating to ticket page with event ID:", eventId);
    sessionStorage.setItem("eventId", eventId); // Save eventId to sessionStorage
    navigate('/ticket'); // Navigate to the ticket page
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col"></div>

      <div className="grid gap-12 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {events.map((event, index) => {
          const bgColor =
            index === 0 ? "bg-green-100" : index === 1 ? "bg-blue-100" : "bg-red-100";
          const dimensions = { width: "auto", height: "195px" };

          return (
            <div
              key={event.id}
              className={`relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105 ${bgColor}`}
              style={dimensions}
              onClick={() => handleNavigate(event.id)} // Pass event ID on click
            >
              <div className="flex">
                <img
                  src={event.photoURL ? event.photoURL : "https://via.placeholder.com/150"}
                  alt={event.eventName}
                  className="object-cover w-32 h-32 mr-4 rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-5">{event.eventName}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{event.description}</p>
                  <div className="flex items-start justify-start mt-4">
                    <div className="p-3 rounded-md bg-slate-50 w-[220px] h-[80px] flex items-center justify-center translate-x-180 -translate-y-13">
                      <p className="flex items-center text-sm font-semibold text-slate-500">
                        <span className="ml-2 text-4xl text-slate-900">
                          Rs.{event.ticketPrices && event.ticketPrices[1]}
                        </span>
                        <span className="ml-1.5">/ticket</span>
                      </p>
                    </div>
                  </div>
                  <ul className="flex-1 mt-2 space-y-2">
                    {event.features?.map((feature) => (
                      <li key={feature} className="flex items-center text-sm leading-6 text-slate-700">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
