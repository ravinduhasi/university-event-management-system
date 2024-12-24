import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users data
  useEffect(() => {
          const fetchUsers = async () => {
              try {
                  const usersSnapshot = await getDocs(collection(db, "users"));
                  const usersData = usersSnapshot.docs
                      .map((doc) => ({ id: doc.id, ...doc.data() }))
                      .filter((user) => user.role === "user" || user.role === "manager");
  
                  const managersSnapshot = await getDocs(collection(db, "managers"));
                  const managersData = managersSnapshot.docs
                      .map((doc) => ({ id: doc.id, ...doc.data() }))
                      .filter((user) => user.role === "user" || user.role === "manager");
  
                  const combinedData = [...usersData, ...managersData];
  
                  setUsers(combinedData);
              } catch (error) {
                  console.error("Error fetching users:", error);
              }
          };
  
          fetchUsers();
      }, []);
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">User Details</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Table displaying users */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white table-fixed">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Name</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Email</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Department</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Phone Number</th>
              <th className="w-1/6 px-6 py-4 text-center text-gray-600">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center">{user.name}</td>
                <td className="px-6 py-4 text-center">{user.email}</td>
                <td className="px-6 py-4 text-center">{user.department}</td>
                <td className="px-6 py-4 text-center">{user.phone}</td>
                <td className="px-6 py-4 text-center">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
