import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const PrivateRoute = ({ redirectPath = "/", children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
