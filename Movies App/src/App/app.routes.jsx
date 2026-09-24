import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Favourites from "../pages/Favourites";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/favourite",
    element: <Favourites />,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
