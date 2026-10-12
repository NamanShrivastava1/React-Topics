// import React from 'react'

const Box = ({ top = "170px", left }) => {
  return (
    <main
      className="h-36 w-78 bg-stone-600 text-white flex flex-col gap-2 py-10 px-7 rounded-lg absolute shadow-2xl"
      style={{ top: top, left: left }}
    >
      <h1 className="text-xl">Total Employees</h1>
      <p>1000+</p>
    </main>
  );
};

export default Box;
