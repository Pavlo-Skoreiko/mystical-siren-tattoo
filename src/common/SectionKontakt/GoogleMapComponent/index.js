import React from 'react';

import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import {
  MapBox,
  MapTitle,
} from './styled';

const mapStyles = {
  width: "600px",
  height: "400px",
};

const locations = [
  {
    name: "Mystical Siren tattoo",
    location: {
      lat: 54.38048,
      lng: 18.61348,
    },
  },
];

const defaultCenter = {
  lat: 54.38048,
  lng: 18.61348,
};

const GoogleMapComponent = () => {
  return (
    <MapBox>
      <MapTitle>Ludwika Waryńskiego 13, 80-433 Gdańsk</MapTitle>

      <LoadScript googleMapsApiKey="AIzaSyAUsqKb7xFf3mi9QdrfjF84MnO-LR8JUiM">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.location}
              label={location.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </MapBox>
  );
};

export default GoogleMapComponent;
