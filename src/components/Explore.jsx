import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { states } from '../assets/data';

const Explore = () => {
  const navigate = useNavigate();
  const firstRow = states.slice(0, 6);
  const secondRow = states.slice(6, 12);


  // Handle smooth scroll to state details section
  const handleScrollToState = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlaceClick = (placeName, stateName) => {
    if (placeName && stateName) {
      navigate('/place-details', { state: { placeName, stateName } });
    } else {
      console.error('Invalid place or state data');
    }
  };
  

  return (
    <div className="explore">
      <div className="hero">
        <h1>Welcome to Travel Explorer</h1>
        <h4>Discover your next adventure with us!</h4>
      </div>
    

      <div className="state-row">
        {firstRow.map((state) => (
          <div
            key={state.name}
            className="state-card"
            onClick={() => handleScrollToState(state.name)}
          >
            <img src={state.image} alt={state.name} />
            <h3>{state.name}</h3>
          </div>
        ))}
      </div>

      <div className="state-row">
        {secondRow.map((state) => (
          <div
            key={state.name}
            className="state-card"
            onClick={() => handleScrollToState(state.name)}
          >
            <img src={state.image} alt={state.name} />
            <h3>{state.name}</h3>
          </div>
        ))}
      </div>

      {states.map((state) => (
        <div key={state.name} id={state.name} className="state-details">
          <h2>{state.name}</h2>
          <p>{state.description}</p>
          <div className="places-row">
            {state.places.map((place) => (
              <div
                key={place.name}
                className="place-card"
                onClick={() => handlePlaceClick(place.name, state.name)}
              >
                <img src={place.image} alt={place.name} style={{ cursor: 'pointer' }} />
                <p>{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
