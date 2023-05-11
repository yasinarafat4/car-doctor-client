import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="font-bold text-lg text-[#ff3811]">About Us</p>
            <h1 className="text-4xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-2">
              Welcome to our website! We're a team of car enthusiasts dedicated
              to helping you find the perfect vehicle for your needs and budget.
              We offer a wide selection of cars, trucks, SUVs, and other
              vehicles from top brands, as well as expert maintenance and repair
              services.
            </p>
            <p>
              At our dealership, we prioritize honesty, integrity, and quality
              customer service. Whether you're in the market for a new or used
              car, we're here to help you every step of the way.
            </p>
            <p className="py-2">
              Thank you for choosing us as your trusted source for all things
              automotive.
            </p>
            <Link to="/about">
              <button className="btn-discover mt-2 ">Get More Info</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
