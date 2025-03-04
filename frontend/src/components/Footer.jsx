import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t py-10 bg-gray-900 text-gray-300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Products Section */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Frooms</a></li>
              <li><a href="#" className="hover:text-blue-400">ScriptedMind</a></li>
              <li><a href="https://samvaad-9zhq.onrender.com/" className="hover:text-blue-400">Samvaad</a></li>
              <li><a href="#" className="hover:text-blue-400">Built a Lung Cancer Detection System</a></li>
            </ul>
          </div>

          {/* Design to Code */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Design to Code</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Figma Plugin</a></li>
              <li><a href="#" className="hover:text-blue-400">Custom UI Components</a></li>
            </ul>
          </div>

          {/* Comparison */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Comparison</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Frooms vs Zolo</a></li>
              <li><a href="#" className="hover:text-blue-400">ScriptedMind vs Hashnode</a></li>
              <li><a href="#" className="hover:text-blue-400">Samvaad vs WhatsApp Web</a></li>
              <li><a href="#" className="hover:text-blue-400">Frooms vs NestAway</a></li>
              <li><a href="#" className="hover:text-blue-400">ScriptedMind vs Medium</a></li>
              <li><a href="#" className="hover:text-blue-400">Samvaad vs Telegram Web</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Career</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </footer>

     {/* Footer Section */}
<div className="bg-gray-900 text-white py-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4 md:space-y-0">
    
    {/* Footer Branding */}
    <div className="text-xl font-semibold">
      Ankit<span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold">
        Tech
      </span>
    </div>

    {/* Copyright */}
    <div className="text-sm">
      <p>&copy; {new Date().getFullYear()} AnkitTech Pvt. Ltd. All rights reserved.</p>
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-6">
      <a href="https://github.com/ankit38yg" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
        <FaGithub className="h-6" />
      </a>
      <a href="#" className="hover:text-red-400 hover:scale-110 transition duration-300">
        <BsYoutube className="h-6" />
      </a>
      <a href="https://www.linkedin.com/in/ankit-yadav-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition duration-300">
        <FaLinkedin className="h-6" />
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Footer;
