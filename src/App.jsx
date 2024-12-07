import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import AuthPage from "./pages/SigninAndSignup";
import ADashboard from "./pages/AdminDsh/AdminDashboard";
import ManagerContent from "./pages/AdminDsh/ManagerContent";
import UserContent from "./pages/AdminDsh/UserContent";
import EventsContent from "./pages/AdminDsh/EventsContent";
import ProfileContent from "./pages/AdminDsh/profileContent";
import HelpContent from "./pages/AdminDsh/HelpContent";
import ASidebar from "./pages/AdminDsh/ASidebar";

// Layout Component with Sidebar
function LayoutWithSidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <ASidebar />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (No Sidebar) */}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<AuthPage />} />
        <Route path="/admin" element={<ADashboard />} />

        {/* Routes With Sidebar */}
        <Route element={<LayoutWithSidebar />}>
        <Route path="/ADashboar" element={<ADashboard />} />
          <Route path="/EventContent" element={<ManagerContent />} />
          <Route path="/UserContent" element={<UserContent />} />
          <Route path="/EventsContent" element={<EventsContent />} />
          <Route path="/ProfileContent" element={<ProfileContent />} />
          <Route path="/HelpContent" element={<HelpContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
