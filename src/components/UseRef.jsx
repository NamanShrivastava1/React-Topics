import { useEffect, useRef, useState } from "react";

// First use case (Persistant value across re-renders)
// const UseRef = () => {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);

//   const handleIncrement = () => {
//     val.current = val.current + 1;
//     console.log(val);
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     console.log("Me fir re-render hogaya.");
//   });

//   return (
//     <div>
//       <button onClick={handleIncrement}>Increment</button>
//       <div>{count}</div>
//     </div>
//   );
// };

// Second use case (Directly accessing DOM element)
const UseRef = () => {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  const handleIncrement = () => {
    val.current = val.current + 1;
    console.log(val);
    setCount(count + 1);
  };

  const changeColor = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  useEffect(() => {
    console.log("Me fir re-render hogaya.");
  });

  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <button onClick={changeColor}>Change color of first button</button>
      <div>{count}</div>
    </div>
  );
};

export default UseRef;
