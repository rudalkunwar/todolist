import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/homepage/Home";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "./authSlice";
import Todolist from "./components/todotask/Todolist";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [userToken, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("acessToken");
    if (token) {
      setToken(token);
      dispatch(isAuth());
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
            path="/todolits"
            element={isAuthenticated ? <Todolist /> : <Login />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
