import { Link } from "react-router-dom";

const MoreInfo = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="font-bold text-lg text-[#ff3811]">More About Us</p>
          <h1 className="text-4xl font-bold">
            We are Qualified of Experience in this Field
          </h1>
        </div>
        <div className="px-4">
          <p className="py-2">
            Welcome to our website! We are a team of car enthusiasts who are
            passionate about everything automotive. Our goal is to provide you
            with all the information you need to make informed decisions about
            buying, maintaining, and enjoying your car.
          </p>
          <p>
            Whether you are in the market for a new or used car, we can help you
            find the perfect vehicle to fit your needs and budget. We offer a
            wide selection of cars, trucks, SUVs, and other vehicles from top
            brands like Ford, Chevrolet, Toyota, and more.
          </p>

          <p className="py-2">
            But we are more than just a car dealership. We also offer a variety
            of services to help you keep your car running smoothly, including
            maintenance and repairs, financing, and trade-ins. Our experienced
            technicians are here to answer any questions you may have about your
            car and to provide expert advice and guidance.
          </p>
          <p>
            At our dealership, we believe in treating our customers like family.
            That means providing you with exceptional service and going above
            and beyond to meet your needs. We pride ourselves on our honesty,
            integrity, and commitment to quality.
          </p>
          <p className="py-2">
            Thank you for visiting our website. We look forward to helping you
            find the car of your dreams and providing you with the best possible
            car-buying experience.
          </p>
        </div>
        <Link to="/services">
          <button className="btn-discover m-4 ">Our Services</button>
        </Link>
      </div>
    </div>
  );
};

export default MoreInfo;
