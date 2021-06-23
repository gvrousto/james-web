import "./App.css";
import React from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
