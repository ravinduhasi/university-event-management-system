import React, { useState } from "react";
import ASidebar from "./ASidebar";
import Content from "./Content";

const LayoutWithSidebar = () => {
  const [activeContent, setActiveContent] = useState(<Content />);

  return (
    <div className="flex">
      {/* Sidebar */}
      <ASidebar setActiveContent={setActiveContent} />
      {/* Main Content */}
      <div className="flex-1 p-6">{activeContent}</div>
    </div>
  );
};

export default LayoutWithSidebar;
