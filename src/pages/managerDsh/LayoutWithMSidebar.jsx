import React, { useState } from "react";
import MSidebar from "./MSidebar";
import EventsContent from "./EventsContent";

const LayoutWithMSidebar = () => {
  const [activeContent, setActiveContent] = useState(<EventsContent />);

  return (
    <div className="flex">
      {/* Sidebar */}
      <MSidebar setActiveContent={setActiveContent} />
      {/* Main Content */}
      <div className="flex-1 p-6">{activeContent}</div>
    </div>
  );
};

export default LayoutWithMSidebar;
