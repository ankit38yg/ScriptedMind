import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://scriptedmind.onrender.com/api/blogs/my-blog",
          { withCredentials: true }
        );
        console.log(data);
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://scriptedmind.onrender.com/api/blogs/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message || "Blog deleted successfully");
        setMyBlogs((value) => value.filter((blog) => blog._id !== id));
      })
      .catch((error) => {
        toast.error(error.response.message || "Failed to delete blog");
      });
  };
  return (
    <div className="container mx-auto my-12 p-6">
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((element) => (
            <div
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              key={element._id}
            >
              {/* Blog Image */}
              {element?.blogImage && (
                <img
                  src={element?.blogImage.url}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Blog Details */}
              <div className="p-5">
                <span className="text-sm text-gray-400">{element.category}</span>
                <h4 className="text-xl font-semibold my-2 text-white">{element.title}</h4>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/blog/update/${element._id}`}
                    className="text-cyan-400 bg-gray-700 rounded-md shadow-md px-4 py-2 border border-gray-600 hover:bg-cyan-500 hover:text-white transition duration-300"
                  >
                    UPDATE
                  </Link>
                  <button
                    onClick={() => handleDelete(element._id)}
                    className="text-red-400 bg-gray-700 rounded-md shadow-md px-4 py-2 border border-gray-600 hover:bg-red-500 hover:text-white transition duration-300"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg">
            You have not posted any blog to see!
          </p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
