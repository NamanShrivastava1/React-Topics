// import React from 'react'

const Box = ({ data }) => {
  return (
    <main
      className="h-36 w-78 bg-stone-600 text-white flex flex-col gap-2 py-10 px-7 rounded-lg absolute shadow-2xl"
      style={{ top: "170px", left: data.left }}
    >
      <h1 className="text-xl">{data.data}</h1>
      <p>{data.value}</p>
    </main>
  );
};

export default Box;
