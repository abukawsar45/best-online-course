import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
