import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const Clublist = () => {
  const [clubs, setClubs] = useState([]);

  // Real-time listener for club data
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "clubs"), (snapshot) => {
      const clubData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => a.clubName.localeCompare(b.clubName)); // Sort alphabetically by clubName
      setClubs(clubData);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Club List</h1>
      <div className="overflow-x-auto overflow-y-scroll max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Logo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                President
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Description
              </th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clubs.map((club) => (
              <tr key={club.id} className="transition duration-300 hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={club.logoURL}
                    alt={`${club.clubName} logo`}
                    className="w-12 h-12 bg-gray-100 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{club.clubName}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{club.presidentName}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{club.email}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{club.phone}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{club.description}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clublist;
