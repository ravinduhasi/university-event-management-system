import React from "react";
import Navbar from "./assets/pages/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Skills from "./assets/pages/Skills";
import Contact from "./assets/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
import React from 'react';
import Log from './assets/pages/SigninAndSignup';

export default function App() {
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

         
        </Routes>
      </Router>
    </>
  );
}


    <div>
      <Log />
    </div>
  )
}