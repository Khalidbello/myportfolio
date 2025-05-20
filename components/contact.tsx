"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topper from "./topper";
import TopperText from "./topper-text";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Contact: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    const form = formRef.current;
    if (!form) return;

    // Basic validation
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim()) {
      setError("Please enter your name");
      setIsLoading(false);
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email");
      setIsLoading(false);
      return;
    }
    if (!message.trim()) {
      setError("Please enter your message");
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className="relative bg-bg2 w-full overflow-x-hidden" // Added overflow-x-hidden
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="py-20 w-full max-w-[100vw] mx-auto px-4 sm:px-8">
        {" "}
        {/* Added max-w and responsive padding */}
        <Topper />
        <TopperText
          head={"Contact"}
          note={`Hit me up let's talk about the next big thing`}
        />
        <div className="mt-16 w-full">
          <motion.h2
            className="text-center mb-10"
            variants={fadeIn("up", "spring", 0.2, 1.4)}
          >
            <span className="inline-block px-4 py-2 border-[2px] border-prmry2 text-prmry1 font-mono rounded-tl-[1rem] rounded-br-[1rem]">
              Send Me A Message
            </span>
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto"
            variants={fadeIn("up", "spring", 0.4, 1.4)}
          >
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 mb-8 w-full">
              <motion.div
                className="flex flex-col items-start justify-start gap-y-2 w-full sm:w-[48%]"
                variants={fadeIn("right", "spring", 0.2, 1.4)}
              >
                <label htmlFor="name" className="text-sm text-prmry1">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm focus:outline-none focus:border-prmry1 transition-colors"
                />
              </motion.div>

              <motion.div
                className="flex flex-col items-start justify-start gap-y-2 w-full sm:w-[48%]"
                variants={fadeIn("left", "spring", 0.2, 1)}
              >
                <label htmlFor="email" className="text-sm text-prmry1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm focus:outline-none focus:border-prmry1 transition-colors"
                />
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col items-start justify-start gap-y-2 mb-4 w-full"
              variants={fadeIn("up", "spring", 0.3, 1.4)}
            >
              <label htmlFor="message" className="text-sm text-prmry1">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your needs"
                className="w-full min-h-[3.5rem] px-4 py-1 bg-transparent border-b-[2px] border-b-prmry2 text-sm focus:outline-none focus:border-prmry1 transition-colors"
              ></textarea>
            </motion.div>

            {error && (
              <motion.p
                className="text-red-500 text-sm text-center mb-2"
                variants={fadeIn("up", "spring", 0.4, 1.4)}
              >
                {error}
              </motion.p>
            )}

            {success && (
              <motion.p
                className="text-green-500 text-sm text-center mb-2"
                variants={fadeIn("up", "spring", 0.4, 1.4)}
              >
                Message sent successfully!
              </motion.p>
            )}

            <motion.div className="flex items-center justify-center w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 rounded-full bg-prmry1 text-gray-800 flex items-center justify-center gap-3 hover:bg-prmry2 hover:text-white transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send{" "}
                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
