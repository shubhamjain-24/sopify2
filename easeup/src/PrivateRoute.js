/*
import React from "react";
import { Navigate, Outlet, Route } from "react-router";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  //   return userInfoString ? <Outlet /> : <Navigate to="/" />;
  const isAuthenticated = userInfo?.token;
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      element={userInfo ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
*/

import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  //   return userInfoString ? <Outlet /> : <Navigate to="/" />;
  const isAuthenticated = userInfo?.token;
  console.log("Eyyyyy");
  console.log({ isAuthenticated });

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
