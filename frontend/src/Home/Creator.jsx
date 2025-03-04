import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);
  console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "https://scriptedmind.onrender.com/api/users/admins",
        {
          withCredentials: true,
        }
      );
      console.log(data.admins);
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold mb-8 text-center text-amber-400">
      Popular Creators
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
      {admin && admin.length > 0 ? (
        admin.slice(0, 4).map((element) => (
          <div
            key={element._id}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src={element.photo.url}
              alt="creator"
              className="w-36 h-36 object-cover border-4 border-gray-700 rounded-full hover:border-teal-400 transition-all duration-300"
            />
            <div className="text-center mt-4">
              <p className="text-xl font-semibold text-white hover:text-teal-400 transition-colors duration-300">
                {element.name}
              </p>
              <p className="text-sm text-gray-400 mt-1">{element.role}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center text-gray-400 text-lg h-40">
          No creators found.
        </div>
      )}
    </div>
  </div>
  );
}

export default Creator;
