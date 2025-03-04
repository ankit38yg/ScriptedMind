import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Trending Blogs
      </h1>
      <Carousel responsive={responsive}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => (
            <div
              key={element._id}
              className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg mx-2 transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${element._id}`}>
                <div className="relative">
                  <img
                    src={element.blogImage.url}
                    alt="blog"
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {element.category}
                  </div>
                </div>
                <div className="p-4 bg-gray-800 rounded-b-lg h-36 flex flex-col justify-between">
                  <h1 className="text-lg font-bold mb-2 text-white truncate">
                    {element.title}
                  </h1>
                  <div className="flex items-center">
                    <img
                      src={element.adminPhoto}
                      alt="author_avatar"
                      className="w-10 h-10 rounded-full border-2 border-yellow-400"
                    />
                    <p className="ml-3 text-gray-400 text-sm">{element.adminName}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex h-60 items-center justify-center text-lg text-gray-300">
            Loading...
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending;
