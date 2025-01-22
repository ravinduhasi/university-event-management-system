import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import defaultImage from '../../assets/images/image.png';

const ManagerList = () => {
  const [managers, setManagers] = useState([]);

  // Fetch managers data from Firestore
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">Manager List</h2>

      <div className="overflow-x-auto overflow-y-scroll max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {managers.map((manager) => (
              <tr key={manager.id} className="hover:bg-[#dde6ed] transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={manager.image || defaultImage} // Use uploaded image or default image
                    alt="Manager"
                    className="w-12 h-12 bg-gray-100 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{manager.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{manager.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{manager.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{manager.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerList;
