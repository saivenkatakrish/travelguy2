import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "show" : "hide"}`}>
      <h1 className="navbar-title">Travel Explorer</h1>
      <div className="navbar-links">
        {/*<Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about" onClick={() => handleScrollToSection("about")}>About</Link> */}
        <a href="#about" onClick={() => handleScrollToSection("about")}>About</a>
        <a href="#home" onClick={() => handleScrollToSection("home")}>Explore</a>
        <a href="#contact" onClick={() => handleScrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
