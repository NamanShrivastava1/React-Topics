// import React from 'react'

import { Outlet } from "react-router";
import SideBar from "../components/Common/SideBar";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex gap-5 justify-between">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
