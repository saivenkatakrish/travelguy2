import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import PlaceDetails from "./components/PlaceDetails";
import District from "./components/District"; // Import District component

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

          {/* Home Page */}
          <Route path="/explore" element={<Explore />} />

          {/* District Page (Displays districts based on selected state) */}
          <Route path="/districts" element={<District />} />

          {/* Place Details Page */}
          <Route path="/place-details" element={<PlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

