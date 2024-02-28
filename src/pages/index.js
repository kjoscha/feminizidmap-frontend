// React component for the home page
import React from "react";
import Layout from "../components/Layout.js";
import Map from "../components/Map.js";

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my Gatsby site</h1>
    <Map />
  </Layout>
);

export default IndexPage

export const Head = () => <title>Home Page</title>
