// this is necessary since leaflet is not server-side compatible
"use client"

import styles from "./page.module.css";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ cases }) {
  const position = [52, 12]

  return <div>
    <MapContainer
      className={styles.mapContainer}
      center={position}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      {cases.map((c) => (
        <CircleMarker
          key={c.id}
          center={[c.address?.coordinates?.coordinates?.lat || 52, c.address?.coordinates?.coordinates?.lng || 12]}
          pathOptions={{ color: 'rgb(181, 35, 243)', opacity: 0, fillOpacity: 0.7 }}
          radius={10}
        />
      ))}
    </MapContainer>
  </div>
}
