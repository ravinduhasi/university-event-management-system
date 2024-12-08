import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Sidebar from './MSidebar';
import UserContent from './UserContent';
import ProfileContent from './MprofileContent';
import HelpContent from './MHelpContent';
import EventsContent from './EventsContent';

function MDashboard() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row gap-5">
        <Sidebar />
        <div className="dashboard-content bg-white flex-1 rounded-2xl p-8 gap-6 justify-between">
          <Routes>
            <Route path="/" element={<EventsContent />} />
            <Route path="/UserContent" element={<UserContent />} />
            <Route path="/ProfileContent" element={<ProfileContent />} />
            <Route path="/HelpContent" element={<HelpContent />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MDashboard;