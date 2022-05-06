import React, { useState, useEffect } from "react";
import { BiLogInCircle, BiMenuAltRight } from "react-icons/bi";
import { CgDesignmodo } from "react-icons/cg";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     navigate("/login");
  //   }

  //   dispatch(logout());
  //   dispatch(reset());
  // }, [user, isLoading]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    if (isLoading) {
      return <LoadingSpinner />;
    }

    navigate("/login");
  };

  return (
    <>
      <div className=" border-b-2 border-slate-200 fixed z-50 top-0 left-0 right-0 bg-white">
        <div className="container h-16 flex justify-between items-center">
          {/* ===> LEFT SIDE */}
          {/* TITLE */}
          <Link to="/dashboard">
            <p className="font-bold text-2xl cursor-pointer">My Goal App</p>
          </Link>

          {/*  */}
          {/* ===> RIGHT SIDE */}

          {/* LOGOUT BUTTON  */}
          <div
            className={
              user
                ? " font-semibold  text-white bg-slate-700 py-3 px-4 rounded-lg hover:opacity-90 text-sm transition duration-300 ease-in-out "
                : "hidden"
            }
          >
            <button
              onClick={() => handleLogout()}
              className="flex items-center gap-2"
            >
              <AiOutlineLogout size={16} />
              <h1>Logout</h1>
            </button>
          </div>

          {/* NAVBAR DESKTOP */}
          <ul className={user ? "hidden" : "lg:flex flex-row hidden"}>
            <Link to="/login">
              <div className="flex items-center mr-12 cursor-pointer">
                <BiLogInCircle />
                <li className="ml-2">Login</li>
              </div>
            </Link>

            <Link to="/register">
              <div className="flex items-center cursor-pointer">
                <CgDesignmodo />
                <li className="ml-2">Register</li>
              </div>
            </Link>
          </ul>

          {/* NAVBAR TOGGLE */}
          <button
            onClick={() => handleShowMobileNav()}
            className={user ? "hidden" : "lg:hidden"}
          >
            {showMobileNav ? (
              <AiOutlineClose size={20} />
            ) : (
              <BiMenuAltRight size={30} />
            )}
          </button>

          {/* NAVBAR MOBILE */}
          <div
            className={
              showMobileNav && !user
                ? "flex max-w-[250px] bg-white shadow-lg rounded-lg w-full mt-16 p-4 fixed z-10 mr-8 top-0 right-0 lg:hidden"
                : "hidden"
            }
          >
            {/* NAVBAR MOBILE */}
            <ul>
              <Link to="/login">
                <div className="flex items-center mr-12 cursor-pointer">
                  <BiLogInCircle />
                  <li className="ml-2">Login</li>
                </div>
              </Link>

              <Link to="/register">
                <div className="flex items-center cursor-pointer mt-4">
                  <CgDesignmodo />
                  <li className="ml-2">Register</li>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
