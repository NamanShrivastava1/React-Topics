// import React from 'react'

import Button from "./Button";

const SideBar = () => {
  return (
    <main className="w-76 h-[98%] bg-stone-300 flex flex-col items-center justify-between py-14 px-6 mt-2 rounded-lg shadow-2xl">
      <div className="flex flex-col items-center">
        <img
          className="h-20 w-20 rounded-full object-cover bg-white"
          src="https://static.thenounproject.com/png/3627272-200.png"
          alt="EM"
        />
        <h1 className="text-center mt-6 font-bold">
          Welcome to <br /> Employee Management
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <Button btnName="Home" />
          <Button btnName="Calender" />
          <Button btnName="Setting" />
        </div>
      </div>
      <Button btnName="Logout" />
    </main>
  );
};

export default SideBar;
