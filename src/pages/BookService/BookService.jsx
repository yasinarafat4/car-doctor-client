import { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const book = useLoaderData();
  console.log(book);
  const { title, _id, price, img } = book;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const description = form.description.value;
    const booking = {
      customerName: name,
      email,
      date,
      description,
      img,
      service_title: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    //sending data (POST method)
    fetch("https://car-doctor-server-gamma-pied.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good Job!", "Service Book Successfully!", "success");
        }
      });
  };

  return (
    <div>
      <h2 className="text-xl md:text-4xl font-bold mt-10 text-center">
        {" "}
        Book Service : {title}
      </h2>

      <div className="bg-[#F3F3F3]  p-6 lg:p-16 m-2 lg:m-24 rounded-lg">
        <form onSubmit={handleBookService}>
          <div className="md:grid grid-cols-2 gap-4 mb-4">
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-2 lg:mb-0">
              <input
                type="text"
                defaultValue={"$ " + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className="p-6 rounded-lg border"
              name="description"
              cols="30"
              rows="10"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input className="btn-discover" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className="text-center mb-4">
        <Link to={`/checkout/${_id}`}>
          <button className="btn-discover"> Back to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default BookService;
