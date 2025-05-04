import Link from "next/link";
import React from "react";

const AzulaButtons = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 max-w-xl mx-3 md:mx-auto mb-20">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute inset-0 border border-gray-700/50 rounded-2xl pointer-events-none"></div>

      {/* Button container with fancy styling */}
      <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center z-10">
        {/* Primary Button (Green) */}
        <Link
          href="/buy"
          className="relative px-8 py-3.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-bold text-white text-base shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.03] transform group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get Azula Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-1 rounded-xl bg-green-400 blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        </Link>

        {/* Secondary Button (Cyan) */}
        <button className="relative px-8 py-3.5 bg-transparent border-2 border-cyan-400 rounded-xl font-bold text-cyan-400 text-base shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03] transform group overflow-hidden">
          <span className="relative z-10 flex items-center gap-2 group-hover:text-gray-900">
            Become a Distributor
          </span>
          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100  transition-opacity duration-300 -z-10"></div>
        </button>
      </div>

      {/* Subtle animated dots pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              //   animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AzulaButtons;
