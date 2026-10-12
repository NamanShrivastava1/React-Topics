// import React from 'react'

import DetailsCard from "../../components/Employee/DetailsCard";

const EmployeeDashboard = () => {
  return (
    <main className="w-full h-screen">
      <div className="bg-stone-300 w-full h-full flex gap-2 justify-between px-8 py-10 rounded-lg shadow-2xl">
        <div className="employeeDiv w-1/2 h-full overflow-y-auto rounded-lg bg-stone-600 p-6 text-slate-800 shadow-lg">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
              NS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Naman Shrivastava
              </h1>
              <p className="text-sm text-white">Senior Software Engineer</p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <DetailsCard
              data={{ firstValue: "Role", secondValue: "Engineering" }}
            />
            <DetailsCard
              data={{ firstValue: "Company", secondValue: "Acme Technologies" }}
            />
            <DetailsCard
              data={{ firstValue: "Employee ID", secondValue: "EMP-2048" }}
            />
            <DetailsCard
              data={{ firstValue: "Monthly salary", secondValue: "$8,500" }}
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
        <div className="w-1/2 h-full bg-stone-100 rounded-lg">.</div>
      </div>
    </main>
  );
};

export default EmployeeDashboard;
