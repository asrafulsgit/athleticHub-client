import React from "react";

const blogPosts = [
  {
    id: "b001",
    title: "Top 10 Tips for Marathon Training",
    excerpt:
      "Preparing for a marathon? Here are ten essential tips to help you train effectively and avoid injuries.",
    date: "2025-06-15",
    url: "/blog/top-10-tips-for-marathon-training",
  },
  {
    id: "b002",
    title: "How to Choose the Right Running Shoes",
    excerpt:
      "Choosing the perfect running shoes can improve your performance and reduce discomfort. Learn what to look for.",
    date: "2025-05-30",
    url: "/blog/how-to-choose-running-shoes",
  },
  {
    id: "b003",
    title: "Benefits of Cross-Training for Athletes",
    excerpt:
      "Cross-training can boost your athletic performance and prevent burnout. Discover different cross-training methods.",
    date: "2025-05-10",
    url: "/blog/benefits-of-cross-training",
  },
  {
    id: "b004",
    title: "Nutrition Advice for Endurance Athletes",
    excerpt:
      "Proper nutrition fuels your training and recovery. Explore dietary tips tailored for endurance sports.",
    date: "2025-04-25",
    url: "/blog/nutrition-advice-endurance-athletes",
  },
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">AthleticHub Blog</h1>
        <p className="sm:text-lg text-gray-600">
          Stay updated with the latest tips, news, and stories from the world of athletics.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {blogPosts.map(({ id, title, excerpt, date, url }) => (
          <article
            key={id}
            className="border border-blue-200 rounded-lg p-6 bg-white 
            transition-colors duration-300 hover:bg-blue-50 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <time
              dateTime={date}
              className="block text-sm text-gray-500 mb-4"
            >
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p className="text-gray-700 mb-6">{excerpt}</p>
            <a
              href={url}
              className="inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
