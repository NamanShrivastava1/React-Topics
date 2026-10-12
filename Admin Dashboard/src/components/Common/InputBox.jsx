// import React from 'react'

const InputBox = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className="bg-stone-500 text-white px-30 py-3 rounded-lg outline-none focus:border focus:border-stone-400 transition placeholder:text-stone-200",
}) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      
    />
  );
};

export default InputBox;
