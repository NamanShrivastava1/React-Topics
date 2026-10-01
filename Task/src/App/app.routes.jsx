import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import { AppLayout } from "./AppLayout";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentPage from "../pages/PaymentPage";
import OrderCompleted from "../pages/OrderCompleted";
import { PaymentLayout } from "./PaymentLayout";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productDetail",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <PaymentLayout />,
    children: [
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/orderCompleted",
        element: <OrderCompleted />,
      },
    ],
  },
]);
