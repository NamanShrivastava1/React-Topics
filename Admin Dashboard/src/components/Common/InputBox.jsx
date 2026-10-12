// import React from 'react'

const InputBox = ({ type, name, value, onChange, placeholder,  }) => {
  return (
    <input
      className="text-white bg-[#8682FF] px-30 py-3 rounded-lg outline-none focus:border focus:border-[#4C37D0] transition placeholder:text-white"
      name={name}
      type={type}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      
    />
  );
};

export default InputBox;
