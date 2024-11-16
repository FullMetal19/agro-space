import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  // Redirect to login if token is not available
  if (!token) {
    return <Navigate to="/connexion" replace />;
  }

  // Render the child component if authenticated
  return children;
};

export default ProtectedRoute;
