import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import AuthPage from "./pages/SigninAndSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        {/* Routes instead of Switch */}
        <Routes>
          {/* Route path matches now require "element" prop */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignUp" element={<AuthPage />} />

         
        </Routes>
      </Router>
    </>
  );
}

export default App;
