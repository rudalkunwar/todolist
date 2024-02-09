import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/homepage/Home";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "./authSlice";
import Todolist from "./components/todotask/Todolist";
import Page404 from "./components/404page/Page404";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("acessToken");
    if (token) {
      dispatch(isAuth());
    }
  }, [dispatch]); // Added dispatch to the dependency array

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todolist"
            element={isAuthenticated ? <Todolist /> : <Login />}
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
