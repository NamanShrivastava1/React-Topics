// import React from 'react'
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="flex w-full items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-5 pt-10 pb-10 text-white sm:px-10">
      <Link to="/" className="text-lg font-bold tracking-tight sm:text-xl">
        <span className="text-white">BridgeFix Job Portal</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          to="/login"
          className="text-slate-300 transition hover:text-red-400"
        >
          Login
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium sm:gap-7">
          <Link
            to="/jobform"
            className="text-slate-300 transition hover:text-red-400"
          >
            Job Form
          </Link>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white">
            {!user.username ? (
              <img
                className="rounded-full"
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              />
            ) : (
              user.username?.split("")[0]
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
