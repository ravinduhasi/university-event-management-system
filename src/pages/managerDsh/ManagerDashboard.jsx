import { Route, Routes, Navigate } from 'react-router-dom';
import UserContent from './UserContent';
import ProfileContent from './MprofileContent';
import HelpContent from './MHelpContent';
import EventsContent from './EventsContent';

function MDashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="dashboard-content bg-white flex-1 rounded-2xl p-8 gap-6 justify-between">
        <Routes>
          <Route path="/" element={<EventsContent />} />
          <Route path="/UserContent" element={<UserContent />} />
          <Route path="/MProfileContent" element={<ProfileContent />} />
          <Route path="/MHelpContent" element={<HelpContent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default MDashboard;