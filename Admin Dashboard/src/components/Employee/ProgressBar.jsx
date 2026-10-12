// import React from 'react'

const ProgressBar = ({ data }) => {
  return (
    <div className="w-1/2 f-full flex flex-col gap-3 rounded-lg text-md font-medium">
      <div>
        <p className="mb-1 text-white">{data.performanceType}</p>
        <div className="w-full bg-stone-800 rounded-full h-2 mb-8 overflow-hidden">
          <div
            className="bg-gray-400 h-2 rounded-full"
            style={{ width: data.width, backgroundColor: data.backgroundColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
