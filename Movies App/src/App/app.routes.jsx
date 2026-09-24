import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Favourites from "../pages/Favourites.jsx";

const Layout = () => (
  <div className="min-h-screen bg-stone-50 text-stone-900">
    <Navbar />
    <Outlet />
  </div>
);

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/favorites", element: <Favourites /> },
    ],
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
