import "./Login.css";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn-login" type="submit" value="Login" />
              </div>
            </form>
            <div className="text-center">
              <h2>Or Sign In with</h2>
              <div className="flex justify-center items-center gap-4 mt-3 mb-3">
                <FaFacebookF className="text-blue-700 bg-slate-200 rounded-full" />
                <FaGithub className="text-black bg-slate-200 rounded-full" />
                <FcGoogle className="text-blue-700 bg-slate-200 rounded-full" />
              </div>
              <h2>
                Have not any account?{" "}
                <Link>
                  <span className="font-semibold text-[#FF3811]">Register</span>
                </Link>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
