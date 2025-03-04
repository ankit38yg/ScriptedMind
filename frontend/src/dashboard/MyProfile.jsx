import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();
  console.log(profile?.user);
  console.log("Profile Photo URL:", profile?.user?.photo?.url);
  console.log("in my profile");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full transition-transform duration-300 hover:shadow-2xl">
      <div className="relative">
        <img
          src={profile?.user?.photo?.url}
          alt="avatar"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
          <img
            src={profile?.user?.photo?.url}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="px-6 py-8 mt-6">
        <h2 className="text-center text-2xl font-bold text-yellow-400">
          {profile?.user?.name}
        </h2>
        <p className="text-center text-gray-300 mt-2">{profile?.user?.email}</p>
        <p className="text-center text-gray-400 mt-2">{profile?.user?.phone}</p>
        <p className="text-center text-cyan-400 mt-2 font-semibold">
          {profile?.user?.role}
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default MyProfile;
