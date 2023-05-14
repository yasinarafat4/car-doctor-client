import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout functionality
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-700 text-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to="/">
          <img className="w-9/12 md:w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-semibold gap-2">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <p onClick={handleLogOut} title="Logout" className="text-3xl mr-4">
            <TbLogout />
          </p>
        ) : (
          <Link to="/login">
            {" "}
            <p title="Login" className="text-3xl mr-4">
              <FaUserCircle />
            </p>
          </Link>
        )}

        {user?.email ? (
          <Link to="/bookings">
            <button className="btn-appointment">Bookings Review</button>
          </Link>
        ) : (
          <button className="btn-appointment">Appointment</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
