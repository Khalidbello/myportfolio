//"use client";

import Spline from "@splinetool/react-spline/next";

import React from "react";
import CustomerReview from "./custoemerReview";
import HowAzulaWorks from "./howAzulaWorks";

const Azula = () => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <div className="w-full bg-cyan-50 text-gray-700 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="hero grid grid-cols-8 gap-x-6 gap-y-12 mb-20 px-8">
          <div className="col-start-1 col-span-8 md:col-span-4 flex flex-col items-start justify-center gap-5">
            <h1 className="font-mono font-bold md:font-semibold text-green-700 text-3xl sm:text-4xl md:text-5xl">
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

        <HowAzulaWorks />
        <CustomerReview />
      </div>
    </div>
  );
};

export default Azula;
