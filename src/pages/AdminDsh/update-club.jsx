import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const UpdateClubForm = () => {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [formData, setFormData] = useState({ clubName: "", description: "", email: "", phone: "", presidentName: "", clubId: "" });
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

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle club update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.clubId) return;

    try {
      const clubRef = doc(db, "clubs", formData.clubId);
      await updateDoc(clubRef, {
        clubName: formData.clubName,
        description: formData.description,
        email: formData.email,
        phone: formData.phone,
        presidentName: formData.presidentName,
      });

      // Update club in the state to reflect the changes instantly
      setClubs((prevClubs) =>
        prevClubs.map((club) =>
          club.id === formData.clubId
            ? { ...club, ...formData }
            : club
        )
      );

      alert("Club updated successfully!");
      setFormData({ clubName: "", description: "", email: "", phone: "", presidentName: "", clubId: "" });
      setSelectedClub(null);
    } catch (error) {
      console.error("Error updating club:", error);
    }
  };

  // Handle delete club
  const handleDelete = async (id) => {
    try {
      const clubRef = doc(db, "clubs", id);
      await deleteDoc(clubRef);
      alert("Club deleted successfully!");
      setClubs(clubs.filter((club) => club.id !== id));
    } catch (error) {
      console.error("Error deleting club:", error);
    }
  };

  // Prefill form for updating
  const handleEdit = (club) => {
    setSelectedClub(club);
    setFormData({
      clubName: club.clubName,
      description: club.description,
      email: club.email,
      phone: club.phone,
      presidentName: club.presidentName,
      clubId: club.id,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Clubs</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying clubs */}
      <div className="overflow-auto rounded-lg">
        <table className="w-[90%] bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-center text-gray-600">Club Name</th>
              <th className="px-6 py-4 text-center text-gray-600">Description</th>
              <th className="px-6 py-4 text-center text-gray-600">President</th>
              <th className="px-6 py-4 text-center text-gray-600">Email</th>
              <th className="px-6 py-4 text-center text-gray-600">Update</th>
              <th className="px-6 py-4 text-center text-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center">{club.clubName}</td>
                <td className="px-6 py-4 text-center">{club.description}</td>
                <td className="px-6 py-4 text-center">{club.presidentName}</td>
                <td className="px-6 py-4 text-center">{club.email}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEdit(club)}
                    className="px-12 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(club.id)}
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
      {selectedClub && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Update Club</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              
              <div>
                <label htmlFor="clubName" className="block text-sm font-medium text-gray-700">
                  Club Name
                </label>
                <input
                  type="text"
                  id="clubName"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone No:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="presidentName" className="block text-sm font-medium text-gray-700">
                  President Name
                </label>
                <input
                  type="text"
                  id="presidentName"
                  name="presidentName"
                  value={formData.presidentName}
                  onChange={handleInputChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedClub(null);
                    setFormData({ clubName: "", description: "", email: "", phone: "", presidentName: "", clubId: "" });
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

export default UpdateClubForm;
