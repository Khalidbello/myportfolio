"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white px-2 py-2 rounded-xl mx-2 my-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-700">AZULA</span>
            </Link>

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

const DesktopNavigation = () => {
  return (
    <div className="hidden  md:flex items-center space-x-8">
      <Link
        href="#features"
        className="text-gray-700 hover:text-green-600 transition font-medium"
      >
        Features
      </Link>
      <Link
        href="#how-it-works"
        className="text-gray-700 hover:text-green-600 transition font-medium"
      >
        How It Works
      </Link>
      <Link
        href="#testimonials"
        className="text-gray-700 hover:text-green-600 transition font-medium"
      >
        Testimonials
      </Link>
      <Link
        href="#faq"
        className="text-gray-700 hover:text-green-600 transition font-medium"
      >
        FAQ
      </Link>
      <div className="flex items-center space-x-4 pl-[7rem]">
        <Link
          href="#buy"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition shadow hover:shadow-lg"
        >
          Buy Now
        </Link>
        <Link
          href="#cart"
          className="text-gray-700 hover:text-green-600 relative"
        >
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

const MobileNavBar: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.6 }}
          className={"md:hidden overflow-hidden"}
        >
          <div className="pt-4 pb-8 space-y-4">
            <Link
              href="#features"
              className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="block py-2 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex space-x-4 pt-4">
              <Link
                href="#buy"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-center transition shadow"
                onClick={() => setIsOpen(false)}
              >
                Buy Now
              </Link>
              <Link
                href="#cart"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart className="text-xl" />
                <span className="absolute mt-[-8px] ml-[16px] bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
