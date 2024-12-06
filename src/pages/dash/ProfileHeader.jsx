import { BiEdit } from "react-icons/bi";

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[#526d82]">Profile</h2>
      <div className="bg-[#dde6ed] p-3 rounded-lg text-[#969393] flex items-center justify-center">
        <BiEdit className="text-[20px] transition-transform duration-500 ease-in-out hover:scale-125 cursor-pointer" />
      </div>
    </div>
  );
}

export default ProfileHeader;
