import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#09090b] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">About Me</h2>
        
        <div className="grid grid-cols-1 gap-12 items-start">
          <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl text-white font-medium">
              Hello! I am a passionate developer dedicated to crafting functional and visually appealing digital solutions.
            </p>
            <p>
              With a strong foundation in modern web technologies, I specialize in turning complex requirements into seamless, user-friendly applications. My focus is always on writing clean, maintainable code and optimizing performance.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technological trends, contributing to open-source projects, and continuously refining my problem-solving skills.
            </p>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-white font-semibold text-xl mb-4">More About My Experience</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="mb-4">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-4 text-lg border-b border-zinc-800 pb-2">Quick Facts</h3>
            <ul className="text-sm space-y-3 text-gray-400">
              <li><strong className="text-white">Degree:</strong> B.S. in Computer Science</li>
              <li><strong className="text-white">Experience:</strong> 4+ Years</li>
              <li><strong className="text-white">Location:</strong> New York, USA</li>
              <li><strong className="text-white">Status:</strong> Available for Freelance / Full-Time</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Skills Overview</h3>
          <div className="grid grid-cols-1 gap-6 text-gray-300">
            <div>
              <h4 className="text-white font-medium mb-2">Core Skills</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>React.js / JavaScript</li>
                <li>Tailwind CSS / UI Design</li>
                <li>Node.js / Express</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Additional Expertise</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>REST APIs & Database Integration</li>
                <li>Responsive Web Development</li>
                <li>Version Control with Git</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-6 grid gap-4">
            <a href="/blog" className="block bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center text-white hover:border-indigo-500 transition duration-300">
              <span className="block text-lg font-semibold">Blog</span>
              <span className="text-gray-400">Read my latest posts and case studies.</span>
            </a>
            <a href="/contact" className="block bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center text-white hover:border-cyan-500 transition duration-300">
              <span className="block text-lg font-semibold">Contact</span>
              <span className="text-gray-400">Get in touch for projects and collaborations.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;