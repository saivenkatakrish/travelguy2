import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './District.css';
import { districts } from '../assets/data';

const District = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Get state name from URL parameters
  const params = new URLSearchParams(location.search);
  const stateName = params.get('state');

  // Find districts for the selected state
  const selectedDistricts = districts[stateName] || [];

  const handleDistrictClick = (districtName) => {
    // Find district details (image & description)
    const districtData = selectedDistricts.find(d => d.name === districtName);
    setSelectedDistrict(districtData);
  };

  const closePopup = () => {
    setSelectedDistrict(null);
  };

  const handleShowPlacesClick = () => {
    if (selectedDistrict) {
      // Navigate to the Places page instead of PlaceDetails
      navigate(`/places?state=${encodeURIComponent(stateName)}&district=${encodeURIComponent(selectedDistrict.name)}`);
    }
  };

  return (
    <div className="district-page">
      <h2>{stateName} - Districts</h2>
      <div className="district-table">
        {selectedDistricts.length > 0 ? (
          selectedDistricts.map((district) => (
            <div
              key={district.name}
              className="district-box"
              onClick={() => handleDistrictClick(district.name)}
            >
              <span>{district.name}</span>
              <span className="arrow">➜</span>
            </div>
          ))
        ) : (
          <p>No districts found for {stateName}.</p>
        )}
      </div>

      {/* Popup Box */}
      {selectedDistrict && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <img src={selectedDistrict.image} alt={selectedDistrict.name} className="popup-image" />
              <div className="popup-content">
                <h3>{selectedDistrict.name}</h3>
                <p>{selectedDistrict.description}</p>
                <button className="toggle-btn" onClick={handleShowPlacesClick}>
                  Show Famous Places
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default District;
