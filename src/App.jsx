import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import District from "./components/District";
import Places from "./components/Places";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Main Page (Contains About, Home, Contact) */}
          <Route
            path="/"
            element={
              <>
                <div id="about">
                  <About />
                </div>
                <div id="home">
                  <Home />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            }
          />

          {/* Explore Page */}
          <Route path="/explore" element={<Explore />} />

          {/* District Page (Displays districts based on selected state) */}
          <Route path="/districts" element={<District />} />

          {/* Places Page (Displays places based on selected district) */}
          <Route path="/places" element={<Places />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
