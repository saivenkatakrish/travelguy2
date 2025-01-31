import React from "react";
import './About.css';
import video from '../assets/travelling - Clipchamp.mp4';
import CompanyHeader from "./CompanyHeader";

const About = () => {
  return (
    <div className="about-container">

      <CompanyHeader />

      {/* Background Video */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          aria-label="Travel journey background video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    

      <div className="about-content">
        <h1>
          "Traveling is the ultimate adventure, where every journey unfolds a new story waiting to be discovered."
        </h1>
        <p>
          Travel Explorer is your trusted travel partner to explore the most beautiful destinations in India. We provide curated travel packages tailored to your interests and budget.
        </p>
      </div>
    </div>
  );
};

export default About;
