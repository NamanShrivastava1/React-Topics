import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("*All Fields are Required!");
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-gray-900 p-7 sm:p-9">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Bridgefix Job Portal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="you@example.com"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Enter password"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          <p className="text-red-500">{error}</p>
          <button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-red-500 font-semibold text-white transition hover:bg-red-400"
          >
            Login
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-red-400 hover:text-red-300"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
