import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const isLogout = (element: React.JSX.Element) => {
  const [cookies] = useCookies(["token"]);

  return cookies.token ? <Navigate to="/" replace /> : element;
};

export { isLogout };
