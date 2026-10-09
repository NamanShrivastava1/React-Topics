// import React from 'react'

import { Outlet } from "react-router";
import SideBar from "../shared/components/SideBar";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex gap-5 justify-between px-10">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
