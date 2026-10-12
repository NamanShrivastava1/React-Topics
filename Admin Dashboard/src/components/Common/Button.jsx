// import React from 'react'

const Button = ({ btnName }) => {
  return (
    <button className="bg-stone-600 text-white px-14 py-2 rounded-lg hover:cursor-pointer hover:bg-stone-500">
      {btnName}
    </button>
  );
};

export default Button;
