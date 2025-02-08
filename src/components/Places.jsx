import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Places.css';
import { famousPlaces } from '../assets/data';

const Places = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const stateName = params.get('state');
  const districtName = params.get('district');

  // Validate state and district names
  if (!stateName || !districtName) {
    return <p>Error: State or district information is missing.</p>;
  }

  // Get famous places for the selected district
  const places = famousPlaces[districtName] || [];

  // Handle navigation to place details
  const handlePlaceClick = (placeName) => {
    navigate(
      `/placedetails?state=${encodeURIComponent(stateName)}&district=${encodeURIComponent(
        districtName
      )}&place=${encodeURIComponent(placeName)}`
    );
  };
  
  return (
    <div className="places-page">
      <h2>
        Famous Places in {districtName}, {stateName}
      </h2>
      <div className="places-row">
        {places.length > 0 ? (
          places.map((place) => (
            <div
              key={place.name}
              className="place-card"
              onClick={() => handlePlaceClick(place.name)}
              aria-label={`View details about ${place.name}`}
            >
              <img
                src={place.image || '/placeholder-image.jpg'}
                alt={place.name}
                className="place-image"
              />
              <h3>{place.name}</h3>
            </div>
          ))
        ) : (
          <p>No famous places found for {districtName}.</p>
        )}
      </div>
    </div>
  );
};

export default Places;
