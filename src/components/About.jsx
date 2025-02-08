import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import img1 from "../assets/travel1.jpg";
import img2 from "../assets/travel2.jpg";
import img3 from "../assets/travel3.jpg";
import img4 from "../assets/travel4.jpg";


const images = [img1, img2, img3, img4];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const aboutRef = useRef(null);
  const [isLocked, setIsLocked] = useState(true);
  const [lastImageReached, setLastImageReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const sectionTop = aboutRef.current.offsetTop;
      const scrollY = window.scrollY;
      const sectionHeight = aboutRef.current.clientHeight;
      const totalImages = images.length;

      // Calculate image index
      let index = Math.floor((scrollY - sectionTop) / (sectionHeight / totalImages));

      if (index < 0) index = 0;
      if (index >= totalImages - 1) {
        index = totalImages - 1;
        setLastImageReached(true); // Stop further changes
      } else {
        setLastImageReached(false);
      }

      // Prevent unnecessary re-renders
      if (index !== currentImage) {
        setCurrentImage(index);
      }

      // Unlock scrolling only after the last image is fully viewed
      setIsLocked(!lastImageReached);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentImage, lastImageReached]);

  return (
    <div className="about-container">
      <div ref={aboutRef} className={`about-section ${isLocked ? "locked" : ""}`}>
        <div className="text-container">
          <p className="brand-name">Travel Explorer</p>
        </div>

        <div className="image-scroll-container">
          <img src={images[currentImage]} alt="Travel" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
