import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';

const course = [
  {
    title: "Web development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App development",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UI/UX development",
    icon: <BiBuilding />,
  },
];

const Card = () => {
  return (
    <div className="flex gap-5 items-center mt-8">
      {course.map((item, index) => (
        <div key={index} className="flex-1 bg-[#dde6ed] p-5 rounded-lg flex flex-col items-center gap-5 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
          <div className="bg-white text-5xl flex items-center justify-center p-5 rounded-2xl text-[#969393]">
            {item.icon}
          </div>
          <div className="bg-[#ffffffc0] w-full text-center py-2 text-sm text-[#526d82] rounded-lg">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
