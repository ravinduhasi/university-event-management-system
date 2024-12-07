import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/SigninAndSignup";
import LayoutWithSidebar from "./pages/AdminDsh/LayoutWithSidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<AuthPage />} />

        {/* Layout With Sidebar */}
        <Route path="/admin/*" element={<LayoutWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
