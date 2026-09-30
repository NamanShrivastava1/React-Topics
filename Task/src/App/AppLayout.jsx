import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
