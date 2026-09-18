// import React from 'react'
import { useContext } from "react";
import Navbar from "../components/Navbar";
// import { AppContext } from "../context/AuthContext.jsx";
import { jobContext } from "../context/JobContext.jsx";

const Home = () => {
  // const {  } = useContext(AppContext);
  const { role, company, contact, location, skills } =
    useContext(jobContext);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {role}
      <br />
      {company}
    </div>
  );
};

export default Home;
