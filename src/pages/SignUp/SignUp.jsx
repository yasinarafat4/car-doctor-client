import { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
  const { createUser, userProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // sign up functionality
  const handleSignUp = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User has created successfully");
        form.reset();
        updateUserProfile(name);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already used. Try with a new email!");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters!");
        } else {
          setError(error.message);
        }
        setSuccess("");
      });
  };

  // updating user profile
  const updateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    userProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-center text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-600 text-sm m-1 font-semibold">{error}</p>
              <p className="text-green-700 text-sm m-1 font-semibold">
                {success}
              </p>
              <div className="form-control ">
                <input className="btn-login" type="submit" value="Sign Up" />
              </div>
            </form>

            <h2 className="text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="font-semibold text-[#FF3811]">Login</span>
              </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
