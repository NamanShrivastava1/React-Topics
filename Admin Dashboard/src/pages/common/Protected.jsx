// import React from 'react'

import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { Navigate } from "react-router";
import AdminDashboard from "../Admin/AdminDashboard";


const Protected = () => {
  const { users } = useContext(AppContext);

  if (!users) {
    return <Navigate to="/login" />;
  }

  if (users.isAdmin === false) {
    return <Navigate to="/dashboard/employee" />;
  }
  return <AdminDashboard />;
};

export default Protected;
