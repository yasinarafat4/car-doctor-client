import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  // delete handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter((b) => b._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  // approve handler
  const handleBookingApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "approve" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Approved!", "Your file has been Approved.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "approve";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={bookings._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingApprove={handleBookingApprove}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
