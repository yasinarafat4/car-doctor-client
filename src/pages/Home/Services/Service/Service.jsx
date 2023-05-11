import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="font-bold text-2xl mt-20 text-[#FF3811]">Service</p>
        <h2 className="text-5xl font-bold mt-2 mb-5">Our Service Area</h2>
        <p className="text-lg mb-12">
          We offer tailored services to meet the unique needs of our clients.
          Our experienced team provides consulting, project management, and
          technical support services. We are dedicated to delivering exceptional
          service and exceeding our clients expectations.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      <div className="text-center">
        <button className="btn-more-services mt-12 mb-32">More Services</button>
      </div>
    </div>
  );
};

export default Service;
