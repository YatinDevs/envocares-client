import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs/${slug}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error("Error fetching blog:", error));
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <img
        src={`http://127.0.0.1:8000/storage/${blog.image}`}
        alt={blog.title}
      />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
