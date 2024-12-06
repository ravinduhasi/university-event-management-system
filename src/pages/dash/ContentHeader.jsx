import { BiNotification, BiSearch } from 'react-icons/bi';

const ContentHeader = () => {
  return (
    <div className="w-3/4">
      <div className="flex items-center justify-between">
        <h1 className="text-[#526d82]">Dashboard</h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-[#dde6ed] p-2 rounded-lg">
            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent border-none outline-none p-1"
            />
            <BiSearch className="text-[#969393] text-2xl cursor-pointer transition-transform duration-500 ease-in-out" />
          </div>
          <div className="flex items-center justify-center bg-[#dde6ed] p-2 rounded-lg text-[#969393]">
            <BiNotification className="transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
