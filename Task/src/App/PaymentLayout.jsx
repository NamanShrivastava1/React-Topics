import { Outlet } from "react-router";
import DiffNavbar from "../components/DiffNavbar.jsx";

export const PaymentLayout = () => {
  return (
    <>
      <DiffNavbar />
      <Outlet />
    </>
  );
};
