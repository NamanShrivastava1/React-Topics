import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Form from "../pages/Form.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form/:id",
    element: <Form />
  }
]);
