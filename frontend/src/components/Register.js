import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CgDesignmodo } from "react-icons/cg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
              {/* Nama */}
              <div>
                <label for="name" className="leading-7 text-sm text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* Email */}
              <div className="mt-4 ">
                <label for="name" className="leading-7 text-sm text-slate-600">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* Password */}
              <div className="mt-4 ">
                <label for="name" className="leading-7 text-sm text-slate-600">
                  Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="name"
                    name="name"
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

              {/* Confirm Password */}
              <div className="mt-4 ">
                <label for="name" className="leading-7 text-sm text-slate-600">
                  Confirm Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="name"
                    name="name"
                    placeholder="Confirm your password"
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
                <button className="font-semibold  w-full text-white bg-slate-700 py-4 rounded-lg hover:opacity-90 text-xl transition duration-300 ease-in-out ">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
