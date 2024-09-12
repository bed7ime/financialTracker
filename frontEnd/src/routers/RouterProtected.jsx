import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const RouterProtected = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RouterProtected;
