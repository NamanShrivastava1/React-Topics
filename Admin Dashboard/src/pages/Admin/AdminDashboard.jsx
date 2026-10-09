// import React from 'react'

import Box from "../../components/Admin/Box";
import NameCard from "../../components/Admin/NameCard";

const AdminDashboard = () => {
  return (
    <main className="w-full h-screen">
      <div className="bg-gray-200 w-full h-48 flex justify-between px-10 py-14 rounded-lg mt-2 shadow-2xl">
        <div className="">
          <h1>Welcome AdminName</h1>
          <p>You can see an overview of your Employees</p>
        </div>

        <div className="flex gap-3">
          <button>Add Employee</button>

          <input type="text" placeholder="Search Employee ..." />
          <button>Search</button>
        </div>
      </div>

      <Box left="350px" />
      <Box left="700px" />
      <Box left="1050px" />

      <div className="w-full h-[58%] flex gap-3 mt-36">
        <div className="empDiv w-1/2 bg-green-300 px-4 py-2 rounded-lg overflow-y-auto">
        <h1 className="mb-7">Employees</h1>
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        <NameCard empData={{name: "Naman", exp: "2 Year"}} />
        </div>
        <div className="w-1/2 bg-blue-300 rounded-lg">..</div>
     </div>
    </main>
  );
};

export default AdminDashboard;
