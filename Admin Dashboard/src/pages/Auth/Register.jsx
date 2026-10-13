// import React from 'react'

import { Link, useNavigate } from "react-router";
import InputBox from "../../components/Common/InputBox";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Context.jsx";

const Register = () => {
  const navigate = useNavigate();

  const { setUsers } = useContext(AppContext);

  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    company: "",
    isAdmin: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.username.trim() === "") {
      setError("Username is required");
      setErrorField("username");
      return;
    }

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

    if (user.contact.trim() === "") {
      setError("Contact is required");
      setErrorField("contact");
      return;
    }

    if (!/^\d{10}$/.test(user.contact)) {
      setError("Contact must be 10 digits");
      setErrorField("contact");
      return;
    }

    if (user.company.trim() === "") {
      setError("Company is required");
      setErrorField("company");
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

    console.log(user);
    setUsers(user);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setErrorField("");
  };
  return (
    <main className="w-1/2 h-full bg-stone-600 flex flex-col items-center pt-25 py-14 px-6">
      <h1 className="text-white font-extrabold text-4xl">
        Welcome to <br /> Employee Management System
      </h1>
      <p className="text-md absolute top-[23%] right-[27.5%] text-white">
        Already Have an Account?{" "}
        <Link className="text-amber-300" to="/login">
          Login
        </Link>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-13 absolute top-[27%] right-[15%]"
      >
        <InputBox
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />

        {errorField === "username" && <p className="text-red-500">{error}</p>}

        <InputBox
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        {errorField === "email" && <p className="text-red-500">{error}</p>}

        <InputBox
          type="tel"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          placeholder="Enter Contact"
        />

        {errorField === "contact" && <p className="text-red-500">{error}</p>}

        <InputBox
          type="text"
          name="company"
          value={user.company}
          onChange={handleChange}
          placeholder="Enter Company"
        />

        {errorField === "company" && <p className="text-red-500">{error}</p>}

        <InputBox
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        {errorField === "password" && <p className="text-red-500">{error}</p>}

        <div>
          <input
            type="checkbox"
            name="isAdmin"
            checked={user.isAdmin}
            onChange={handleChange}
            className="h-4 w-4 mr-3"
          />
          <span className="text-white text-lg">Register as Admin.</span>
        </div>

        <button className="text-white bg-amber-700 px-9 py-3 rounded-lg mt-4 hover:bg-amber-600">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
