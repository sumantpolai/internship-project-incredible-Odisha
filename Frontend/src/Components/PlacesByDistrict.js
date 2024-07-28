import React, { useState, useEffect } from 'react';

function PlacesByDistrict({ districtId }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`http://localhost:3000/placebydistrict/${districtId}`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    if (districtId) {
      fetchPlaces();
    }
  }, [districtId]);

  return (
    <div>
      <h1>Places in District {districtId}</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.place_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlacesByDistrict;
