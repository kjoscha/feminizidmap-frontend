// Layout file with navbar
import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
      </div>
      {children}
    </div>
  );
}

export default Layout
