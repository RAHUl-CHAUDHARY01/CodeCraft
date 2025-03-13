import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight">CodeCraft 🚀</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/user-profile" className="hover:text-yellow-400 transition-all">User Profile</Link>
          <Link to="/documentation" className="hover:text-yellow-400 transition-all">Documentation</Link>
          <Link to="/community-forum" className="hover:text-yellow-400 transition-all">Community Forum</Link>
          <Link to="/templates-library" className="hover:text-yellow-400 transition-all">Templates Library</Link>
          <Link to="/dashboard" className="hover:text-yellow-400 transition-all">Dashboard</Link>
          <Link to="/project-management" className="hover:text-yellow-400 transition-all">Project Management</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-4 space-y-4 flex flex-col items-center">
          <Link to="/user-profile" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">User Profile</Link>
          <Link to="/documentation" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Documentation</Link>
          <Link to="/community-forum" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Community Forum</Link>
          <Link to="/templates-library" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Templates Library</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/project-management" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Project Management</Link>
        </div>
      )}
    </nav>
  );
}