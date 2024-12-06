import image1 from '../assets/image1.png';

const teachers = [
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
];

const TeacherList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between my-8">
        <h2 className="text-lg text-[#526d82]">Teachers</h2>
        <select className="px-3 py-2 border border-[#526d82] text-[#526d82] rounded-lg">
          <option value="english">English</option>
          <option value="math">Math</option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="flex items-center justify-between pr-2 transition duration-300 ease-in-out hover:bg-[#dde6ed] hover:rounded-lg"
          >
            <div className="flex items-center gap-5 text-[#526d82]">
              <img src={teacher.image} alt={teacher.name} className="w-12 h-12 bg-[#dde6ed] rounded-full" />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}hr.</span>
            <span className="text-lg font-bold">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
