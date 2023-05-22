import { useEffect, useRef, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  const [numServicesToShow, setNumServicesToShow] = useState(3);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  // ascending and descending state
  const [asc, setAsc] = useState(true);

  const handleMoreServices = () => {
    setNumServicesToShow(numServicesToShow + 3);
  };

  const visibleServices = services.slice(0, numServicesToShow);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

  // search handler
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

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

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <button className="btn-discover" onClick={() => setAsc(!asc)}>
          {asc ? "Make Price Low to Heigh" : "Make Price Heigh to Low"}
        </button>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 mb-10">
        {visibleServices.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      <div className="text-center">
        {numServicesToShow < services.length && (
          <button
            onClick={handleMoreServices}
            className="btn-more-services mt-12 mb-32"
          >
            More Services
          </button>
        )}
      </div>
    </div>
  );
};

export default Service;
