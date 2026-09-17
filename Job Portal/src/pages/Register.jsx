// import React from 'react'

import { Link } from "react-router";

const Register = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-gray-900 p-7 shadow-2xl shadow-blue-950/40 sm:p-9">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase text-red-400">
            BridgeFix Job Portal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create your account
          </h1>
        </div>
        <form className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Username
          <input
            type="text"
            placeholder="Enter username"
            className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
          />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email address
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
          />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Contact number
          <input
            type="tel"
            placeholder="Enter contact number"
            className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
          />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Password
          <input
            type="password"
            placeholder="Create a password"
            className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
          />
          </label>
          <button type="submit" className="mt-2 h-12 rounded-xl bg-red-500 font-semibold text-white hover:bg-red-400">
            Create account
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-red-400 hover:text-red-300">
              Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
