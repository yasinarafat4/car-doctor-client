const BookingRow = ({ booking, handleDelete }) => {
  const { _id, img, customerName, service_title, price, date } = booking;

  return (
    <div>
      <tr className="flex justify-evenly items-center">
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="mask rounded w-28 h-28">
              {img && <img src={img} />}
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{service_title}</div>
          </div>
        </td>

        <td className="font-bold">${price}</td>
        <td className="font-bold">{date}</td>
        <th>
          <button className="btn-discover">Pending</button>
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
