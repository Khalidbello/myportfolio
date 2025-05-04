"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faRefresh,
  faHurricane,
} from "@fortawesome/free-solid-svg-icons";

type FeatureCardProps = {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  bgColor: string;
  imagePosition?: "left" | "right";
  splineScene?: string;
};

// Debounce function
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

const FeatureCard = ({
  title,
  description,
  icon,
  bgColor,
  imagePosition = "right",
  splineScene,
}: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !splineScene) return;

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
    ); // 100ms debounce

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 80% visibility
    });

    observer.observe(containerRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [splineScene]);

  return (
    <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-20">
      <div
        className={`col-span-8 ${
          imagePosition === "right"
            ? "md:col-span-4"
            : "md:order-2 md:col-start-5 md:col-span-4"
        } flex flex-col items-start justify-center`}
      >
        <h2 className="flex items-center justify-start gap-x-3 text-lg font-semibold md:text-2xl mb-4 text-green-700">
          <span
            className={`${bgColor} p-3 rounded-md inline-flex items-center justify-center`}
          >
            {icon}
          </span>
          {title}
        </h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div
        ref={containerRef}
        className={`col-span-8 h-[20rem] md:h-[25rem] ${bgColor} rounded-md ${
          imagePosition === "right"
            ? "md:col-start-5 md:col-span-4"
            : "md:order-1 md:col-start-1 md:col-span-4"
        }`}
      >
        {isVisible && splineScene && (
          <div className="w-full h-full rounded-xl">
            <iframe
              src={splineScene}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default function HowAzulaWorks() {
  const SCENE_URLS = {
    heatGuide: "https://my.spline.design/untitled-3U3KtHcwwaIUAbBcsGS5Z8SQ/",
    combustion: "https://my.spline.design/untitled-3U3KtHcwwaIUAbBcsGS5Z8SQ/",
    airflow: "https://my.spline.design/untitled-3U3KtHcwwaIUAbBcsGS5Z8SQ/",
    refueling: "https://my.spline.design/untitled-3U3KtHcwwaIUAbBcsGS5Z8SQ/",
  };

  return (
    <div className="how-azula-works px-8 pb-12" id="howitworks">
      {/* Decorative elements */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="flex items-start justify-center w-4 h-7 rounded-t-full rounded-b-full border-[2px] border-yellow-500">
            <div className="w-[2px] h-3 mt-1 bg-yellow-500"></div>
          </div>
          <div className="flex items-center justify-center flex-col gap-[2px]">
            {[...Array(7)].map((_, i) => (
              <span key={i} className="w-[2px] h-1 bg-green-700"></span>
            ))}
            <span className="w-2 h-2 bg-green-700 rounded-full -mt-[1px]"></span>
          </div>
        </div>
      </div>

      {/* Section title */}
      <div className="flex flex-col justify-center items-center relative mb-14 mt-6">
        <h2 className="relative inline-block text-green-700 sm:text-xl md:text-2xl font-medium md:font-bold text-center border-b-[1px] border-b-green-700">
          <span className="px-4">How Azula Makes You Cook Better!!!</span>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] left-0 bg-green-700"></div>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] right-0 bg-green-700"></div>
        </h2>
      </div>

      {/* Feature cards */}
      <FeatureCard
        title="Heat Guide Technology"
        description={
          <>
            <span className="font-semibold">Directs Heat to Your Pot</span>{" "}
            {"Azula's"} heat guide channels 70% of the heat generated from
            charcoal to your food, not the surroundings.
          </>
        }
        icon={
          <svg
            className="w-8 h-8 mr-3 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        bgColor="bg-blue-100"
        splineScene={SCENE_URLS.heatGuide}
      />

      <FeatureCard
        title="High-Temp Combustion Chamber"
        description="Azula's mathematically designed combustion chamber sustains ultra-high temperatures, eliminating smoke and incomplete combustion."
        icon={
          <FontAwesomeIcon
            icon={faTemperatureHigh}
            className="text-red-400 h-8"
          />
        }
        bgColor="bg-red-100"
        imagePosition="left"
        splineScene={SCENE_URLS.combustion}
      />

      <FeatureCard
        title="Optimized Airflow System"
        description={
          <>
            <span className="font-semibold">Dual air vents</span> for a more
            fuel efficient burning
          </>
        }
        icon={
          <FontAwesomeIcon
            icon={faHurricane}
            className="text-blue-500 h-8 -rotate-90"
          />
        }
        bgColor="bg-blue-100"
        splineScene={SCENE_URLS.airflow}
      />

      <FeatureCard
        title="Easy Charcoal Refueling Design"
        description={
          <>
            <span className="font-semibold">Dual air vents</span> for a more
            fuel efficient burning
          </>
        }
        icon={
          <FontAwesomeIcon
            icon={faRefresh}
            className="text-purple-500 h-6 -rotate-90"
          />
        }
        bgColor="bg-purple-100"
        imagePosition="left"
        splineScene={SCENE_URLS.refueling}
      />
    </div>
  );
}
