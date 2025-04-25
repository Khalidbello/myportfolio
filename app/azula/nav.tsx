"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-700">AZULA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            <div className="flex items-center space-x-4 ml-4">
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

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
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
        </div>
      </div>
    </nav>
  );
}
