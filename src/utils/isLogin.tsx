import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const isLogin = (element: React.JSX.Element) => {
  const [cookies] = useCookies(["token"]);

  return cookies.token ? element : <Navigate to="/login" replace />;
};

export { isLogin };
