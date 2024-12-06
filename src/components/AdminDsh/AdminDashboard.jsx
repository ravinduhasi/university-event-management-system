import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Sidebar from './ASidebar';
import Content from './Content';
import ManagerContent from './ManagerContent';
import UserContent from './UserContent';
import ProfileContent from './ProfileContent';
import HelpContent from './HelpContent';
import EventsContent from './EventsContent';

function ADashboard() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row gap-5">
        <Sidebar />
        <div className="dashboard-content bg-white flex-1 rounded-2xl p-8 gap-6 justify-between">
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
    </Router>
  );
}

export default ADashboard;