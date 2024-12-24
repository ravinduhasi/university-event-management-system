import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";

const ViewClubs = () => {
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  // Fetch clubs data
  useEffect(() => {
    const fetchClubs = async () => {
      const querySnapshot = await getDocs(collection(db, "clubs"));
      const clubData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClubs(clubData);
    };
    fetchClubs();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Club Details</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying clubs */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-gray-600">Logo</th>
              <th className="px-6 py-4 text-left text-gray-600">Name</th>
              <th className="px-6 py-4 text-left text-gray-600">President</th>
              <th className="px-6 py-4 text-left text-gray-600">Email</th>
              <th className="px-6 py-4 text-left text-gray-600">Phone</th>
              <th className="px-6 py-4 text-left text-gray-600">Description</th>
              <th className="px-6 py-4 text-left text-gray-600">Created At</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={club.logoURL}
                    alt={`${club.clubName} logo`}
                    className="w-16 h-16 rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{club.clubName}</td>
                <td className="px-6 py-4">{club.presidentName}</td>
                <td className="px-6 py-4">{club.email}</td>
                <td className="px-6 py-4">{club.phone}</td>
                <td className="px-6 py-4">{club.description}</td>
                <td className="px-6 py-4">{new Date(club.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewClubs;
