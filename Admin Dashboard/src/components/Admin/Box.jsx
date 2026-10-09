// import React from 'react'

const Box = ({ top = "150px", left }) => {
  return (
    <main
      className="h-36 w-78 bg-red-300 flex flex-col gap-2 py-10 px-7 rounded-lg absolute"
      style={{ top: top, left: left }}
    >
      <h1>Total Employees</h1>
      <p>1000+</p>
    </main>
  );
};

export default Box;
