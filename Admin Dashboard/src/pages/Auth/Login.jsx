// import React from 'react'

import { Link } from "react-router";
import InputBox from "../../components/Common/InputBox";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
        Don't Have an Account?{" "}
        <Link className="text-amber-300" to="/register">
          Register
        </Link>
      </p>
      <form className="flex flex-col gap-4 mt-20 absolute top-[27%] right-[15%]">
        <InputBox
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <InputBox
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        <button className="text-white bg-amber-700 px-9 py-3 rounded-lg mt-4 hover:bg-amber-600">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
