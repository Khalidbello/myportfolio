"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto p-2 flex items-center justify-center">
        <div className="bg-white w-[96%] md:w-[90%] px-3 py-2 rounded-xl">
          <div className="flex items-center justify-between">
            <a href="#top" className="cursor-pointer">
              <span className="text-2xl font-bold text-green-700">AZULA</span>
            </a>

            <DesktopNavigation />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
}

const navItems = [
  { href: "#howitworks", name: "How It Works" },
  { href: "#testimonials", name: "Testimonials" },
  { href: "#faq", name: "FAQ" },
];

const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="cursor-pointer transition font-medium text-gray-700 hover:text-green-600"
        >
          {item.name}
        </a>
      ))}

      <div className="flex items-center space-x-4 pl-[7rem]">
        <a
          href="#buy"
          className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition shadow hover:shadow-lg"
        >
          Buy Now
        </a>
        <a
          href="#cart"
          className="cursor-pointer text-gray-700 hover:text-green-600 relative"
        >
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </a>
      </div>
    </div>
  );
};

const MobileNavBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-8 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 cursor-pointer font-medium text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="flex space-x-4 pt-4">
              <a
                href="#buy"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-center transition shadow cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Buy Now
              </a>
              <a
                href="#cart"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg transition relative cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
