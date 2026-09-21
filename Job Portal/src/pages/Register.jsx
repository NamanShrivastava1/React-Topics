import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { setUser, error, setError } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.trim() === "") {
      setError("Username is required");
      setErrorField("username");
      return;
    }

    if (email.trim() === "") {
      setError("Email is required");
      setErrorField("email");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      setErrorField("email");
      return;
    }

    if (contact.trim() === "") {
      setError("Contact is required");
      setErrorField("contact");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      setError("Contact must be 10 digits");
      setErrorField("contact");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      setErrorField("password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setErrorField("password");
      return;
    }

    const userData = {
      username,
      email,
      contact,
      password,
    };

    setUser(userData);
    console.log(userData);

    navigate("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-gray-900 p-7 sm:p-9">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            BridgeFix Job Portal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create your account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter username"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "username" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="you@example.com"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "email" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Contact number
            <input
              type="tel"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter contact number"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "contact" && <p className="text-red-500">{error}</p>}
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Create a password"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "password" && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-red-500 font-semibold text-white hover:bg-red-400"
          >
            Create account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-red-400 hover:text-red-300"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
