"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much charcoal does Azula save?",
    answer:
      "Azula reduces charcoal consumption by up to 70%. Most users report 1 bag lasts 6 weeks compared to 2 weeks with traditional stoves.",
  },
  {
    question: "Is Azula safe for indoor use?",
    answer:
      "Yes! The complete combustion system reduces smoke by 80%, making it safer for indoor kitchens than conventional charcoal stoves.",
  },
  {
    question: "What pots work with Azula?",
    answer:
      "Azula works with all standard pots (cast iron, stainless steel, aluminum). For best results, use flat-bottomed pots between 20-30cm diameter.",
  },
  {
    question: "How long does delivery take in Nigeria?",
    answer:
      "We deliver within 3-5 business days in Lagos/Abuja and 5-10 days to other states. Tracking info is provided immediately after dispatch.",
  },
  {
    question: "What's the warranty period?",
    answer:
      "All Azula stoves come with a 12-month warranty against manufacturing defects.",
  },
];

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-green-600"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path d="m6 9 6 6 6-6" />
  </motion.svg>
);

const FAQItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <h3 className="text-lg font-medium text-green-900 md:text-xl">
          {faq.question}
        </h3>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.question.replace(/\s+/g, "-").toLowerCase()}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-base text-green-700">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-600">
          Everything you need to know about Azula stove
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-white p-6 shadow-lg">
        {faqs.map((faq, index) => (
          <FAQItem key={`faq-${index}`} faq={faq} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-green-700">
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-green-600 underline hover:text-green-800"
          >
            Contact our team
          </a>
        </p>
      </div>
    </section>
  );
}
