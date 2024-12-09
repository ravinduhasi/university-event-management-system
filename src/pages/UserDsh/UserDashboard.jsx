import { Route, Routes, Navigate } from 'react-router-dom';
import UserContent from './UserContent';
import UProfileContent from './UProfileContent';
import UHelpContent from './UHelpContent';
import EventsContent from './EventsContent';

function UDashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="dashboard-content bg-white flex-1 rounded-2xl p-8 gap-6 justify-between">
        <Routes>
          <Route path="/" element={<EventsContent />} />
          <Route path="/EventsContent" element={<EventsContent />} />
          <Route path="/UserContent" element={<UserContent />} />
          <Route path="/UProfileContent" element={<UProfileContent />} />
          <Route path="/UHelpContent" element={<UHelpContent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default UDashboard;