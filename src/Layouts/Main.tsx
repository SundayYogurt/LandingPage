// Main.tsx
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default Main;
