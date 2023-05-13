import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  console.log(checkout);
  const { _id, title } = checkout;
  return (
    <div>
      <h2 className="text-xl md:text-4xl font-bold mt-10 text-center">
        {" "}
        Checkout : {title}
      </h2>

      <div className="bg-[#F3F3F3]  p-6 lg:p-16 m-2 lg:m-24 rounded-lg">
        <form>
          <div className="md:grid grid-cols-2 gap-4 mb-4">
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input"
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input"
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="number"
                name="phone"
                placeholder="Your Phone"
                className="input"
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className="p-6 rounded-lg"
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn-discover"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
      <Link to={`/book/${_id}`}>
        <button title="Checkout" className="btn-discover">
          Book Service
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
