import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserLoginEmail } from "../../utilities/Database";

const PrivateRoute = ({ children }) => {
   
    const user = getUserLoginEmail();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;