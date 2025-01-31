import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Home.css';
import backgroundImage from '../assets/Leonardo_Phoenix_10_Create_a_realistic_flat_and_horizontally_o_2.jpg';



const Home = () => {
  const navigate = useNavigate(); 

  const handleNavigateToHome = () => {
    navigate('/explore'); 
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="home-section">
      <h1>Welcome to Travel Explorer</h1>
      <h4>Discover your next adventure with us!</h4>
      <button onClick={handleNavigateToHome}>Explore</button> 
    </div>
 </div>
    
  );
};

export default Home;
