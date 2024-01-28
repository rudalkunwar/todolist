import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/homepage/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Routes>
            <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
