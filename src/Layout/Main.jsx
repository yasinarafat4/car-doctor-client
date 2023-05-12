import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import LoadingSpinner from "../pages/Shared/LoadinSpinner/LoadingSpinner";

const Main = () => {
  // loading spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto">
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
