import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { states } from '../assets/data';

const PlaceDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [map, setMap] = useState(null);
  const [latLng, setLatLng] = useState([null, null]);

  const placeName = location.state?.placeName;
  const stateName = location.state?.stateName;

  const state = states.find((state) => state.name === stateName);
  const place = state?.places.find((place) => place.name === placeName);

  if (!state || !place) {
    navigate('/');
    return null;
  }

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const apiKey = '5b3ce3597851110001cf6248d5c52536159545b7b9e650cf17d0ee74';
        const geocodeUrl = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(
          placeName
        )}`;
        const response = await axios.get(geocodeUrl);

        if (response.data.features && response.data.features.length > 0) {
          const [longitude, latitude] = response.data.features[0].geometry.coordinates;
          setLatLng([latitude, longitude]);
        } else {
          throw new Error('Place not found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        alert('Unable to find the location for the specified place.');
      }
    };

    fetchCoordinates();
  }, [placeName]);

  useEffect(() => {
    const fetchRouteData = async () => {
      if (!latLng[0] || !latLng[1]) return;

      try {
        const userCoords = await new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => resolve(position.coords),
              (error) => reject(error)
            );
          } else {
            reject('Geolocation is not supported by your browser.');
          }
        });

        const apiKey = '5b3ce3597851110001cf6248d5c52536159545b7b9e650cf17d0ee74';
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userCoords.longitude},${userCoords.latitude}&end=${latLng[1]},${latLng[0]}`;
        const response = await axios.get(url);

        console.log('Route API Response:', response.data);

        const route = response.data.features[0];
        const segment = route.properties.segments[0];

        // Set distance (in km)
        setDistance((segment.distance / 1000).toFixed(2));

        const formatDuration = (durationInSeconds) => {
          // Double the input duration
          const doubledDuration = durationInSeconds * 2;
        
          const totalMinutes = Math.floor(doubledDuration / 60);
          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;
        
          if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''}${
              minutes > 0 ? ` ${minutes} minute${minutes > 1 ? 's' : ''}` : ''
            }`;
          } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''}`;
          }
        };
        
        // Example usage:
        setDuration(formatDuration(segment.duration));
        

        // Initialize map if it doesn't already exist
        if (!map) {
          const mapInstance = L.map('map').setView([userCoords.latitude, userCoords.longitude], 12);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance);

          L.marker([userCoords.latitude, userCoords.longitude])
            .addTo(mapInstance)
            .bindPopup('Your Location')
            .openPopup();
          L.marker([latLng[0], latLng[1]])
            .addTo(mapInstance)
            .bindPopup(placeName)
            .openPopup();

          const routeCoordinates = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
          L.polyline(routeCoordinates, { color: 'blue' }).addTo(mapInstance);

          setMap(mapInstance);
        } else {
          // Update the existing map
          map.setView([userCoords.latitude, userCoords.longitude], 12);
          map.eachLayer((layer) => map.removeLayer(layer));

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

          L.marker([userCoords.latitude, userCoords.longitude])
            .addTo(map)
            .bindPopup('Your Location')
            .openPopup();
          L.marker([latLng[0], latLng[1]])
            .addTo(map)
            .bindPopup(placeName)
            .openPopup();

          const routeCoordinates = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
          L.polyline(routeCoordinates, { color: 'blue' }).addTo(map);
        }
      } catch (error) {
        console.error('Error fetching route data:', error);
        alert('Could not calculate the route. Please try again later.');
      }
    };

    fetchRouteData();

    // Cleanup on unmount
    return () => {
      if (map) {
        map.off();
        map.remove();
        setMap(null);
      }
    };
  }, [latLng, map, placeName]);

  return (
    <div className="place-details">
      <h2>{placeName}</h2>
      <p>{place.description}</p>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      {distance && duration && (
        <div>
          <p>Distance: {distance} km</p>
          <p>Travel Time: {duration}</p>
        </div>
      )}
    </div>
  );
};

export default PlaceDetails;
