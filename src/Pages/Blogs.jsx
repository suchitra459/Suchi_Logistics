import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image:
        "/images/image7.jpg",
      title: "How to Optimize Shipping Routes for Efficiency",
      date: "September 10, 2024",
      desc:
        "Learn how to optimize your shipping routes to reduce costs and improve delivery times.",
    },
    {
      id: 2,
      image:
      "/images/image4.jpg",
      title: "The Future of Logistics with AI and Automation",
      date: "August 25, 2024",
      desc:
        "Discover how AI and automation are revolutionizing the logistics industry.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[650px] flex items-center justify-center bg-cover bg-center mt-22"
        style={{
          backgroundImage:
            "url('/images/Blogs.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl font-bold">
          Our Blogs
        </h1>
      </div>

      {/* Blog Cards */}
      {/* Blog Cards */}
<div className="max-w-5xl mx-auto px-6 py-10">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
    {blogs.map((blog) => (
      <div
        key={blog.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="h-44 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-lg font-semibold mb-1">
            {blog.title}
          </h3>

          <p className="text-xs text-gray-500 mb-3">
            {blog.date}
          </p>

          <p className="text-gray-600 text-sm mb-4">
            {blog.desc}
          </p>

          <button className="text-blue-600 text-sm font-medium hover:underline">
            Read More →
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-between mt-14">
    <button className="px-3 py-1.5 bg-gray-200 rounded text-sm">
      Previous
    </button>

    <span className="text-sm text-gray-600">
      Page 1 of 1
    </span>

    <button className="px-3 py-1.5 bg-gray-200 rounded text-sm">
      Next
    </button>
  </div>
</div>

    </div>
  );
};

export default Blogs;
