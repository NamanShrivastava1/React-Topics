// import React from 'react'

import { Link, useNavigate } from "react-router";
import InputBox from "../../components/Common/InputBox";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Context";

const Login = () => {
  const navigate = useNavigate();

  const { users } = useContext(AppContext);

  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.email.trim() === "") {
      setError("Email is required");
      setErrorField("email");
      return;
    }

    if (!emailRegex.test(user.email)) {
      setError("Enter a valid email address");
      setErrorField("email");
      return;
    }

    if (user.password.trim() === "") {
      setError("Password is required");
      setErrorField("password");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters");
      setErrorField("password");
      return;
    }

    if (user.email === users.email && user.password === users.password) {
      setError("");
      if (users.isAdmin === false) {
        navigate("/dashboard/employee");
      } else if (users.isAdmin === true) {
        navigate("/dashboard/admin");
      }
    } else {
      setError("Invalid Credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    setError("");
    setErrorField("");
  };
  return (
    <main className="w-1/2 h-full bg-stone-600 flex flex-col items-center pt-30 py-14 px-6">
      <h1 className="text-white font-extrabold text-4xl">
        Welcome to <br /> Employee Management System
      </h1>
      <p className="text-md absolute top-[27%] right-[27%] text-white">
        Don't Have an Account?{" "}
        <Link className="text-amber-300" to="/register">
          Register
        </Link>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-20 absolute top-[27%] right-[15%]"
      >
        <InputBox
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        {errorField === "email" && <p className="text-red-500">{error}</p>}

        <InputBox
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        {errorField === "password" && <p className="text-red-500">{error}</p>}

        {<p className="text-red-500">{error}</p>}
        <button className="text-white bg-amber-700 px-9 py-3 rounded-lg mt-4 hover:bg-amber-600">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
