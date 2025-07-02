import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../aditionals/Spinner";
import { apiRequiestWithCredentials } from "../../utilities/ApiCall";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

    const fetchBlog = async () => {
      try {
        const data = await apiRequiestWithCredentials('get',`/blog/${slug}`);
        setBlog(data?.blog);
      } catch (error) {
        toast.error(error?.response?.data?.message)
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (<Spinner /> );
  }

  if (!blog) {
    return (
      <div className="mx-auto px-6 py-16">
        <p className="text-red-600">Blog not found.</p>
      </div>
    );
  }

  return (

   <> 
   <Helmet>
    <title>
      AthleticHub | Blog Details
    </title>
   </Helmet>
   <div className="mx-auto px-5 py-10 md:py-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{blog?.title}</h1>
      <p className="text-gray-600 mb-2">
        By {blog?.author?.name || "Admin"} •{" "}
        {new Date(blog?.createdAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {blog?.image && (
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      {blog?.excerpt && (
        <p className="text-lg text-gray-700 mb-6">{blog?.excerpt}</p>
      )}

      <div
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />

      <p className="text-gray-500 text-sm mt-12">
        Last updated:{" "}
        {new Date(blog?.updatedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div></>
  );
};

export default BlogDetails;
