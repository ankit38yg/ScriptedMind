import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://scriptedmind.onrender.com/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      // Store the token in localStorage
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User Logined successfully", {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setRole("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields",
        {
          duration: 3000,
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-lg p-8">
      
      {/* Branding */}
      <div className="text-center font-bold text-2xl mb-6">
        Scripted<span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">Mind</span>
      </div>

      {/* Login Form */}
      <h1 className="text-xl font-semibold text-center mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        
        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Registration Link */}
        <p className="text-center text-gray-400">
          New User?{" "}
          <Link to={"/register"} className="text-cyan-400 font-semibold hover:underline">
            Register Now
          </Link>
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full p-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;
