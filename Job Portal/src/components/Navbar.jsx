// import React from 'react'

import { Link } from "react-router";

const Navbar = () => {
  return (
    <main className="flex justify-between items-center bg-red-500  w-full p-10">
      <Link to="/home">BridgeFix Job Portal</Link>
      <div className="flex gap-5">
        <Link to="/jobform">Job Form</Link>
        <h1>NS</h1>
      </div>
    </main>
  );
};

export default Navbar;
