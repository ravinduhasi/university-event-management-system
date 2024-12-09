import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import USidebar from '../UserDsh/USidebar';
import UserContent from '../UserDsh/UserContent';
import UProfileContent from '../UserDsh/UProfileHeader';
import UHelpContent from '../UserDsh/UHelpContent';
import EventsContent from '../UserDsh/EventsContent';

function UDashboard() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row gap-5">
        <USidebar />
        <div className="dashboard-content bg-white flex-1 rounded-2xl p-8 gap-6 justify-between">
          <Routes>
            
            <Route path="/" element={<EventsContent />} />
            {/* <Route path="/EventContent" element={<EventsContent />} /> */}
            <Route path="/UserContent" element={<UserContent />} />
            <Route path="/UProfileContent" element={<UProfileContent />} />
            
            <Route path="/UHelpContent" element={<UHelpContent />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default UDashboard;