import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/homepage/Home";
import Todolist from "./components/todotask/Todolist";
import Page404 from "./components/404page/Page404";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";

function App() {
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    const isAuth = localStorage.getItem("accessToken");
    if (isAuth) {
      setAuth(true);
    }
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todolist/:username"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Todolist />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
