// import React from 'react'

import { useState } from "react";
import { useLocation } from "react-router";

const Form = () => {
  const location = useLocation();

  const currentUserName = location.state?.name || "No Name";

  const [theoryMarks, setTheoryMarks] = useState("");
  const [practicalMarks, setPracticalMarks] = useState("");
  const [logicalMarks, setLogicalMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (theoryMarks.trim() === "") {
      return;
    }
    if (practicalMarks.trim() === "") {
      return;
    }
    if (logicalMarks.trim() === "") {
      return;
    }

    setTheoryMarks("");
    setPracticalMarks("");
    setLogicalMarks("");
  };

  return (
    <main className="h-screen w-full bg-stone-200 flex flex-col gap-15 items-center justify-center">
      <div>
        <h1 className="text-3xl">{currentUserName}</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter Theory Marks"
          value={theoryMarks}
          onChange={(e) => {
            setTheoryMarks(e.target.value);
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Enter Practical Marks"
          value={practicalMarks}
          onChange={(e) => {
            setPracticalMarks(e.target.value);
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Enter Logical Marks"
          value={logicalMarks}
          onChange={(e) => {
            setLogicalMarks(e.target.value);
          }}
          className="h-10 w-75 bg-stone-500 px-4 py-2 rounded-lg placeholder:text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white h-10 w-75 px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Form;
