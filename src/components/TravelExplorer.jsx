import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import './TravelExplorer.css';
import video from '../assets/travelling - Clipchamp.mp4';
/*import backgroundImage from '../assets/Leonardo_Phoenix_10_Create_a_realistic_flat_and_horizontally_o_2.jpg'; */
import backgroundImage from '../assets/Tourism-2.jpg';
import CompanyHeader from "./CompanyHeader";

const TravelExplorer = () => {
  const navigate = useNavigate();
  const [videoOpacity, setVideoOpacity] = useState(1); // State to manage video opacity

  const imageOverlayRef = useRef(null); // Reference for the overlay content

  const handleNavigateToExplore = () => {
    navigate('/explore');
  };

  useEffect(() => {
    // Handle scrolling to update video opacity
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Distance from the top of the page
      const fadeStart = 0; // Start fading when the user starts scrolling
      const fadeEnd = 700; // Fully faded by the time they've scrolled 300px

      const opacity = Math.max(1 - scrollTop / fadeEnd, 0); // Calculate opacity
      setVideoOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
        // Intersection Observer to detect when the element is visible
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add 'visible' class when in view
            } else {
                entry.target.classList.remove("visible"); // Remove 'visible' class when out of view
            }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        if (imageOverlayRef.current) {
        observer.observe(imageOverlayRef.current);
        }

        return () => {
        if (imageOverlayRef.current) {
            observer.unobserve(imageOverlayRef.current);
        }
        };
    }, []);

  return (
    <div className="travel-explorer">

        <CompanyHeader />

        {/* Full-Screen Video Section */}
        <section 
          className="video-section" 
          style={{ opacity: videoOpacity }} // Apply dynamic opacity
        >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="full-screen-video"
          aria-label="Travel journey background video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
            
          <h1>Welcome to Travel Explorer</h1>
          <p>Discover your next adventure with us!</p>
        </div>
      </section>

      {/* Background Image Section */}
      <section
        className="image-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div 
            ref={imageOverlayRef} 
            className="image-overlay-content"   //Initally stay hidden
        >
          <h1>
            "Traveling is the ultimate adventure, where every journey unfolds a new story waiting to be discovered."
          </h1>
          <p>
            Travel Explorer is your trusted travel partner to explore the most beautiful destinations in India. We provide curated travel packages tailored to your interests and budget.
          </p>
          <button onClick={handleNavigateToExplore}>Explore</button>
        </div>
      </section>
    </div>
  );
};

export default TravelExplorer;
