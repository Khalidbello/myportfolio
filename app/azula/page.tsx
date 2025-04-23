//"use client";

import Spline from "@splinetool/react-spline/next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faRefresh,
  faHurricane,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Azula = () => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <div className="w-full bg-cyan-50 text-gray-700 pt-24 pb-16 px-8 max-w-7xl mx-auto">
        <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20">
          <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
            <h1 className="font-mono font-semibold text-green-700 text-3xl sm:text-4xl md:text-5xl">
              Cook Cheaper And Faster with Azula
            </h1>
            <p className="p-0 text-sm md:text-base">
              {`Africa’s`} most efficient charcoal stove engineered to save
              time, money and combat global warming.
            </p>
            <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full">
              Get Azula
            </button>
          </div>
          <div className=" col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[22rem] md:h-[28rem] rounded-xl">
            <Spline scene="https://prod.spline.design/bqlWgGwP1LzbQBTE/scene.splinecode" />
          </div>
        </div>

        <div className="how-azula-works">
          <h2 className="text-center mb-14 text-green-800">
            <span className="border-l-4 border-yellow-500 p-2">
              How Azula enables you to cook <b>Better!!!</b>
            </span>
          </h2>

          <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
                <span className="bg-blue-100 p-2 pr-0 rounded-md inline-flex items-center justify-center">
                  <svg
                    className="w-8 h-8 mr-3 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                Heat Guide Technology
              </h2>
              <p>
                <span className="font-semibold">
                  **Directs Heat to Your Pot**
                </span>{" "}
                {`Azula’s`} heat guide channels 70% of the heat generated from
                charcoal to your food, not the surroundings.
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-blue-100 rounded-xl"></div>
          </div>

          <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700 ">
                <span className="bg-red-100 p-3 rounded-md inline-flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faTemperatureHigh}
                    className="text-red-400 h-8"
                  />
                </span>
                High-Temp Combustion Chamber
              </h2>
              <p className="text-gray-700">
                {`Azula’s`} Mathematically designed combustion chamber sustain
                ultra-high temperatures, eliminating smoke and incomplete
                combustion.
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-red-100 rounded-md"></div>
          </div>

          <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
                <span className="bg-blue-100 p-3 rounded-md inline-flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHurricane}
                    className="text-blue-500 h-8 -rotate-90"
                  />
                </span>
                Optimized Air flow System
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">**Dual air vents**</span>
                Dual air vents for a more fuel efficient burning
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-blue-100 rounded-md"></div>
          </div>
          <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
                <span className="bg-purple-100 p-3 rounded-md inline-flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faRefresh}
                    className="text-purple-500 h-6 -rotate-90"
                  />
                </span>
                Easy charcoal Refueling Desing
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">**Dual air vents**</span>
                Dual air vents for a more fuel efficient burning
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-purple-100 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azula;
