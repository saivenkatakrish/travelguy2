import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './District.css';
import { districts } from '../assets/data'; // Import districts data

const District = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stateName = location.state?.stateName;

  // Find districts for the selected state
  const selectedDistricts = districts[stateName] || [];

  const handleDistrictClick = (districtName) => {
    navigate('/place-details', { state: { districtName, stateName } });
  };

  return (
    <div className="district-page">
      <h2>{stateName} - Districts</h2>
      <div className="district-table">
        {selectedDistricts.map((district, index) => (
          <div
            key={district}
            className="district-box"
            onClick={() => handleDistrictClick(district)}
          >
            <span>{district}</span>
            <span className="arrow">➜</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default District;
