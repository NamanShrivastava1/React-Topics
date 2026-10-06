// import React from 'react'
import { List } from "react-window";

const Virtulization = () => {
  const items = Array.from(
    { length: 10000 },
    (_, index) => `Item ${index + 1}`,
  );

  return (
    <List
      rowCount={items.length}
      rowHeight={40}
      style={{
        height: 700,
        width: 300,
      }}
      rowComponent={({ index, style }) => {
        console.log("Rendered", index);
        return <div style={style}>{items[index]}</div>;
      }}
    />
  );
};

export default Virtulization;
