import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <div className=' mx-auto max-w-[1920px]'>
      <Navbar />
      <div className='custom-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
