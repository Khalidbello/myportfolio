"use client";

// import Spline from "@splinetool/react-spline";

// export default function Hero() {
//   return (
//     <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20 px-8">
//       <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
//         <h1 className="font-mono font-bold md:font-semibold text-green-700 text-3xl sm:text-4xl md:text-5xl">
//           Cook Cheaper And Faster with Azula
//         </h1>
//         <p className="p-0 text-sm md:text-base">
//           {`Africa’s`} most efficient charcoal stove engineered to save time,
//           money and combat global warming.
//         </p>
//         <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full">
//           Get Azula
//         </button>
//       </div>
//       <div className=" col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[22rem] md:h-[28rem] rounded-xl">
//         <div className="w-full h-full rounded-xl">
//           <Spline scene="https://prod.spline.design/bqlWgGwP1LzbQBTE/scene.splinecode" />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

// Properly typed debounce function without 'any'
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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // 80% visibility threshold
    };

    const handleIntersection: IntersectionObserverCallback = debounce(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: disconnect after first intersection
            //observer.disconnect();
          } else {
            setIsVisible(false);
          }
        });
      },
      100
    ); // 100ms debounce

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
    <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20 px-8">
      <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
        <h1 className="font-mono font-bold md:font-semibold text-green-700 text-3xl sm:text-4xl md:text-5xl">
          Cook Cheaper And Faster with Azula
        </h1>
        <p className="p-0 text-sm md:text-base">
          {`Africa's`} most efficient charcoal stove engineered to save time,
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
        {isVisible && (
          <div className="w-full h-full rounded-xl">
            <Spline scene="https://prod.spline.design/bqlWgGwP1LzbQBTE/scene.splinecode" />
          </div>
        )}
      </div>
    </div>
  );
}
