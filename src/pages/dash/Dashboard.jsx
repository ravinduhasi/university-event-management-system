import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';
import Profile from './Profile';
import Assignment from './assignment';
import Report from './report';
import Stats from './stats';
import Tasks from './tasks';
import Help from './help';

function Dashboard() {
  return (
    <Router>
      <div className="flex gap-5">
        <Sidebar />
        <div className="bg-white flex-1 rounded-2xl p-8 gap-6 flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<div><Content /><Profile /></div>} />
            <Route path="/assignment" element={<div><Assignment /><Profile /></div>} />
            <Route path="/report" element={<div><Report /><Profile /></div>} />
            <Route path="/stats" element={<div><Stats /><Profile /></div>} />
            <Route path="/tasks" element={<div><Tasks /><Profile /></div>} />
            <Route path="/help" element={<div><Help /><Profile /></div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;