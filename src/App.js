import "./App.css";
import React from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Navpage from "./navpage/Navpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
