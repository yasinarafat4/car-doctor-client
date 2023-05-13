import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div>
      <h2 className="text-4xl font-bold mt-10 text-center"> Checkout</h2>

      <div className="bg-[#F3F3F3]  p-6 lg:p-16 m-2 lg:m-24 rounded-lg">
        <form>
          <div className="md:grid grid-cols-2 gap-4 mb-4">
            <div className="form-control mb-2 lg:mb-0">
              <input type="text" placeholder="First Name" className="input" />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input type="text" placeholder="Your Phone" className="input" />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input type="text" placeholder="Your Email" className="input" />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className="p-6 rounded-lg"
              name=""
              id=""
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
    </div>
  );
};

export default Checkout;
