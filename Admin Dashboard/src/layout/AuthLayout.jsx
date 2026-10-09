// import React from 'react'

import { Outlet } from "react-router";
import AuthSideBar from "../shared/components/AuthSideBar";

const AuthLayout = () => {
  return (
    <div>
      <AuthSideBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
