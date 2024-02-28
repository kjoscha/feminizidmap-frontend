// The following is a React component that uses Leaflet to create a map.

import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useStaticQuery, graphql } from "gatsby";

const Map = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allStrapiNewsIndividual {
        nodes {
          title
        }
      }
    }
  `);

  const offset = () => Math.random() * 5;

  const News = () => (
    data.allStrapiNewsIndividual.nodes.map((node) => (
      <CircleMarker center={[52 + offset(), 10 + offset()]}>
        <Popup>{node.title}</Popup>
      </CircleMarker>
    ))
  )

  return (
    <MapContainer center={[52, 10]} zoom={7} scrollWheelZoom={false} style={{ height: 500 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <News />
    </MapContainer>
  )
}

export default Map
