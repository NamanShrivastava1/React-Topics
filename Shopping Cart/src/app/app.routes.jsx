import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
