import image1 from '../../assets/images/image.png';

const events = [
  {
    image: image1,
    name: 'Jone witharana',
    club: 'art',
    managerid: '2102',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'art',
    managerid: '2103',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'art',
    managerid: '2104',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'leo',
    managerid: '2105',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'art',
    managerid: '2106',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'leo',
    managerid: '2109',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'art',
    managerid: '2110',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'leo',
    managerid: '2111',
    adddate: '2021-10-10',
  },
  {
    image: image1,
    name: 'Jone',
    club: 'art',
    managerid: '2112',
   
  },
];

const ManagerList = () => {
  return (
    <div className="p-4">
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
                Club
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Manager ID
              </th>
              <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"> </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-[#dde6ed] transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={event.image} className="w-12 h-12 bg-[#dde6ed] rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{event.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{event.club}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[#526d82]">{event.managerid}</td>
                
                <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
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

export default ManagerList;