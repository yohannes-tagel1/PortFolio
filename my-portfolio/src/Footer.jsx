import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Professional Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;