"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 md:flex md:min-h-[80vh] md:items-center md:py-0">
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight text-green-900 sm:text-5xl lg:text-6xl"
          >
            Cook <span className="text-green-600">Cheaper</span> And{" "}
            <span className="text-green-600">Faster</span> with Azula
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 md:text-xl"
          >
            Africas most efficient charcoal stove engineered to save time,
            money, and combat global warming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button className="rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Get Azula Now
            </button>
            <button className="rounded-lg border-2 border-green-600 px-8 py-3 text-lg font-semibold text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              How It Works →
            </button>
          </motion.div>
        </div>

        {/* Image/3D Model */}
        <div className="mt-12 md:mt-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full"
          >
            {/* Replace with your 3D model or product image */}
            <Image
              src="/azula-stove-hero.png"
              alt="Azula Charcoal Stove"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-[url('/wave-pattern.svg')] bg-repeat-x opacity-10"></div>
    </header>
  );
}
