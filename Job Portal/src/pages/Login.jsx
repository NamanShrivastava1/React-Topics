import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { user, error, setError } = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorField, setErrorField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (enteredEmail.trim() === "") {
      setError("Email is required");
      setErrorField("email");
      return;
    }

    if (!emailRegex.test(enteredEmail)) {
      setError("Enter a valid email address");
      setErrorField("email");
      return;
    }
    if (enteredPassword.trim() === "") {
      setError("Password is required");
      setErrorField("password");
      return;
    }

    if (enteredPassword.length < 6) {
      setError("Password must be at least 6 characters");
      setErrorField("password");
      return;
    }

    if (!user) {
      setError("Please Register First!");
      return;
    }

    if (enteredEmail === user.email && enteredPassword === user.password) {
      setError("");
      navigate("/");
      alert("Login Success");
    } else {
      setError("Invalid Credentials");
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
              value={enteredEmail}
              onChange={(e) => {
                setEnteredEmail(e.target.value);

                if (errorField === "email") {
                  setError("");
                  setErrorField("");
                }
              }}
              placeholder="you@example.com"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "email" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              value={enteredPassword}
              onChange={(e) => {
                setEnteredPassword(e.target.value);

                if (errorField === "password") {
                  setError("");
                  setErrorField("");
                }
              }}
              placeholder="Enter password"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "password" && <p className="text-red-500">{error}</p>}

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
