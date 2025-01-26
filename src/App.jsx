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
import UpdateEventForm from "./pages/AdminDsh/update-event";
import ViewEvents from "./pages/AdminDsh/view-event";
import UpdateUserTable from "./pages/AdminDsh/update-user";
import ViewUsers from "./pages/AdminDsh/view-user";
import HomeTicket from "./pages/price-section/TicketHome";



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
        <Route path="/update-event" element={<UpdateEventForm/>} />
        <Route path="/view-event" element={<ViewEvents/>} />
        <Route path="/update-user" element={<UpdateUserTable/>} />
        <Route path="/view-user" element={<ViewUsers/>} />
        <Route path="/ticket" element={<HomeTicket/>} />
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
