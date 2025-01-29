import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Explore.css';
import backgroundImage from '../assets/Leonardo_Phoenix_10_Create_a_realistic_flat_and_horizontally_o_2.jpg';



const Explore = () => {
  const navigate = useNavigate(); 

  const handleNavigateToHome = () => {
    navigate('/home'); 
  };

  return (
    <div className="explore" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="explore-section">
      <h1>Welcome to Travel Explorer</h1>
      <h4>Discover your next adventure with us!</h4>
      <button onClick={handleNavigateToHome}>Explore</button> 
    </div>
 </div>
    
  );
};

export default Explore;
