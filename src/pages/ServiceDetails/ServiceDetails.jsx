import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, title } = details;
  return (
    <div>
      <h2 className="text-4xl font-bold mt-10 text-center"> Service Details</h2>
      <h2 className="text-3xl font-bold mt-10">Title: {title}</h2>
      <Link to={`/checkout/${_id}`}>
        <button title="Checkout" className="btn-discover">
          Proceed Checkout
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
