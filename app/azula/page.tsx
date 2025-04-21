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
      <div className="w-full bg-cyan-50 text-gray-700 py-20 px-8 max-w-7xl mx-auto">
        <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20">
          <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
            <h1 className="font-mono text-2xl md:text-3xl">
              Cook Faster, Spend Less with Azula
            </h1>
            <p className="p-0 text-sm md:text-base">
              Azula optimized design burns hotter, wastes less, and cuts
              charcoal use by 70%—so you save money with every meal.
            </p>
            <button className="px-5 py-3 bg-green-100 text-green-700 font-semibold rounded-full">
              Get Azula
            </button>
          </div>
          <div className=" col-span-8 md:col-start-5 md:col-span-4 bg-green-100 h-[28rem] rounded-xl">
            <Spline scene="https://prod.spline.design/bqlWgGwP1LzbQBTE/scene.splinecode" />
          </div>
        </div>

        <div className="how-azula-works">
          <h2 className="text-center mb-10 text-green-800">
            <span className="border-l-4 border-yellow-500 p-2">
              How Azula enables you to cook <b>Better!!!</b>
            </span>
          </h2>

          <div className="grid grid-cols-8 gap-x-6 mb-10">
            <div className="col-span-4  flex flex-col items-start justify-center">
              <h2 className="text-xl md:text-2xl mb-4 text-green-700">
                <svg
                  className="w-8 h-8 mr-3 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
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
            <div className="col-start-5 col-span-4 h-[25rem] bg-green-200 rounded-md"></div>
          </div>

          <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-10">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="text-xl md:text-2xl mb-4 text-green-700 ">
                <FontAwesomeIcon
                  icon={faTemperatureHigh}
                  className="text-red-400 h-8"
                />
                High-Temp Combustion Chamber
              </h2>
              <p className="text-gray-700">
                {`Azula’s`} Mathematically designed combustion chamber sustain
                ultra-high temperatures, eliminating smoke and incomplete
                combustion.
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[25rem] bg-green-200 rounded-md"></div>
          </div>

          <div className="grid grid-cols-8 gap-x-6 mb-10">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="text-xl md:text-2xl mb-4 text-green-700">
                <FontAwesomeIcon
                  icon={faHurricane}
                  className="text-blue-500 h-8 -rotate-90"
                />
                Optimized Air flow System
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">**Dual air vents**</span>
                Dual air vents for a more fuel efficient burning
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[25rem] bg-green-200 rounded-md"></div>
          </div>
          <div className="grid grid-cols-8 gap-x-6 mb-10">
            <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
              <h2 className="text-xl md:text-2xl mb-4 text-green-700">
                <FontAwesomeIcon
                  icon={faRefresh}
                  className="text-green-500 h-6 -rotate-90"
                />
                Easy charcoal Refueling Desing
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">**Dual air vents**</span>
                Dual air vents for a more fuel efficient burning
              </p>
            </div>
            <div className="col-span-8 md:col-start-5 md:col-span-4 h-[25rem] bg-green-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azula;
