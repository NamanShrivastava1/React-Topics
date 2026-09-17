import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculation running");
    return 10 * 20;
  }, []);

  console.log("Component rendered");
  console.log(result);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// Without UseMemo
// const [count, setCount] = useState(0);

//   const result = (() => {
//     console.log("Calculation running");
//     return 10 * 20;
//   })();

//   console.log("Component rendered");

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );

export default UseMemo;
