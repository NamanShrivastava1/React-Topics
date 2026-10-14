// import React from 'react'

import { useContext } from "react";
import DetailsCard from "../../components/Employee/DetailsCard";
import ProgressBar from "../../components/Employee/ProgressBar";
import StatusOverview from "../../components/Employee/StatusOverview";
import { AppContext } from "../../context/Context";

const EmployeeDashboard = () => {
  const { users } = useContext(AppContext);

  const employeeId = `EMP-${Math.floor(Math.random() * 9000)
    .toString()
    .padStart(4, "0")}`;

  const salary = `₹${Math.floor(Math.random() * 10000).toLocaleString('en-IN')}`;

  return (
    <main className="w-full h-screen">
      <div className="bg-stone-300 w-full h-full flex gap-2 justify-between px-8 py-10">
        <div className="employeeDiv w-1/2 h-full overflow-y-auto rounded-lg bg-stone-600 p-6 text-slate-800 shadow-lg">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
              {users.username ? users.username.charAt(0).toUpperCase() : "E"}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {users.username || "Employee Name"}
              </h1>
              <p className="text-sm text-white">{users.role || "Employee"}</p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <DetailsCard
              data={{
                firstValue: "Role",
                secondValue: users.role || "Employee",
              }}
            />
            <DetailsCard
              data={{
                firstValue: "Company",
                secondValue: users.company || "Company Name",
              }}
            />
            <DetailsCard
              data={{
                firstValue: "Employee ID",
                secondValue: employeeId || "EMP-0000",
              }}
            />
            <DetailsCard
              data={{
                firstValue: "Monthly salary",
                secondValue: salary || "Salary",
              }}
            />
          </div>

          <div className="rounded-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-white">Leave balance</h2>
              <span className="text-sm text-white">20 days total</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-amber-50 p-4">
                <p className="text-sm text-amber-800">Leaves taken</p>
                <p className="mt-1 text-2xl font-bold text-amber-900">8</p>
              </div>
              <div className="rounded-lg bg-emerald-50 p-4">
                <p className="text-sm text-emerald-800">Leaves left</p>
                <p className="mt-1 text-2xl font-bold text-emerald-900">12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-between gap-2 rounded-lg overflow-hidden">
          <div className="w-full h-[45%] bg-[#58534D] rounded-lg py-4 px-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">
                Employees's Progress
              </h1>
              <hr className="text-white mb-8" />
              <ProgressBar
                data={{
                  performanceType: "Ledearship",
                  width: "60%",
                  backgroundColor: "#4ade80",
                }}
              />
              <ProgressBar
                data={{
                  performanceType: "Skills",
                  width: "70%",
                  backgroundColor: "#3b82f6",
                }}
              />
              <ProgressBar
                data={{
                  performanceType: "Communication",
                  width: "80%",
                  backgroundColor: "#c084fc",
                }}
              />
            </div>
            <StatusOverview />
          </div>
          <div className="w-full h-[55%] bg-stone-600 text-white text-xl font-bold px-6 pt-4 rounded-lg overflow-y-auto">
            <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">
              Performance
            </h1>
            <hr className="mb-6" />
            <img
              className="object-cover h-full w-full"
              src="https://r-graph-gallery.com/img/graph/354-highlight-specific-elements-in-line-chart-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeeDashboard;
