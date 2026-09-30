// import React from "react";

const Products = ({ items }) => {
  return (
    <div className="flex justify-between">
      <p>{items[0]}</p>
      <p>{items[1]}</p>
    </div>
  );
};

export default Products;
