import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  // console.log(profile?.user);
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
  };
  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://scriptedmind.onrender.com/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  return (
    <>
    {/* Menu Icon (Mobile) */}
    <div className="sm:hidden fixed top-4 left-4 z-50 cursor-pointer" onClick={() => setShow(!show)}>
      <CiMenuBurger className="text-3xl text-white bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300" />
    </div>

    {/* Sidebar */}
    <div
      className={`w-64 h-full shadow-xl fixed top-0 left-0 bg-gray-900 text-white transition-transform duration-300 transform sm:translate-x-0 ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button (Mobile) */}
      <div className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShow(!show)}>
        <BiSolidLeftArrowAlt className="text-3xl text-gray-400 hover:text-white transition duration-300" />
      </div>

      {/* Profile Section */}
      <div className="text-center mt-8">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-cyan-500 hover:scale-105 transition duration-300"
          src={profile?.user?.photo?.url}
          alt="Profile"
        />
        <p className="text-lg font-semibold text-yellow-400">{profile?.user?.name}</p>
      </div>

      {/* Sidebar Navigation Buttons */}
      <ul className="space-y-4 mx-6 mt-8">
        <button
          onClick={() => handleComponents("My Blogs")}
          className="w-full px-4 py-2 bg-indigo-600 rounded-lg hover:brightness-125 transition duration-300"
        >
          MY BLOGS
        </button>
        <button
          onClick={() => handleComponents("Create Blog")}
          className="w-full px-4 py-2 bg-teal-600 rounded-lg hover:brightness-125 transition duration-300"
        >
          CREATE BLOG
        </button>
        <button
          onClick={() => handleComponents("My Profile")}
          className="w-full px-4 py-2 bg-orange-600 rounded-lg hover:brightness-125 transition duration-300"
        >
          MY PROFILE
        </button>
        <button
          onClick={gotoHome}
          className="w-full px-4 py-2 bg-cyan-600 rounded-lg hover:brightness-125 transition duration-300"
        >
          HOME
        </button>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-600 rounded-lg hover:brightness-125 transition duration-300"
        >
          LOGOUT
        </button>
      </ul>
    </div>
  </>
  );
}

export default Sidebar;
