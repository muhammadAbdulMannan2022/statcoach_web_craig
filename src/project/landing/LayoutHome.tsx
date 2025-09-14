import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";

export default function LayoutHome() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
