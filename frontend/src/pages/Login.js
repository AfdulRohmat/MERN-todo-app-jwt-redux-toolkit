import React, { useState, useEffect } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );

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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="pt-24">
        <div className="container">
          <div className="flex flex-col items-center">
            {/* LOGIN TITLE */}
            <div className="flex items-center">
              <BiLogInCircle size={60} />
              <h1 className="text-6xl font-bold ml-2">Login</h1>
            </div>

            {/* LOGIN FORM */}
            <div className="mt-8 w-full lg:w-1/2">
              <form onSubmit={(e) => onSubmit(e)}>
                {/* Email */}
                <div>
                  <label
                    htmlFor="name"
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
                    htmlFor="name"
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
                      onChange={(e) => onChange(e)}
                      placeholder="Enter your password"
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

                {/* BUTTON LOGIN */}
                <div className="mt-8">
                  <button className="font-semibold  w-full text-white bg-slate-700 py-4 rounded-lg hover:opacity-90 text-xl transition duration-300 ease-in-out ">
                    Login
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

export default Login;
