import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Latest Blogs</h1>
      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={`http://127.0.0.1:8000/storage/${blog.image}`}
              alt={blog.title}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold my-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-blue-600 font-medium mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
