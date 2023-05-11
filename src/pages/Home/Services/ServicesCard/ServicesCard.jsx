import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img className="rounded-xl" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="flex">
            <p className="text-lg font-semibold text-[#FF3811]">
              Price: ${price}
            </p>
            <button className="text-[#FF3811]">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
