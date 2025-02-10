import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Places.css';
import { famousPlaces } from '../assets/data';

const Places = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stateName = params.get('state');
  const districtName = params.get('district');

  const [userLocation, setUserLocation] = useState(null);

  // Retrieve user's location once
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        () => {
          console.warn('Geolocation not available or denied.');
        }
      );
    }
  }, []);

  // Validate state and district names
  if (!stateName || !districtName) {
    return <p>Error: State or district information is missing.</p>;
  }

  // Get famous places for the selected district
  const places = famousPlaces[districtName] || [];

  // Redirect to Google Maps
  const handleGoogleMapsRedirect = (place) => {
    const [placeLat, placeLng] = place.location
      .split(',')
      .map((coord) => parseFloat(coord.trim()));

    if (userLocation) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${placeLat},${placeLng}&travelmode=driving`;
      window.open(mapsUrl, '_blank');
    } else {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${placeLat},${placeLng}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className="places-page">
      <h2>
        Famous Places in {districtName}, {stateName}
      </h2>
      <div className="places-grid">
        {places.length > 0 ? (
          places.map((place) => (
            <div
              key={place.name}
              className="place-card"
              onClick={() => handleGoogleMapsRedirect(place)}
            >
              <img
                src={place.image || '/placeholder-image.jpg'}
                alt={place.name}
                className="place-image"
              />
              <div className="place-details">
                <h3>{place.name}</h3>
                <p className="place-description">{place.description}</p>
              </div>
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
