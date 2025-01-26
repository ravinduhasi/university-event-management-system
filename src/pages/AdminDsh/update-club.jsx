import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateClubForm = () => {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [formData, setFormData] = useState({ clubName: "", description: "", email: "", phone: "", presidentName: "", clubId: "" });
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

      setClubs((prevClubs) =>
        prevClubs.map((club) =>
          club.id === formData.clubId
            ? { ...club, ...formData }
            : club
        )
      );

      toast.success("Club updated successfully!");
      setFormData({ clubName: "", description: "", email: "", phone: "", presidentName: "", clubId: "" });
      setSelectedClub(null);
    } catch (error) {
      console.error("Error updating club:", error);
      toast.error("Error updating club. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const clubRef = doc(db, "clubs", id);
      await deleteDoc(clubRef);
      toast.success("Club deleted successfully!");
      setClubs(clubs.filter((club) => club.id !== id));
    } catch (error) {
      console.error("Error deleting club:", error);
      toast.error("Error deleting club. Please try again.");
    }
  };

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

      <ToastContainer />

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

      {selectedClub && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Update Club</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Input fields */}
              {/* Same inputs as in your original code */}
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
