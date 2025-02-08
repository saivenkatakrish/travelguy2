import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { regions } from '../assets/data';

const Explore = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (regionName) => {
    setSelectedRegion(regionName);
  };

  const handleStateClick = (stateName) => {
    navigate(`/districts?state=${encodeURIComponent(stateName)}`);
  };
  
  return (
    <div className="explore">
      <div className="hero">
        <h1>Welcome to Travel Explorer</h1>
        <h4>Discover your next adventure with us!</h4>
      </div>

      {/* Region Selection */}
      <div className="region-row">
        {Object.keys(regions).map((region) => (
          <button 
            key={region} 
            className="region-button" 
            onClick={() => handleRegionClick(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {/* State Display */}
      {selectedRegion && (
        <div>
          {regions[selectedRegion]
            .reduce((rows, state, index) => {
              if (index % 6 === 0) rows.push([]);
              rows[rows.length - 1].push(state);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={`row-${selectedRegion}-${rowIndex}`} className="state-row">
                {row.map((state) => (
                  <div
                    key={`${selectedRegion}-${state.name}`} // Ensuring uniqueness
                    className="state-card"
                    onClick={() => handleStateClick(state.name)}
                  >
                    <img src={state.image} alt={state.name} />
                    <h3>{state.name}</h3>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
