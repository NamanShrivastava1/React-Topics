// import React from 'react'
import { useCallback } from "react";
import { useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  //   Normal Function and useCallback Works the same. As useCallback is optimized and will not be recreated on every render. It will only be recreated when the dependencies change. In this case, there are no dependencies, so it will only be created once.

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // const handleClick = () => {
  //   console.log("Button clicked");
  // };

  console.log("Component rendered");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UseCallback;
