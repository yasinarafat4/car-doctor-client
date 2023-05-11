import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-270px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
