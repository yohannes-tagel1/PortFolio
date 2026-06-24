import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider text-white hover:text-gray-400 transition duration-300">
          PORT<span className="text-gray-500">FOLIO</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/skills" className="hover:text-white transition">Skills</Link>
          <Link to="/blog" className="hover:text-white transition">Blog</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-over menu (from right) */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 text-gray-100 p-6 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={() => setOpen(false)} className="text-lg font-bold">
              PORT<span className="text-gray-400">FOLIO</span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-white transition">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-white transition">About</Link>
            <Link to="/skills" onClick={() => setOpen(false)} className="hover:text-white transition">Skills</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="hover:text-white transition">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-white transition">Contact</Link>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;