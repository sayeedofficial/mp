import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2> Blink Analysis</h2>
      </Link>

      <ul>
        <li id="home-btn">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/try"> Try</Link>
        </li>
        <li>
          <Link to="/team"> Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
