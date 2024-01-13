import React, { Component } from "react";
import Home from "./components/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/homepage/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
