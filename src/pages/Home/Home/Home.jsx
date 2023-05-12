import { useNavigation } from "react-router-dom";
import About from "../About/About";
import Service from "../Services/Service/Service";

import Banner from "./Banner/Banner";
import LoadingSpinner from "../../Shared/LoadinSpinner/LoadingSpinner";

const Home = () => {
  // loading spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
