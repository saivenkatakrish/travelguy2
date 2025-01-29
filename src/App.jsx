import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Explore from './components/Explore'; 
import Home from "./components/Home";
import Contact from "./components/Contact";
import PlaceDetails from "./components/PlaceDetails"; // Import PlaceDetails component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Removed unused Switch
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="about">
                  <About />
                </div>
                <div id="Explore">
                  <Explore />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/home" element={<Home />} /> {/* Added Home route */}
          <Route path="/place-details" element={<PlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
