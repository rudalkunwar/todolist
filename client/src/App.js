import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/homepage/Home";
import Todolist from "./components/todotask/Todolist";
import Page404 from "./components/404page/Page404";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/todolist/:username"
            element={
              <ProtectedRoute>
                <Todolist />
              </ProtectedRoute>
            }
          /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/todolist/:user" element={<Todolist />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
