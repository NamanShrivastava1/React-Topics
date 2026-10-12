// import React from 'react'

const DetailsCard = ({ data }) => {
  return (
    <div className="rounded-lg bg-slate-50 p-4 shadow-xl">
      <p className="text-sm text-slate-500">{data.firstValue}</p>
      <p className="mt-1 font-semibold">{data.secondValue}</p>
    </div>
  );
};

export default DetailsCard;
