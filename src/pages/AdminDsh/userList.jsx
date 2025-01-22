import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users data from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((user) => user.role === "user"); // Filter users with role = 'user'
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-6 text-2xl font-bold">User List</h2>
      <div className="overflow-x-auto overflow-y-scroll max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Profile Picture
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
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Phone Number
              </th>
              
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#dde6ed] transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={user.profilePicture || "https://via.placeholder.com/150"} // Display profile picture or fallback image
                    className="w-12 h-12 bg-gray-100 rounded-full"
                    alt={user.name}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">
                  {user.department || "N/A"} {/* Fallback if department is missing */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">
                  {user.phone || "N/A"} {/* Fallback if phone is missing */}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
