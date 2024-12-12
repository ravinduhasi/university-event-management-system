import UserList from "./UserList";
import UserHeader from "./UserHeader";
import Booking from "./Parking";

function UserContent() {
  return (
    <div className="w-full">
      <UserHeader />
        <div className=" h-full flex-col gap-4">
          <UserList />
          <Booking />
        </div>
      </div>
    
  );
}

export default UserContent;