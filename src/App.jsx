import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import AuthPage from "./pages/SigninAndSignup";
import LayoutWithASidebar from "./pages/AdminDsh/LayoutWithASidebar";
import LayoutWithMSidebar from "./pages/managerDsh/LayoutWithMSidebar";
import { AddManager } from "./pages/AddManager";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<AuthPage />} />
        <Route path="/AddManager" element={<AddManager />} />

        {/* Admin Dashboard */}
        <Route path="/admin/*" element={<LayoutWithASidebar />} />

        {/* Manager Dashboard */}
        <Route path="/manager/*" element={<LayoutWithMSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
