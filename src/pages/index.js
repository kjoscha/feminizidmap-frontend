// React component for the home page
import React, { useState } from "react";
import Layout from "../components/Layout.js";
import Map from "../components/Map.js";
import { CircleMarker } from "react-leaflet";
import { useStaticQuery, graphql } from "gatsby";
import offset from "../utils/offset.js";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allStrapiNewsIndividual {
        nodes {
          title
          content { data { content } }
        }
      }
    }
  `);

  const [activeTitle, setActiveTitle] = useState(null);

  const Marker = () => (
    data.allStrapiNewsIndividual.nodes.map((node) => {
      const randomCoords = [52 + offset(node.title), 10 + offset(node.title.slice(0, 10))]

      return <CircleMarker
        key={node.title}
        center={randomCoords}
        color="none" fillColor={node.title == activeTitle ? "red" : "white"}
        fillOpacity={0.7}
        eventHandlers={{ click: () => setActiveTitle(node.title) }}
      >
      </CircleMarker>
    })
  )

  const List = () => (
    data.allStrapiNewsIndividual.nodes.map((node) => (
      <ul>
        <li
          key={node.title}
          style={{ color: node.title == activeTitle ? "red" : "black" }}
          onClick={() => setActiveTitle(node.title)}
        >
          {node.title}
          {/* show content if active */}
          {node.title == activeTitle &&
            <p style={{ fontSize: 10 }}>{node.content.data.content.slice(0, 500)}</p>}
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
