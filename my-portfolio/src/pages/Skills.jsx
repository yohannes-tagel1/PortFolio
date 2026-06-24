import React from 'react';

const Skills = () => {
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

  return (
    <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
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
  );
};

export default Skills;