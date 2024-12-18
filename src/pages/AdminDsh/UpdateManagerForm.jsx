import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

const UpdateManagerForm = () => {
  const [managers, setManagers] = useState([]);
  const [selectedManager, setSelectedManager] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", managerId: "" });

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
      await updateDoc(managerRef, { name: formData.name, email: formData.email });
      alert("Manager updated successfully!");
      setFormData({ name: "", email: "", managerId: "" });
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
    setFormData({ name: manager.name, email: manager.email, managerId: manager.id });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Manage Managers</h2>

      {/* Table displaying managers */}
      <div className="overflow-auto">
        <table className="w-full text-sm text-left border border-collapse border-gray-300 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id}>
                <td className="px-4 py-2 border border-gray-300">{manager.name}</td>
                <td className="px-4 py-2 border border-gray-300">{manager.email}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleEdit(manager)}
                    className="px-2 py-1 mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(manager.id)}
                    className="px-2 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update form */}
      {selectedManager && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Update Manager</h3>
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
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={() => {
                setSelectedManager(null);
                setFormData({ name: "", email: "", managerId: "" });
              }}
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
      )}
    </div>
  );
};

export default UpdateManagerForm;
