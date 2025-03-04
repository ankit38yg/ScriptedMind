import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key:"5170828c-e89a-4aeb-8945-11039c3c7a32",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("please enter a valid email");
    }
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-2xl">
        {/* Contact Us Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Contact Us
          </h2>
        </div>

        {/* Contact Form & Info Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6">
            <h3 className="text-lg font-medium text-yellow-400 mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h3 className="text-lg font-medium text-yellow-400 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-cyan-400 text-lg hover:scale-110 transition duration-300" />
                <span className="text-gray-300">+91 6386118930</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-400 text-lg hover:scale-110 transition duration-300" />
                <span className="text-gray-300">ankitkkt78@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-400 text-lg hover:scale-110 transition duration-300" />
                <span className="text-gray-300">Delhi, NCR, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
