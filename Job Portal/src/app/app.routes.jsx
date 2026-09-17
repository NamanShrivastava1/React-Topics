import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import JobForm from "../pages/JobForm.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/jobform",
    element: <JobForm />,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
