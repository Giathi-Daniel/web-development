import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../Hooks/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, loading } = useAuthStatus();
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
