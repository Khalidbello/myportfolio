"use client";

import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

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
    <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20 px-8">
      <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
        <h1 className="font-mono font-bold md:font-semibold text-green-700 text-3xl sm:text-4xl md:text-5xl">
          Cook Cheaper And Faster with Azula
        </h1>
        <p className="p-0 text-sm md:text-base">
          {"Africa's"} most efficient charcoal stove engineered to save time,
          money and combat global warming.
        </p>
        <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full">
          Get Azula
        </button>
      </div>
      <div
        ref={splineContainerRef}
        className="col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[22rem] md:h-[28rem] rounded-xl"
      >
        {isVisible && hasLoaded && (
          <div className="w-full h-full rounded-xl">
            <Spline scene={SCENE_URL} />
          </div>
        )}
      </div>
    </div>
  );
}
