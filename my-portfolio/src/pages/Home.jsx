import React from 'react';
import hero from '../assets/port.jpg';

const Home = () => {

  const skillSets = [
    {
      category: "Frontend Development",
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Next.js"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Workflow",
      items: ["Git / GitHub", "VS Code", "Webpack / Vite", "Figma", "Vercel / Netlify"]
    }
  ];

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

  const scrollToTechnicalSkills = () => {
    const el = document.getElementById('technical-skills');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-hidden bg-[#09090b] px-6">
      <div className="absolute right-0 top-1/2 hidden h-130 w-2/5 -translate-y-1/2 rounded-full bg-linear-to-l from-zinc-900/90 to-transparent blur-3xl opacity-70 md:block" />
      <div className="container mx-auto max-w-6xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div className="text-left">
            <h2 className="text-gray-400 font-medium tracking-widest uppercase mb-4 text-sm">Software Engineer & Developer</h2>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              <span className="inline-block animate-building-digital">
                <span className="inline-block mr-2">Building</span>
                <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-pink-400 to-yellow-300 font-extrabold">Digital</span>
              </span>
              <br />
              <span className="text-gray-500">Experiences.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              I design and build professional, highly performant, and scalable web applications with clean code and modern user interfaces.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-130 h-105 md:h-130 rounded-4xl overflow-hidden shadow-2xl shadow-black/50 animate-fade-in-right">
              <img
                src={hero}
                alt="Hero"
                className="w-full h-full object-cover bg-transparent"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>

     
        <div className="w-full bg-transparent relative z-10 px-0 mt-10">
          <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-gray-200 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Skills</h2>
            <div className="text-gray-300 leading-relaxed space-y-4 mx-auto max-w-3xl">
              <p>
                I focus on building fast, accessible, and maintainable web applications using modern JavaScript, component-driven UI, and pragmatic backend services.
              </p>
              <div className="mt-6">
                <button
                  onClick={scrollToTechnicalSkills}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                  View Technical Skills
                </button>
              </div>
            </div>
          </div>
        </div>

           <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
      <h2 id="technical-skills" className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-gray-400 mb-12">A breakdown of the technologies and tools I utilize to build robust projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillSets.map((skillGroup, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition duration-300">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-zinc-800 pb-2">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 bg-black/30 px-3 py-2 rounded border border-zinc-800/80 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a href="/blog" className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center text-white hover:border-indigo-500 transition duration-300">
            <h3 className="font-semibold text-lg mb-1">Blog</h3>
            <p className="text-gray-400">Explore articles, tutorials, and project updates.</p>
          </a>
          <a href="/contact" className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center text-white hover:border-cyan-500 transition duration-300">
            <h3 className="font-semibold text-lg mb-1">Contact</h3>
            <p className="text-gray-400">Reach out for work inquiries or collaborations.</p>
          </a>
        </div>
      </div>
    </div>

     <div className="blogg min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24">
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

        {/* /////////////////////// */}
        <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-8 text-sm">Have a project in mind or want to talk? Feel free to send a message.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Name</label>
              <input type="text" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Email</label>
              <input type="email" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Subject</label>
            <input type="text" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="Let's work together" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Message</label>
            <textarea rows="5" className="w-full bg-[#09090b] border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-zinc-600 transition" placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-300 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Home;