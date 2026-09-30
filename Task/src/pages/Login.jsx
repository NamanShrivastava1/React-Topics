// import React from 'react'
import { Check, Info } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <main className="h-screen flex">
      <div className="w-1/2 bg-[#4338ca] text-white pl-20">
        <h1 className="text-3xl font-bold tracking-wide mt-26">ShopSphere</h1>
        <p className="text-5xl font-bold tracking-wide mt-26">
          Everything you love,
          <br /> one cart away.
        </p>
        <p className="text-xl font-extralight tracking-wide mt-10">
          Browse 190+ products across 20+ categories, save <br /> favourites to
          your wishlist and check out in three quick <br /> steps.
        </p>
        <p className="flex gap-4 font-extralight tracking-wide mt-10">
          <Check /> Free delivery above 500
        </p>
        <p className="flex gap-4 font-extralight tracking-wide mt-2">
          <Check /> Cart saved across sessions
        </p>
        <p className="flex gap-4 font-extralight tracking-wide mt-2">
          <Check /> Use code SAVE10 for 10% off
        </p>
      </div>
      <div className="w-1/2 text-[#4338ca] bg-white flex items-center justify-center">
        <div className="h-[60%] w-96 bg-white shadow-2xl drop-shadow-black rounded-xl p-10">
          <h2 className="text-black text-2xl font-semibold tracking-wide">
            Welcome Back
          </h2>
          <p className="text-stone-500 font-extralight tracking-wide mb-4">
            Log in to continue shopping
          </p>
          <h4 className="flex items-center gap-2 bg-blue-100 px-2 py-3 rounded-md">
            <Info className="size-5" />
            Demo account: emilys /emilyspass
          </h4>
          <form className="flex flex-col gap-1 mt-5">
            <label className="text-black text-[15px]" for="username">
              Username
            </label>
            <input
              className="border-2 border-stone-200 rounded-md placeholder:text-stone-600 focus:outline-none p-3"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
            <label className="text-black mt-3 text-[15px]" for="password">
              Password
            </label>
            <input
              className="border-2 border-stone-200 rounded-md placeholder:text-stone-600 focus:outline-none p-3"
              type="text"
              id="username"
              name="password"
              placeholder="Enter Password"
            />
            <p className="text-red-600">Error</p>
            <button className="bg-[#4338ca] text-white rounded-md px-2 py-2 text-lg mt-2">
              Login
            </button>
            <p className="font-sm font-light text-stone-600 mt-1">
              Don't have account?{" "}
              <span className="font-sm font-medium text-[#4338ca]">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
