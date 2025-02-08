import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { placeDetailsData } from "../assets/data"; // Updated import

const PlaceDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [latLng, setLatLng] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false); // To track map initialization

  const params = new URLSearchParams(location.search);
  const placeName = params.get("place");
  const stateName = params.get("state");
  const districtName = params.get("district");

  useEffect(() => {
    console.log("State:", stateName, "District:", districtName, "Place:", placeName);
  }, [stateName, districtName, placeName]);



  const state = placeDetailsData[stateName];
  const district = state?.[districtName];
  const place = district?.find((p) => p.name === placeName);

  useEffect(() => {
    console.log("State:", state, "District:", district, "Place:", place);
    if (!state || !district || !place) {
      console.log("Invalid state or place, redirecting to home.");
      navigate("/", { replace: true });
    }
  }, [state, district, place, navigate]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!placeName) return;
      try {
        const apiKey = "5b3ce3597851110001cf6248d5c52536159545b7b9e650cf17d0ee74";
        const geocodeUrl = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(placeName)}`;
        const response = await axios.get(geocodeUrl);

        if (response.data.features.length > 0) {
          const [longitude, latitude] = response.data.features[0].geometry.coordinates;
          setLatLng([latitude, longitude]);
        } else {
          throw new Error("Place not found");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        alert("Unable to find the location for the specified place.");
      }
    };

    fetchCoordinates();
  }, [placeName]);

  useEffect(() => {
    const fetchRouteData = async () => {
      if (!latLng) return;

      try {
        const userCoords = await new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => resolve(position.coords),
              (error) => reject(error)
            );
          } else {
            reject("Geolocation is not supported by your browser.");
          }
        });

        const apiKey = "5b3ce3597851110001cf6248d5c52536159545b7b9e650cf17d0ee74";
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userCoords.longitude},${userCoords.latitude}&end=${latLng[1]},${latLng[0]}`;
        const response = await axios.get(url);

        const route = response.data.features[0];
        const segment = route.properties.segments[0];

        setDistance((segment.distance / 1000).toFixed(2));

        const formatDuration = (seconds) => {
          const doubledSeconds = seconds * 2; // Double the time
          const minutes = Math.floor(doubledSeconds / 60);
          const hours = Math.floor(minutes / 60);
          return hours > 0 ? `${hours}h ${minutes % 60}m` : `${minutes}m`;
        };

        setDuration(formatDuration(segment.duration));

        if (!mapInitialized) {
          const map = L.map("map").setView([userCoords.latitude, userCoords.longitude], 12);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

          L.marker([userCoords.latitude, userCoords.longitude])
            .addTo(map)
            .bindPopup("Your Location")
            .openPopup();

          L.marker(latLng)
            .addTo(map)
            .bindPopup(placeName)
            .openPopup();

          const routeCoordinates = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
          L.polyline(routeCoordinates, { color: "blue" }).addTo(map);

          setMapInitialized(true);
        }
      } catch (error) {
        console.error("Error fetching route data:", error);
        alert("Could not calculate the route.");
      }
    };

    fetchRouteData();
  }, [latLng, placeName, mapInitialized]);

  if (!latLng || !state || !district || !place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="place-details">
      <h2>{placeName}</h2>
      <img src={place?.image} alt={`Image of ${placeName}`} style={{ width: "100%", height: "auto" }} />
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
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
