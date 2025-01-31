import React from "react";
import About from "./components/About";
import Home from './components/Home'; 
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import PlaceDetails from "./components/PlaceDetails"; // Import PlaceDetails component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Removed unused Switch
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
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

          <Route path="/explore" element={<Explore />} /> {/* Added explore route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/place-details" element={<PlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
