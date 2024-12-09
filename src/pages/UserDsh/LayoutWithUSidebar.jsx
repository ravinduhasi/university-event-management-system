import React, { useState } from "react";
import USidebar from "./USidebar";
import EventsContent from "./EventsContent";

const LayoutWithUSidebar = () => {
  const [activeContent, setActiveContent] = useState(<EventsContent />);

  return (
    <div className="flex">
      {/* Sidebar */}
      <USidebar setActiveContent={setActiveContent} />
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">{activeContent}</div>
    </div>
  );
};

export default LayoutWithUSidebar;
