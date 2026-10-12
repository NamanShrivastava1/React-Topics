// import React from 'react'

const Button = ({ btnName }) => {
  return (
    <button className="bg-[#61C688] px-14 py-2 rounded-lg hover:cursor-pointer hover:bg-[#46c075]">
      {btnName}
    </button>
  );
};

export default Button;
