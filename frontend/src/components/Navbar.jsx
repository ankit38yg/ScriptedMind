import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink instead of Link
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(profile?.user);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://scriptedmind.onrender.com/api/users/logout",
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
     <nav className="shadow-lg px-4 py-3 bg-gray-900 text-white">
      <div className="flex items-center justify-between container mx-auto">
        
        {/* Brand Logo */}
        <div className="font-bold text-2xl">
          <span className="text-amber-400">Scripted</span>
          <span className="text-teal-400">Mind</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "hover:text-indigo-300"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "hover:text-indigo-300"
            }
          >
            BLOGS
          </NavLink>
          <NavLink
            to="/creators"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "hover:text-indigo-300"
            }
          >
            CREATORS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "hover:text-indigo-300"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "hover:text-indigo-300"
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Auth & Dashboard Buttons */}
        <div className="hidden md:flex space-x-3">
          {isAuthenticated && profile?.user?.role === "admin" && (
            <NavLink
              to="/dashboard"
              className="bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-4 py-2 rounded"
            >
              DASHBOARD
            </NavLink>
          )}

          {!isAuthenticated ? (
            <NavLink
              to="/Login"
              className="bg-red-600 text-white font-semibold hover:bg-red-800 px-4 py-2 rounded"
            >
              LOGIN
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-semibold hover:bg-red-800 px-4 py-2 rounded"
            >
              LOGOUT
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setShow(!show)}>
          {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {show && (
        <div className="bg-gray-800 text-white py-6">
          <ul className="flex flex-col h-screen items-center justify-center space-y-5 text-xl">
            <NavLink
              to="/"
              onClick={() => setShow(!show)}
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-indigo-300"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={() => setShow(!show)}
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-indigo-300"
              }
            >
              BLOGS
            </NavLink>
            <NavLink
              to="/creators"
              onClick={() => setShow(!show)}
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-indigo-300"
              }
            >
              CREATORS
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setShow(!show)}
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-indigo-300"
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setShow(!show)}
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-indigo-300"
              }
            >
              CONTACT
            </NavLink>

            {!isAuthenticated ? (
              <NavLink
                to="/Login"
                className="bg-red-600 text-white font-semibold hover:bg-red-800 px-4 py-2 rounded"
              >
                LOGIN
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold hover:bg-red-800 px-4 py-2 rounded"
              >
                LOGOUT
              </button>
            )}

            {isAuthenticated && profile?.user?.role === "admin" && (
              <NavLink
                to="/dashboard"
                className="bg-indigo-600 text-white font-semibold hover:bg-indigo-800 px-4 py-2 rounded"
              >
                DASHBOARD
              </NavLink>
            )}
          </ul>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
