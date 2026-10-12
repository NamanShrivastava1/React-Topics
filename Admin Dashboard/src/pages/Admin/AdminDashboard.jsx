// import React from 'react'

import Box from "../../components/Admin/Box";
import NameCard from "../../components/Admin/NameCard";

const AdminDashboard = () => {
  return (
    <main className="w-full h-screen">
      <div className="bg-stone-300 w-full h-48 flex justify-between px-10 py-14 rounded-lg mt-2 shadow-2xl">
        <div className="">
          <h1 className="font-extrabold text-3xl">Welcome AdminName</h1>
          <p className="font-light text-lg">
            You can see an overview of your Employees
          </p>
        </div>

        <div className="flex gap-3 h-10 w-105">
          <button className="bg-stone-600 text-white px-2 py-2 rounded-lg">
            Add Employee
          </button>

          <input
            className="border border-stone-400 outline-none rounded-lg placeholder:text-black px-2"
            type="text"
            placeholder="Search Employee ..."
          />
          <button className="bg-stone-600 text-white px-2 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <Box data={{ left: "350px", data: "Total Employees", value: "1000+" }} />
      <Box data={{ left: "700px", data: "Total Revenue", value: "$50,000" }} />
      <Box data={{ left: "1050px", data: "Total Sales", value: "100k" }} />

      <div className="w-full h-[58%] flex gap-3 mt-36">
        <div className="empDiv w-1/2 text-black  bg-stone-300 px-4 py-2 rounded-lg overflow-y-auto">
          <h1 className="mb-3 text-2xl font-medium">Employees</h1>
          <hr className="mb-6" />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
          <NameCard empData={{ name: "Naman", exp: "2 Year" }} />
        </div>
        <div className="w-1/2 bg-stone-200 rounded-lg overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="https://r-graph-gallery.com/img/graph/354-highlight-specific-elements-in-line-chart-2.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
