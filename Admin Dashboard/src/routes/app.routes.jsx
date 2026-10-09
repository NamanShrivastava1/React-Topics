import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import Home from "../shared/pages/Home.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/employee",
        element: <EmployeeDashboard />,
      },
      {
        path: "/dashboard/admin",
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
]);
