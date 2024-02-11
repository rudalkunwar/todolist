import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth");
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else return children ? children : <Outlet />;
}

export default ProtectedRoute;
