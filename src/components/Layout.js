// Layout file with navbar
import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <h1>RANDOMMAP</h1>
      </div>
      {children}
    </div>
  );
}

export default Layout
