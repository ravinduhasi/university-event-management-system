import React from 'react';

const events = [
  {
    name: 'John',
    date: '2001/09/11',
    place: 'New York',
    club:'art',
    cost: '200',
  },
  {
    name: 'Doe',
    date: '2000/08/19',
    place: 'New York',
    club:'art',
    cost: '150',
  },
  {
    name: 'Smith',
    date: '1999/11/05',
    place: 'New York',
    club:'art',
    cost: '175',
  },
  {
    name: 'John',
    date: '2001/09/11',
    place: 'New York',
    club:'art',
    cost: '200',
  },
  {
    name: 'Doe',
    date: '2000/08/19',
    place: 'New York',
    club:'art',
    cost: '150',
  },
  {
    name: 'Smith',
    date: '1999/11/05',
    place: 'New York',
    club:'art',
    cost: '175',
  },
  {
    name: 'John',
    date: '2001/09/11',
    place: 'New York',
    club:'art',
    cost: '200',
  },
  {
    name: 'Doe',
    date: '2000/08/19',
    place: 'New York',
    club:'art',
    cost: '150',
  },
  {
    name: 'Smith',
    date: '1999/11/05',
    place: 'New York',
    club:'art',
    cost: '175',
  },
];


const EventList = () => {
  return (
    <div className="p-4">     
      <div className="overflow-x-auto overflow-y-scroll max-h-96">
        <table className="w-full min-w-[640px] table-auto border-collapse">
          <thead className='bg-gray-50'>
            <tr>
              <th  className="px-6 py-3 text-xs font-light tracking-wider text-left text-gray-500 uppercase">Name</th>
              <th  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date</th>
              <th  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Place</th>
              <th  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Cost</th>
              <th  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Club Name</th>
              <th  className="px-20 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{event.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{event.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{event.place}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{event.cost}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{event.club}</td>
                <td className="px-20 py-4 text-sm font-medium text-left whitespace-nowrap">
                  <a href="#" className="text-[#000000] hover:text-[#526d82]">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;