import { Route, Routes, Navigate } from 'react-router-dom';

import Sidebar from './ASidebar';
import Content from './Content';
import ManagerContent from './ManagerContent';
import UserContent from './UserContent';
import ProfileContent from './ProfileContent';
import HelpContent from './HelpContent';
import EventsContent from './EventsContent';

function ADashboard() {
  return (
    
      <div className="flex flex-col gap-5 md:flex-row">
        <Sidebar />
        <div className="justify-between flex-1 gap-6 p-8 bg-white dashboard-content rounded-2xl">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/EventContent" element={<ManagerContent />} />
            <Route path="/UserContent" element={<UserContent />} />
            <Route path="/ProfileContent" element={<ProfileContent />} />
            <Route path="/EventsContent" element={<EventsContent />} />
            <Route path="/HelpContent" element={<HelpContent />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default ADashboard;