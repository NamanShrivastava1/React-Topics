import { useState, useTransition } from "react";

function UseTransition() {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 10000;

  const handleChange = (e) => {
    const { value } = e.target;

    // 1. Urgent update: Immediately updates the input field
    setName(value);

    // 2. Non-urgent update: Deferred to background
    startTransition(() => {
      const dataList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list, i) => {
          return <div key={i}>{list}</div>;
        })
      )}
    </div>
  );
}

export default UseTransition;
