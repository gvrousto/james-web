import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import { FaEllipsisH } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const onlyWidth = useWindowWidth();
  if (onlyWidth > 600) {
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
  } else {
    return (
      <div className="navbar-mobile">
        <div className="icon-mobile">
          <Link className="icon-link" to="/navpage">
            <FaEllipsisH size={30} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
