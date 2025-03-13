import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white shadow-lg top-0  animate-gradient">
      <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-3">
        <p className="text-2xl font-extrabold tracking-wide text-white drop-shadow-md animate-bounce">
          🚀 Limited Time Offer: <span className="text-yellow-300">Get 80% Off</span> on CodeCraft Subscription! 🥳🎉
        </p>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </nav>
  );
}