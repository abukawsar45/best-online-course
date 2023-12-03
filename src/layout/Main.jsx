import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar />
      <div className="mt-16">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
