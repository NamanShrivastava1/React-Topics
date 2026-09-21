// import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  const showProfile = () => {
    setProfile((prev) => !prev);
  };

  const logout = () => {
    navigate("/login");
  };
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
          <div
            onClick={showProfile}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white"
          >
            {!user.username ? (
              <img
                className="rounded-full"
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
              />
            ) : (
              user.username?.split("")[0]
            )}
          </div>
          {profile && (
            <div className="absolute right-0 mt-38 mr-8 w-32 bg-slate-600 rounded-lg shadow-lg overflow-hidden z-50">
              <button className="w-full text-left px-4 py-3 text-white border-b hover:bg-red-500">
                Profile
              </button>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-3 text-white hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
