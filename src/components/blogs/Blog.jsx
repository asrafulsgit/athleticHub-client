import React from "react";
import { useState } from "react";
import { apiRequiest } from "../../utilities/ApiCall";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Spinner from "../aditionals/Spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// const blogPosts = [
//   {
//     id: "b001",
//     title: "Top 10 Tips for Marathon Training",
//     excerpt:
//       "Preparing for a marathon? Here are ten essential tips to help you train effectively and avoid injuries.",
//     date: "2025-06-15",
//     url: "/blog/top-10-tips-for-marathon-training",
//   },
// ];

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
  
      const fetchBlogs = async () => {
        try {
          const data = await apiRequiest( 'get',`/blogs`);
          setBlogs(data?.blogs);
        } catch (error) {
          toast.error(error?.response?.data?.message)
        } finally {
          setLoading(false);
        }
      };
    useEffect(() => {
      fetchBlogs();
    }, []);
    if (loading) {
      return (<Spinner /> );
    }
  return (
    <>
    <Helmet>
      <title>AthleticHub | Blogs</title>
    </Helmet>
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-16 ">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">AthleticHub Blog</h1>
          <p className="sm:text-lg text-gray-600">
            Stay updated with the latest tips, news, and stories from the world of athletics.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map(({ _id, title, excerpt, createdAt, slug }) => (
            <article
              key={_id}
              className="border border-blue-200 rounded-lg p-6 bg-white 
              transition-colors duration-300 hover:bg-blue-50 hover:shadow-lg"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
              <time
                dateTime={createdAt}
                className="block text-sm text-gray-500 mb-4"
              >
                {new Date(createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-gray-700 mb-6">{excerpt}</p>
              <Link
                to={`/blog/${slug}`}
                className="inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
