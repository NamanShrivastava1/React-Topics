// import React from 'react'

import { Link } from "react-router";
import InputBox from "../../components/Common/InputBox";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    company: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <main className="w-1/2 h-full bg-stone-600 flex flex-col items-center pt-30 py-14 px-6">
      <h1 className="text-white font-extrabold text-4xl">
        Welcome to <br /> Employee Management System
      </h1>
      <p className="text-md absolute top-[27%] right-[27%] text-white">
        Already Have an Account?{" "}
        <Link className="text-amber-300" to="/login">
          Login
        </Link>
      </p>
      <form className="flex flex-col gap-4 mt-20 absolute top-[27%] right-[15%]">
        <InputBox
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />

        <InputBox
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <InputBox
          type="tel"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          placeholder="Enter Contact"
        />

        <InputBox
          type="text"
          name="Company"
          value={user.company}
          onChange={handleChange}
          placeholder="Enter Company"
        />

        <InputBox
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
          placeholder="Enter Role"
        />

        <InputBox
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        <div>
          <input
            type="checkbox"
            // checked={isChecked}
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
