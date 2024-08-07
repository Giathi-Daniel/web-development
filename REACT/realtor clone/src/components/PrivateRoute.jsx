import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const { loggedIn, loading } = useAuthStatus();
  if (loading) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
