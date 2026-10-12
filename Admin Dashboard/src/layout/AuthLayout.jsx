// import React from 'react'

import { Outlet } from "react-router";
import AuthSideBar from "../components/Common/AuthSideBar";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-between px-10">
      <AuthSideBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
