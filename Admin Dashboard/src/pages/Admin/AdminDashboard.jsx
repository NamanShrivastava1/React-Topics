// import React from 'react'

import { Link } from "react-router";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Box from "../../components/Admin/Box";
import NameCard from "../../components/Admin/NameCard";
import { employeeData } from "../../../employeeData.js";
import { useState } from "react";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  function handleSearch() {
    const filtered = employeeData.filter((emp) =>
      emp.firstName.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredEmployees(filtered);
    // console.log(filtered);
  }

  return (
    <main className="w-full h-screen">
      <div className="bg-stone-300 w-full h-48 flex justify-between px-10 py-14 rounded-b-lg">
        <div className="">
          <h1 className="font-extrabold text-3xl">Welcome AdminName</h1>
          <p className="font-light text-lg">
            You can see an overview of your Employees
          </p>
        </div>

        <div className="flex gap-3 h-10 w-105">
          <Link
            to="/addEmployee"
            className="bg-stone-600 text-white px-2 py-2 rounded-lg"
          >
            Add Employee
          </Link>

          <input
            className="border border-stone-400 outline-none rounded-lg placeholder:text-black px-2"
            type="text"
            placeholder="Search Employee ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-stone-600 text-white px-2 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      <Box data={{ left: "350px", data: "Total Employees", value: "1000+" }} />
      <Box data={{ left: "700px", data: "Total Revenue", value: "$50,000" }} />
      <Box data={{ left: "1050px", data: "Total Sales", value: "100k" }} />

      <div className="w-full h-[58%] flex gap-3 mt-36">
        <div className="empDiv w-1/2 text-black  bg-stone-300 px-4 pt-2 flex flex-col justify-between rounded-lg overflow-y-auto">
          <div>
            <h1 className="mb-3 text-2xl font-medium">Employees</h1>
            <hr className="mb-6" />
            {currentItems.length > 0 ? (
              currentItems.map((emp) => (
                <NameCard
                  key={emp.employeeId}
                  empData={{
                    name: emp.firstName,
                    exp: emp.employeeId,
                  }}
                />
              ))
            ) : (
              <p>No employees found.</p>
            )}
          </div>
          <div className="w-150 h-10 bg-stone-300 text-stone-600 flex items-center justify-center gap-6 rounded-lg absolute bottom-3.5 left-65">
            <ArrowBigLeft
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
            <p>
              {currentPage} of {totalPages}
            </p>
            <ArrowBigRight
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </div>
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
