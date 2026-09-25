import { useState } from "react";

// With React Memo
// const Child = React.memo(function Child({ name }) {
//   console.log("Child rendered");

//   return <h1>Hello {name}</h1>;
// });

// Without React Memo
const Child = function Child({ name }) {
  console.log("Child rendered");

  return <h1>Hello {name}</h1>;
};

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="Naman" />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

export default ReactMemo;
