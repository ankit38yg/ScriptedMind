import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlog() {
  const navigateTo = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `https://scriptedmind.onrender.com/api/blogs/single-blog/${id}`,

          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(data);
        setTitle(data?.title);
        setCategory(data?.category);
        setAbout(data?.about);
        setBlogImage(data?.blogImage.url);
      } catch (error) {
        console.log(error);
        toast.error("Please fill the required fields");
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);

    formData.append("blogImage", blogImage);
    try {
      const { data } = await axios.put(
        `https://scriptedmind.onrender.com/api/blogs/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      toast.success(data.message || "Blog updated successfully");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
  <div className="container mx-auto my-12 p-6">
    <section className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      
      {/* Page Title */}
      <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        UPDATE BLOG
      </h3>

      <form onSubmit={handleUpdate} className="space-y-4">
        
        {/* Category Selection */}
        <div>
          <label className="block mb-2 font-semibold">Category</label>
          <select
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Devotion">Devotion</option>
            <option value="Sports">Sports</option>
            <option value="Coding">Coding</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Blog Title Input */}
        <input
          type="text"
          placeholder="BLOG MAIN TITLE"
          className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Blog Image Upload */}
        <div>
          <label className="block mb-2 font-semibold">BLOG IMAGE</label>
          <img
            src={blogImagePreview || blogImage || "/imgPL.webp"}
            alt="Blog Main"
            className="w-full h-48 object-cover border border-gray-600 rounded-md mb-4 shadow-md hover:shadow-lg transition-all duration-300"
          />
          <input
            type="file"
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={changePhotoHandler}
          />
        </div>

        {/* Blog Description */}
        <textarea
          rows="5"
          className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Write something about your blog (minimum 200 characters)"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        {/* Update Button */}
        <button
          className="w-full p-3 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          UPDATE
        </button>
      </form>
    </section>
  </div>
</div>

  );
}

export default UpdateBlog;
