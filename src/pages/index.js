// React component for the home page
import React, { useState } from "react";
import Layout from "../components/Layout.js";
import Map from "../components/Map.js";
import { CircleMarker } from "react-leaflet";
import { useStaticQuery, graphql } from "gatsby";
import offset from "../utils/offset.js";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query CasesQuery {
      allStrapiCase {
        nodes {
          identifier
          crime_date
        }
      }
    }
  `);

  const [activeTitle, setActiveTitle] = useState(null);

  const Marker = () => (
    data.allStrapiCase.nodes.map((node) => {
      const randomCoords = [52 + offset(node.identifier), 10 + offset(node.identifier.slice(0, 10))]

      return <CircleMarker
        key={node.identifier}
        center={randomCoords}
        color="none" fillColor={node.identifier == activeTitle ? "red" : "white"}
        fillOpacity={0.7}
        eventHandlers={{ click: () => setActiveTitle(node.identifier) }}
      >
      </CircleMarker>
    })
  )

  const List = () => (
    data.allStrapiCase.nodes.map((node) => (
      <ul>
        <li
          key={node.identifier}
          style={{ color: node.identifier == activeTitle ? "red" : "black" }}
          onClick={() => setActiveTitle(node.identifier)}
        >
          {node.identifier}
          {/* show content if active */}
          {node.identifier == activeTitle &&
            <b style={{ fontSize: 20 }}>{node.crime_date}</b>}
        </li>
      </ul>
    ))
  )

  return <Layout>
    <Map>
      <Marker />
    </Map>
    <List />
  </Layout>
};

export default IndexPage

export const Head = () => <title>Home Page</title>
