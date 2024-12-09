import UserList from "./UserList";
import UserCard from "./UserCard";
import UserHeader from "./UserHeader";

function UserContent() {
  return (
    <div className="w-full">
      <UserHeader />
      
        <div className="flex flex-col gap-4">
          <UserCard />      
          <UserList />
        </div>
      </div>
    
  );
}

export default UserContent;