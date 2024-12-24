import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import AuthPage from "./pages/SigninAndSignup";
import LayoutWithASidebar from "./pages/AdminDsh/LayoutWithASidebar";
import LayoutWithMSidebar from "./pages/managerDsh/LayoutWithMSidebar";
import LayoutWithUSidebar from "./pages/UserDsh/LayoutWithUSidebar";
import UpdateManagerForm from "./pages/AdminDsh/UpdateManagerForm";
import ViewManager from "./pages/AdminDsh/viewmanager";
import UpdateClubForm from "./pages/AdminDsh/update-club";
import ViewClubs from "./pages/AdminDsh/view-clubs";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<AuthPage />} />
        <Route path="/UpdateManager" element={<UpdateManagerForm/>} />
        <Route path="/view-manager" element={<ViewManager/>} />
        <Route path="/update-club" element={<UpdateClubForm/>} />
        <Route path="/view-clubs" element={<ViewClubs/>} />

        {/* Admin Dashboard */}
        <Route path="/admin/*" element={<LayoutWithASidebar />} />

        {/* Manager Dashboard */}
        <Route path="/manager/*" element={<LayoutWithMSidebar />} />

        {/* User Dashboard */}
        <Route path="/user/*" element={<LayoutWithUSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
