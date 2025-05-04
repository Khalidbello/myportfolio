"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function debounce<Args extends unknown[]>(
  func: (...args: Args) => void,
  wait: number
): (...args: Args) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const SPLINE_URL =
    "https://my.spline.design/untitled-3U3KtHcwwaIUAbBcsGS5Z8SQ/";

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const handleIntersection = debounce(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      100
    );

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (splineContainerRef.current) {
      observer.observe(splineContainerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="hero grid grid-cols-8 gap-x-6 gap-y-8 px-8 min-h-[80vh] items-center justify-center md:pt-32 pt-20 pb-16">
      <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5 ">
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
          Africas most efficient charcoal stove engineered to save time, money,
          and combat global warming.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/buy"
            className="rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Get Azula Now
          </Link>
          <Link
            href="#howitworks"
            className="rounded-lg border-2 border-green-600 px-8 py-3 text-lg font-semibold text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            How It Works →
          </Link>
        </motion.div>
      </div>

      {/* Spline iframe */}
      <div
        ref={splineContainerRef}
        className="col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[22rem] md:h-[28rem] rounded-xl overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          {isVisible && (
            <iframe
              src={SPLINE_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </motion.div>
      </div>
    </div>
  );
}
