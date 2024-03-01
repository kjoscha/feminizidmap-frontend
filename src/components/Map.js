// The following is a React component that uses Leaflet to create a map.

import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ children }) => {
  return (
    <MapContainer center={[52, 10]} zoom={8} style={{ height: 500 }}>
      <TileLayer url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  )
}

export default Map
