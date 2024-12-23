import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";

const UpdateManagerForm = () => {
  const [managers, setManagers] = useState([]);
  const [selectedManager, setSelectedManager] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", managerId: "", department: "", phone: "" });
  const navigate = useNavigate();

  // Fetch managers data
  useEffect(() => {
    const fetchManagers = async () => {
      const querySnapshot = await getDocs(collection(db, "managers"));
      const managerData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setManagers(managerData);
    };
    fetchManagers();
  }, []);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle manager update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.managerId) return;

    try {
      const managerRef = doc(db, "managers", formData.managerId);
      await updateDoc(managerRef, {
        name: formData.name,
        email: formData.email,
        department: formData.department,
        phone: formData.phone
      });

      // Update manager in the state to reflect the changes instantly
      setManagers((prevManagers) =>
        prevManagers.map((manager) =>
          manager.id === formData.managerId
            ? { ...manager, name: formData.name, email: formData.email, department: formData.department, phone: formData.phone }
            : manager
        )
      );

      alert("Manager updated successfully!");
      setFormData({ name: "", email: "", department: "", phone: "", managerId: "" });
      setSelectedManager(null);
    } catch (error) {
      console.error("Error updating manager:", error);
    }
  };

  // Handle delete manager
  const handleDelete = async (id) => {
    try {
      const managerRef = doc(db, "managers", id);
      await deleteDoc(managerRef);
      alert("Manager deleted successfully!");
      setManagers(managers.filter((manager) => manager.id !== id));
    } catch (error) {
      console.error("Error deleting manager:", error);
    }
  };

  // Prefill form for updating
  const handleEdit = (manager) => {
    setSelectedManager(manager);
    setFormData({ name: manager.name, email: manager.email, department: manager.department, phone: manager.phone, managerId: manager.id });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Manage Managers</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying managers */}
      <div className="overflow-auto rounded-lg">
        <table className="w-[90%] bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-center text-gray-600">Name</th>
              <th className="px-6 py-4 text-center text-gray-600">Email</th>
              <th className="px-6 py-4 text-center text-gray-600">Department</th>
              <th className="px-6 py-4 text-center text-gray-600">Update</th>
              <th className="px-6 py-4 text-center text-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center">{manager.name}</td>
                <td className="px-6 py-4 text-center">{manager.email}</td>
                <td className="px-6 py-4 text-center">{manager.department}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEdit(manager)}
                    className="px-12 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(manager.id)}
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
      {selectedManager && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Update Manager</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
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
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedManager(null);
                    setFormData({ name: "", email: "", managerId: "", department: "", phone: "" });
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

export default UpdateManagerForm;
