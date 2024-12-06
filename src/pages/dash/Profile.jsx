import ProfileHeader from "./profileHeader";
import Userimage from '../assets/image1.png';
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: 'Html CSS',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'JAVA',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'react',
    duration: '2 hours',
    icon: <BiBook />,
  },
];

const Profile = () => {
  return (
    <div className="flex-1">
      <ProfileHeader />
      <div className="h-[85%] mt-8 bg-[#dde6ed] rounded-lg p-2 flex flex-col">
        <div className="w-full h-[250px] flex flex-col items-center justify-center">
          <img src={Userimage} alt="User" className="bg-white rounded-full w-[150px] mb-2" />
          <h3 className="text-[#526d52]">John Doe</h3>
          <span className="text-[#969393]">Teacher</span>
        </div>
        <div className="bg-white flex-1 p-2 flex flex-col gap-2">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#dde6ed] p-0 flex items-center justify-between rounded-lg">
              <div className="flex gap-5 items-center">
                <div className="bg-white w-[40px] h-[40px] flex items-center justify-center">
                  {course.icon}
                </div>
                <div className="flex flex-col">
                  <h5 className="title">{course.title}</h5>
                  <span className="text-sm">{course.duration}</span>
                </div>
              </div>
              <div className="font-bold text-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
