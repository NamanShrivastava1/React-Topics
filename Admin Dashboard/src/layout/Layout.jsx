// import React from 'react'

import { Outlet } from "react-router";
import SideBar from "../shared/components/SideBar";

const Layout = () => {
  return (
    <div className="flex"> 
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
