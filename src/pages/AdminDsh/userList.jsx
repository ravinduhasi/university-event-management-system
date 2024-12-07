import React from 'react';

const users = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    addDate: '2021-01-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane@example.com',
    addDate: '2021-02-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    addDate: '2021-01-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane@example.com',
    addDate: '2021-02-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    addDate: '2021-01-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane@example.com',
    addDate: '2021-02-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    addDate: '2021-01-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane@example.com',
    addDate: '2021-02-01',
  },
  // Add more users as needed
];

const UserList = () => {
  return (
    <div className=" p-4">
      <div className="overflow-x-auto max-h-96 overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Add Date
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-[#dde6ed] transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={user.image}
                    className="w-12 h-12 rounded-full bg-gray-100"
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
                  {user.addDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                  <a href="#" className="text-[#000000] hover:text-[#526d82]">
                    Edit
                  </a>
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