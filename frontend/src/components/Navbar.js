import React, { useState } from "react";
import { BiLogInCircle, BiMenuAltRight } from "react-icons/bi";
import { CgDesignmodo } from "react-icons/cg";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <div className=" border-b-2 border-slate-200">
        <div className="container h-16 flex justify-between items-center">
          {/* ===> LEFT SIDE */}
          {/* TITLE */}
          <Link to="/">
            <p className="font-bold text-2xl cursor-pointer">My Goal App</p>
          </Link>

          {/*  */}
          {/* ===> RIGHT SIDE */}

          {/* LOGOUT BUTTON  */}
          <button className="hidden font-semibold  text-white bg-slate-700 py-3 px-4 rounded-lg hover:opacity-90 text-sm transition duration-300 ease-in-out ">
            <Link to="/">
              <div className="flex items-center gap-2">
                <AiOutlineLogout size={16} />
                <h1>Logout</h1>
              </div>
            </Link>
          </button>

          {/* NAVBAR DESKTOP */}
          <ul className="lg:flex flex-row hidden">
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
          <button onClick={() => handleShowMobileNav()} className="lg:hidden">
            {showMobileNav ? (
              <AiOutlineClose size={20} />
            ) : (
              <BiMenuAltRight size={30} />
            )}
          </button>

          {/* NAVBAR MOBILE */}
          <div
            className={
              showMobileNav
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
