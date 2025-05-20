"use client";

import {
  faDownload,
  faEnvelope,
  faLink,
  faLocation,
  faMailBulk,
  faNetworkWired,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, slideIn } from "@/utils/motion";

const Hero: React.FC = () => {
  const encodedNumber = encodeURIComponent("08188146243");
  const btRef = useRef<null | HTMLButtonElement>(null);

  const handleLetsTalk: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (btRef.current) btRef.current.style.opacity = "0.5";
    setTimeout(() => {
      if (btRef.current) btRef.current.style.opacity = "1";
    }, 500);
    setTimeout(
      () => window.location.assign(`https://wa.me/${encodedNumber}`),
      550
    );
  };

  return (
    <motion.div
      id="hero"
      className="bg-bg1 w-full min-h-full py-20 pb-[6.5rem] hero-break:pb-20 px-10"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-full min-h-full bg-bg1 mt-5 overflow-hidden flex flex-col-reverse hero-break:flex-row items-center justify-center gap-y-14 flex-wrap-reverse gap-x-14">
        {/* Profile Card */}
        <motion.div
          className="flex flex-col items-start justify-evenly min-w-[15rem] h-[35rem] px-12 hero-break:px-8 border-[2px] border-t-[5px] border-l-[5px] border-gray-400 border-l-prmry2 border-t-prmry2 rounded-tl-[8rem] rounded-br-[8rem]"
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <motion.div
            className="flex flex-col justify-center items-center gap-y-3"
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            <motion.div
              className="flex items-center justify-center w-[5rem] h-[5rem] overflow-hidden rounded-full border-[2px] border-prmry2 bg-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faUser} className="w-[3rem] h-[3rem]" />
            </motion.div>
            <motion.div className="flex flex-col items-center">
              <span className="text-2xl">Khalid</span>
              <span>Full-stack web developer</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-start gap-y-2 text-xs"
            variants={fadeIn("up", "spring", 0.7, 0.75)}
          >
            <span className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="w-5 h-5 text-prmry2 mr-3"
              />{" "}
              bellokhalid74@gmail.com
            </span>
            <span className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faLocation}
                className="w-5 h-5 text-prmry2 mr-3"
              />{" "}
              Nigeria
            </span>
            <span className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faNetworkWired}
                className="w-5 h-5 text-prmry2 mr-3"
              />{" "}
              Full-time / Freelance
            </span>
            <span className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faLink}
                className="w-5 h-5 text-prmry2 mr-3"
              />{" "}
              www.khalid.com.ng
            </span>
          </motion.div>

          <motion.div
            className="text-left"
            variants={fadeIn("up", "spring", 0.9, 0.75)}
          >
            <motion.a
              download
              href="/resume.pdf"
              className="flex justify-center items-center gap-x-3 bg-white text-gray-800 py-2 px-4 rounded-l-full rounded-r-full hover:shadow-cyan-800 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV{" "}
              <FontAwesomeIcon
                icon={faDownload}
                className="w-4 h-4 text-gray-800"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="w-full max-w-[40em]"
          variants={staggerContainer(0.1, 0.3)}
        >
          <motion.h1
            className="text-prmry2 text-[4rem] hero-break:text-[6rem] mb-10 hero-break:mb-14"
            variants={textVariant(0.1)}
          >
            Developer
          </motion.h1>

          <motion.div
            className="mb-0 text-[2rem]"
            variants={fadeIn("up", "spring", 0.3, 1)}
          >
            <div className="text-prmry2 text-sm">{`<h1>`}</div>
            <div className="ml-8">
              Hey<span className="text-prmry1">!</span>
            </div>
            <div className="ml-8">
              {" "}
              {`I'm`} <span className="text-prmry1">Khalid</span>,
            </div>
            <div className="ml-8"> A Full-Stack Web Developer</div>
            <div className="text-prmry2 text-sm">{`</h1>`}</div>
          </motion.div>

          <motion.div
            className="mb-4"
            variants={fadeIn("up", "spring", 0.5, 1)}
          >
            <div className="text-prmry2 text-sm">{`<p>`}</div>
            <p className="ml-8 text-sm font-mono">
              I help business grow by crafting amazing web products. If{" "}
              {`you're`} looking for a developer that loves to get stuff done
            </p>
            <div className="text-prmry2 text-sm">{`</p>`}</div>
          </motion.div>

          <motion.button
            ref={btRef}
            onClick={handleLetsTalk}
            className="flex items-center jusitfy-center gap-3 text-[1rem] text-prmry1 pl-8 hover:text-cyan-800"
            variants={fadeIn("up", "spring", 0.7, 1)}
            whileHover={{
              x: 10,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {`Let's Talk`}{" "}
            <motion.span
              animate={{
                rotate: [0, 20, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="bg-gray-700 text-prmry1 w-5 h-5 rounded-full p-2"
              />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
