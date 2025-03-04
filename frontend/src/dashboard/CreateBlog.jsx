import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateBlog() {
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

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);

    formData.append("blogImage", blogImage);
    try {
      const { data } = await axios.post(
        "https://scriptedmind.onrender.com/api/blogs/create",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      toast.success(data.message || "User registered successfully");
      setTitle("");
      setCategory("");
      setAbout("");
      setBlogImage("");
      setBlogImagePreview("");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 flex items-center justify-center">
  <div className="max-w-4xl w-full mx-auto p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl">
    <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">Create Blog</h3>

    <form onSubmit={handleCreateBlog} className="space-y-6">
      {/* Category Selection */}
      <div className="space-y-2">
        <label className="block text-lg">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">Select Category</option>
          <option value="Devotion">Devotion</option>
          <option value="Sports">Sports</option>
          <option value="Coding">Coding</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Business">Business</option>
        </select>
      </div>

      {/* Title Input */}
      <div className="space-y-2">
        <label className="block text-lg">Title</label>
        <input
          type="text"
          placeholder="Enter your blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Blog Image Upload */}
      <div className="space-y-2">
        <label className="block text-lg">Blog Image</label>
        <div className="flex items-center justify-center">
          <img
            src={blogImagePreview ? `${blogImagePreview}` : "/imgPL.webp"}
            alt="Preview"
            className="w-full max-w-sm h-auto rounded-md object-cover border border-gray-600"
          />
        </div>
        <input
          type="file"
          onChange={changePhotoHandler}
          className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Blog About Textarea */}
      <div className="space-y-2">
        <label className="block text-lg">About</label>
        <textarea
          rows="5"
          placeholder="Write something about your blog"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md transition duration-300 shadow-lg hover:brightness-125"
      >
        Post Blog
      </button>
    </form>
  </div>
</div>

  );
}

export default CreateBlog;
