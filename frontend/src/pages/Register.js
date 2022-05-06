import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CgDesignmodo } from "react-icons/cg";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSucces || user) {
      navigate("/dashboard");
    }

    // CALL THE RESET FUNCTION FROM SLICE TO RESET ALL OF THE STATE
    dispatch(reset());

    //
  }, [user, isError, isSucces, message, dispatch, navigate]);

  // HANDLE INPUT CHANGE
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLE FORM SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("password do not match");

      //
    } else {
      // GET USER DATA FROM FORM THAT FILLED BY USER
      const userData = {
        name,
        email,
        password,
      };

      // PASS THE DATA FROM FORM INTO REGISTER FUNCTION IN AUTH SLICE
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="pt-24">
        <div className="container">
          <div className="flex flex-col items-center">
            {/* REGISTER TITLE */}
            <div className="flex items-center">
              <CgDesignmodo size={60} />
              <h1 className="text-6xl font-bold ml-2">Register</h1>
            </div>

            {/* REGISTER FORM */}
            <div className="mt-8 w-full lg:w-1/2">
              <form onSubmit={(e) => onSubmit(e)}>
                {/* Nama */}
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-slate-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => onChange(e)}
                    className="w-full bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* Email */}
                <div className="mt-4 ">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-slate-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => onChange(e)}
                    className="w-full bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* Password */}
                <div className="mt-4 ">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-slate-600"
                  >
                    Password
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={(e) => onChange(e)}
                      className="w-full flex relative bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <i
                      className="absolute right-3 cursor-pointer "
                      onClick={() => handleShowPassword()}
                    >
                      {showPassword ? (
                        <AiFillEye size={20} />
                      ) : (
                        <AiFillEyeInvisible size={20} />
                      )}
                    </i>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mt-4 ">
                  <label
                    htmlFor="confirm Password"
                    className="leading-7 text-sm text-slate-600"
                  >
                    Confirm Password
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirm your password"
                      onChange={(e) => onChange(e)}
                      className="w-full flex relative bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <i
                      className="absolute right-3 cursor-pointer "
                      onClick={() => handleShowConfirmPassword()}
                    >
                      {showConfirmPassword ? (
                        <AiFillEye size={20} />
                      ) : (
                        <AiFillEyeInvisible size={20} />
                      )}
                    </i>
                  </div>
                </div>

                {/* BUTTON LOGIN */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="font-semibold  w-full text-white bg-slate-700 py-4 rounded-lg hover:opacity-90 text-xl transition duration-300 ease-in-out "
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
