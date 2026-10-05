// import React from "react";

const SyntheticEvents = () => {
  const handleInputChange = (event) => {
    // 'event' is the React SyntheticEvent wrapper
    console.log("Event Type:", event.type); // "change"
    console.log("Input Value:", event.target.value); // Text entered by user

    // The raw underlying browser event
    console.log("Native Event:", event.nativeEvent);
  };
  return <input type="text" onChange={handleInputChange} />;
};

export default SyntheticEvents;
