// import React from 'react'

import { useContext, useState } from "react";
// import { useLocation } from "react-router";
import { useParams, useNavigate } from "react-router";
import data from "../constant";
import { Context } from "../context/Context";

const Form = () => {
  //   const location = useLocation();
  //   const currentUserName = location.state?.name || "No Name";

  const { id } = useParams();
  const user = data.find((u) => u.id === Number(id));
  //   console.log(user);

  const navigate = useNavigate();

  const { setMarks } = useContext(Context);

  const [theoryMarks, setTheoryMarks] = useState("");
  const [practicalMarks, setPracticalMarks] = useState("");
  const [logicalMarks, setLogicalMarks] = useState("");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (theoryMarks.trim() === "") {
      setError("Theory Marks are required");
      setErrorField("theoryMarks");
      return;
    }
    if (practicalMarks.trim() === "") {
      setError("Practical Marks are required");
      setErrorField("practicalMarks");
      return;
    }
    if (logicalMarks.trim() === "") {
      setError("Logical Marks are required");
      setErrorField("logicalMarks");
      return;
    }

    const theory = Number(theoryMarks);
    const practical = Number(practicalMarks);
    const logical = Number(logicalMarks);

    const average = ((theory + practical + logical) / 3).toFixed(2);

    setMarks((prevMarks) => [
      ...prevMarks,
      {
        id: Number(id),
        name: user.name,
        average: Number(average),
      },
    ]);

    navigate("/");

    setTheoryMarks("");
    setPracticalMarks("");
    setLogicalMarks("");
  };

  return (
    <main className="h-screen w-full bg-stone-200 flex flex-col gap-15 items-center justify-center">
      <div className="flex flex-col items-center gap-3 bg-stone-300 px-10 py-5 rounded-lg">
        <h1 className="text-3xl">{user.name}</h1>
        <h1 className="text-3xl">{user.address}</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="Number"
          min="0"
          max="10"
          placeholder="Enter Theory Marks"
          value={theoryMarks}
          onChange={(e) => {
            setTheoryMarks(e.target.value);

            setError("");
            setErrorField("");
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        {errorField === "theoryMarks" && (
          <p className="text-red-500">{error}</p>
        )}
        <input
          type="Number"
          min="0"
          max="10"
          placeholder="Enter Practical Marks"
          value={practicalMarks}
          onChange={(e) => {
            setPracticalMarks(e.target.value);

            setError("");
            setErrorField("");
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        {errorField === "practicalMarks" && (
          <p className="text-red-500">{error}</p>
        )}
        <input
          type="Number"
          min="0"
          max="10"
          placeholder="Enter Logical Marks"
          value={logicalMarks}
          onChange={(e) => {
            setLogicalMarks(e.target.value);

            setError("");
            setErrorField("");
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        {errorField === "logicalMarks" && (
          <p className="text-red-500">{error}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white h-10 w-75 px-4 py-2 rounded-lg cursor-pointer active:bg-blue-700 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Form;
