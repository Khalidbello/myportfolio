//"use client";

import React from "react";
import CustomerReview from "./custoemerReview";
import HowAzulaWorks from "./howAzulaWorks";
import Hero from "./hero";
import FAQSection from "./faq";
import Footer from "./footer";
import Navbar from "./nav";

const Azula = () => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <div className="w-full bg-cyan-50 text-gray-700 max-w-7xl mx-auto">
        <Navbar />
        {/* <HeroSection /> */}
        <Hero />
        <HowAzulaWorks />
        <CustomerReview />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Azula;
