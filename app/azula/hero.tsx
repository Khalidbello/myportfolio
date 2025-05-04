"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
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
  const [hasLoaded, setHasLoaded] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  // Cache key for localStorage
  const CACHE_KEY = "spline-scene-cache";
  const SCENE_URL =
    "https://prod.spline.design/bqlWgGwP1LzbQBTE/scene.splinecode";

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
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

  // Preload and cache the Spline scene
  useEffect(() => {
    if (!isVisible || hasLoaded) return;

    const loadScene = async () => {
      try {
        // Check cache first
        const cachedResponse = localStorage.getItem(CACHE_KEY);
        const cacheTimestamp = localStorage.getItem(`${CACHE_KEY}-timestamp`);
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        if (
          cachedResponse &&
          cacheTimestamp &&
          Date.now() - parseInt(cacheTimestamp) < oneDay
        ) {
          // Use cached version if less than 24 hours old
          console.log("Using cached Spline scene");
          setHasLoaded(true);
          return;
        }

        // Fetch fresh version
        console.log("Fetching fresh Spline scene");
        const response = await fetch(SCENE_URL);
        const sceneData = await response.text();

        // Cache the response
        localStorage.setItem(CACHE_KEY, sceneData);
        localStorage.setItem(`${CACHE_KEY}-timestamp`, Date.now().toString());

        setHasLoaded(true);
      } catch (error) {
        console.error("Error loading Spline scene:", error);
      }
    };

    loadScene();
  }, [isVisible, hasLoaded]);

  return (
    <div className="hero grid grid-cols-8 gap-x-6 gap-y-8 px-8 min-h-[80vh]  items-center justify-center md:pt-32 pt-20 pb-16">
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

      {/* Image/3D Model */}
      <div
        ref={splineContainerRef}
        className="col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[22rem] md:h-[28rem] rounded-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full h-full"
        >
          {isVisible && hasLoaded && (
            <div className="w-full h-[22rem] md:h-[28rem] rounded-xl">
              <Spline scene={SCENE_URL} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
