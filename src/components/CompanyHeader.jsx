import React, { useState, useEffect } from "react";
import "./CompanyHeader.css";

const CompanyHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header className={`company-header ${isVisible ? "visible" : "hidden"}`}>
        <h1 className="company-name">Travel Explorer</h1>
      </header>
    </div>
  );
};

export default CompanyHeader;




/*import React from "react";
import "./CompanyHeader.css";

import clip from '../assets/travelling - Clipchamp.mp4';

const CompanyHeader = () => {
  return (
    <div>
        <header className="company-header">
            <h1 className="company-name">Travel Explorer</h1>
        </header>
    </div>
  );
};

export default CompanyHeader; */
