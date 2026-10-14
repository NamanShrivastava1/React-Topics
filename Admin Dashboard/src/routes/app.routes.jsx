import { Navigate, useRoutes } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import AddEmployee from "../pages/common/AddEmployee.jsx";
import { useContext } from "react";
import { AppContext } from "../context/Context.jsx";

export const AppRoutes = () => {
  const { users } = useContext(AppContext);
  const routes = useRoutes([
    {
      path: "/employee/",
      element:
        !users.isAdmin && users ? (
          <Layout />
        ) : users ? (
          <Navigate to="/admin/dashboard" />
        ) : (
          <Navigate to="/login" />
        ),
      children: [
        {
          path: "dashboard",
          element: <EmployeeDashboard />,
        },
      ],
    },
    {
      path: "/admin/",
      element:
        users.isAdmin && users ? (
          <Layout />
        ) : users ? (
          <Navigate to="/employee/dashboard" />
        ) : (
          <Navigate to="/login" />
        ),

      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/addEmployee",
      element: <AddEmployee />,
    },
    {
      path: "*",
      element: <h1>404. Page Not Found!</h1>,
    },
  ]);
  return routes;
};
