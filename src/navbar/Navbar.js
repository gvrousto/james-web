import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import { VscMenu } from "react-icons/vsc";

import "./Navbar.css";

function Navbar() {
  const onlyWidth = useWindowWidth();
  function onClick() {
    console.log("fuck");
    window.scrollTo(0, 0);
  }
  if (onlyWidth > 600) {
    return (
      <div className="navbar">
        <div className="content">
          <div className="name-container">
            <Link onClick={onClick} className="name" to="/">
              James Langford
            </Link>
          </div>
          <div className="title">
            <Link className="link" to="/">
              Work
            </Link>
          </div>
          <ol>
            <div className="link" onClick={() => window.open('https://jameslangford.myshopify.com/', "_blank")}>
              Shop
            </div>
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
        <div className="navbar-mobile-header">James Langford</div>
        <div className="icon-mobile">
          <Link className="icon-link" to="/navpage">
            <VscMenu size={20} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
