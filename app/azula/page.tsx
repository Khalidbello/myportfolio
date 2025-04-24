//"use client";

import React from "react";
import CustomerReview from "./custoemerReview";
import HowAzulaWorks from "./howAzulaWorks";
import Hero from "./hero";

const Azula = () => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <div className="w-full bg-cyan-50 text-gray-700 pt-24 pb-16 max-w-7xl mx-auto">
        <Hero />
        <HowAzulaWorks />
        <CustomerReview />
      </div>
    </div>
  );
};

export default Azula;
