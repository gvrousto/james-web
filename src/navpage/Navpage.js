import React from "react";
import { Link } from "react-router-dom";
import "./Navpage.css";

function Navpage() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="name-container">
          <Link className="name" to="/">
            James Langford
          </Link>
        </div>
        <Link className="link" to="/">
          <div className="title">Work</div>
        </Link>

        <ol>
          <Link className="link" to="/objects">
            Objects
          </Link>
          <Link className="link" to="/fashion">
            Fashion
          </Link>
          <Link className="link" to="/points-of-sail">
            Points of Sail
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

export default Navpage;
