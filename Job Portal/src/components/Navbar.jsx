// import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-5 pt-10 pb-10 text-white sm:px-10">
      <Link to="/" className="text-lg font-bold tracking-tight sm:text-xl">
        <span className="text-red-500">BridgeFix Job Portal</span>
      </Link>
      <div className="flex items-center gap-4 text-sm font-medium sm:gap-7">
        <Link to="/jobform" className="text-slate-300 transition hover:text-red-400">
          Job Form
        </Link>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white">
          NS
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
