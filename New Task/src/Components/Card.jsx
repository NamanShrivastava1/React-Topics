// import React from "react";
import { Link } from "react-router";

const Card = ({ data }) => {
  return (
    <div className="h-75 w-62.5 bg-stone-400 flex flex-col items-center gap-4 py-10 rounded-lg">
      <h1 className="text-2xl font-semibold tracking-wide">{data.name}</h1>
      <p className="text-xl font-medium tracking-wide">{data.designation}</p>
      <p className="text-xl font-medium tracking-wide">{data.dob}</p>
      <p className="text-xl font-medium tracking-wide">{data.address}</p>
      <Link to="/form" state={{ name: data.name }}>
        Edit
      </Link>
    </div>
  );
};

export default Card;
