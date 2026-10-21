// import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../context/Context";

const Card = ({ data }) => {
  const { marks } = useContext(Context);
  const studentMarks = marks.find((m) => m.id === data.id);

  return (
    <div className="h-75 w-62.5 bg-stone-400 flex flex-col items-center py-10 rounded-lg">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">{data.name}</h1>
      <p className="text-xl font-medium tracking-wide mb-2">
        {data.designation}
      </p>
      <p className="text-xl font-medium tracking-wide mb-2">{data.dob}</p>
      <p className="text-xl font-medium tracking-wide mb-2">{data.address}</p>

      {studentMarks ? (
        <div className="w-full bg-stone-500 text-white rounded-md py-2 text-center my-2">
          <p className="text-base font-bold rounded py-1 mt-1">
            Avg: {studentMarks.average}/10
          </p>
        </div>
      ) : (
        <p className="text-xs text-stone-600 my-2">No marks entered</p>
      )}
      <Link to={`/form/${data.id}`}>Edit</Link>
    </div>
  );
};

export default Card;
