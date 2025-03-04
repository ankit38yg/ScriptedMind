import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);
  console.log(creators);
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "https://scriptedmind.onrender.com/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center  bg-gray-900 p-6">
  {creators.map((creator) => (
    <div
      key={creator._id}
      className="bg-gray-800 shadow-lg rounded-xl overflow-hidden max-w-xs w-full m-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={creator.photo.url}
          alt="avatar"
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-x-0 -bottom-8 flex justify-center">
          <img
            src={creator.photo.url}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-800 shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <div className="px-6 py-8 mt-10">
        <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text hover:from-cyan-500 hover:to-teal-600 transition-all duration-300">
          {creator.name}
        </h2>
        <p className="text-center text-gray-300 mt-2 hover:text-gray-100 transition-colors duration-300">
          {creator.email}
        </p>
        <p className="text-center text-gray-400 mt-2 hover:text-gray-300 transition-colors duration-300">
          {creator.phone}
        </p>
        <p className="text-center mt-4">
          <span className="bg-cyan-800 text-cyan-100 text-sm font-medium px-4 py-1 rounded-full hover:bg-cyan-700 transition-colors duration-300">
            {creator.role}
          </span>
        </p>
      </div>
    </div>
  ))}
</div>
  );
}

export default Creators;
