import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import PosterBottom from "./home/sections/PosterBottom";
import Footer from "./home/sections/Footer";

export default function LayoutHome() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <PosterBottom />
      <Footer />
    </div>
  );
}
