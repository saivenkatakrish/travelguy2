import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { states } from '../assets/data';

const Explore = () => {
  const navigate = useNavigate();
  const firstRow = states.slice(0, 6);
  const secondRow = states.slice(6, 12);

  const handleStateClick = (stateName) => {
    navigate('/districts', { state: { stateName } });
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
            onClick={() => handleStateClick(state.name)}
          >
            <img src={state.image} alt={state.name} />
            <h3>{state.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
