import React, { useState } from "react";
import MSidebar from "./MSidebar";
import EventsContent from "./EventsContent";

const LayoutWithMSidebar = () => {
  // State to manage active content
  const [activeContent, setActiveContent] = useState(<EventsContent />);

  return (
    <div className="flex">
      {/* Sidebar */}
      <MSidebar setActiveContent={setActiveContent} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">{activeContent}</div>
    </div>
  );
};

export default LayoutWithMSidebar;
