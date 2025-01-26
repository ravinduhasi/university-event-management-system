import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        phone: "",
        userId: "",
    });

    const navigate = useNavigate();

    // Fetch users with role 'user' or 'manager'
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersSnapshot = await getDocs(collection(db, "users"));
                const usersData = usersSnapshot.docs
                    .map((doc) => ({ id: doc.id, ...doc.data() }))
                    .filter((user) => user.role === "user");

                const managersSnapshot = await getDocs(collection(db, "managers"));
                const managersData = managersSnapshot.docs
                    .map((doc) => ({ id: doc.id, ...doc.data() }))
                    .filter((user) => user.role === "user" || user.role === "manager");

                const combinedData = [...usersData, ...managersData];

                setUsers(combinedData);
            } catch (error) {
                console.error("Error fetching users:", error);
                toast.error("Error fetching users.");
            }
        };

        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!formData.userId) return;

        try {
            const userRef = doc(db, "users", formData.userId);
            await updateDoc(userRef, {
                name: formData.name,
                email: formData.email,
                department: formData.department,
                phone: formData.phone,
            });

            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === formData.userId
                        ? { ...user, ...formData }
                        : user
                )
            );

            toast.success("User updated successfully!");
            setFormData({
                name: "",
                email: "",
                department: "",
                phone: "",
                userId: "",
            });
            setSelectedUser(null);
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Error updating user.");
        }
    };

    const handleDelete = async (id) => {
        try {
            const userRef = doc(db, "users", id);
            await deleteDoc(userRef);
            toast.success("User deleted successfully!");
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user.");
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            department: user.department,
            phone: user.phone,
            userId: user.id,
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <ToastContainer />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Manage Users</h2>
                <button
                    onClick={() => navigate(-1)} // Navigate to the previous page
                    className="px-4 py-2 text-sm text-white bg-gray-600 rounded-md hover:bg-gray-700"
                >
                    Back
                </button>
            </div>

            <div className="overflow-auto rounded-lg">
                <table className="w-full bg-white">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-4 text-center text-gray-600">Name</th>
                            <th className="px-6 py-4 text-center text-gray-600">Email</th>
                            <th className="px-6 py-4 text-center text-gray-600">Department</th>
                            <th className="px-6 py-4 text-center text-gray-600">Role</th>
                            <th className="px-6 py-4 text-center text-gray-600">Update</th>
                            <th className="px-6 py-4 text-center text-gray-600">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-center">{user.name}</td>
                                <td className="px-6 py-4 text-center">{user.email}</td>
                                <td className="px-6 py-4 text-center">{user.department}</td>
                                <td className="px-6 py-4 text-center">{user.role}</td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="px-4 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="px-4 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="mb-4 text-lg font-semibold">Update User</h3>
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
                                    Phone
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
                                    onClick={() => setSelectedUser(null)}
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

export default UpdateUserTable;
