import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="name-container">
          <Link className="name" to="/">
            James Langford
          </Link>
        </div>
        <div className="title">Work</div>
        <ol>
          <Link className="link" to="/">
            Paintings
          </Link>
          <Link className="link" to="/">
            Drawings
          </Link>
          <Link className="link" to="/">
            Other
          </Link>
        </ol>
        <div className="title">Info</div>
        <ol>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
