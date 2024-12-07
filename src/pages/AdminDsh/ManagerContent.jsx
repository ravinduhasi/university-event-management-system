import Sidebar from "./ASidebar";
import EventContentHeader from "./EventContentHeader";
import EventManagerList from "./ManagerList";
import ManagerCard from "./managercard";

const EventContent = () => {
  return (
    
    <div className="w-full">
      <EventContentHeader />
      <div className="flex flex-col gap-4">
          <ManagerCard /> 
          <EventManagerList />
          </div>
      </div>
  );
};

export default EventContent;
