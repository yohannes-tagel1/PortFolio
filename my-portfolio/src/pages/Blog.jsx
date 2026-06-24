import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Optimizing React Applications for Maximum Performance",
      date: "May 14, 2026",
      excerpt: "Explore advanced techniques to speed up your React renders, manage state more efficiently, and bundle effectively with Vite.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Why Tailwind CSS is My Go-To Framework in 2026",
      date: "April 02, 2026",
      excerpt: "A deep dive into how utility-first CSS drastically reduces boilerplate and increases development speed for modern web UIs.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Introduction to Building RESTful APIs with Node.js",
      date: "March 18, 2026",
      excerpt: "A beginner-friendly guide to setting up a resilient backend using Node.js, Express, and connecting to a database.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Blog & Articles</h2>
        <p className="text-gray-400 mb-12">Thoughts, tutorials, and insights on software engineering and web development.</p>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition duration-300">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 hover:text-gray-400 cursor-pointer transition">{post.title}</h3>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;