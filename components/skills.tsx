"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topper from "./topper";
import TopperText from "./topper-text";
import {
  faDatabase,
  faDesktop,
  faLeaf,
  faMobile,
  faServer,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Skills: React.FC = () => {
  const skills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3, name: "CSS" },
    { icon: faJs, name: "JS" },
    { icon: faReact, name: "React" },
    { icon: faWind, name: "Tailwind CSS" },
    { icon: faNodeJs, name: "Node JS" },
    { icon: faServer, name: "Express JS" },
    { icon: faLeaf, name: "Mongo DB" },
    { icon: faDatabase, name: "MySQL" },
  ];

  const domains = [
    { icon: faDesktop, name: "Web development" },
    { icon: faMobile, name: "App development" },
  ];

  return (
    <motion.div
      id="skills"
      className="relative bg-bg2 w-full bg-opacity-90 overflow-hidden"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Image
        alt="About pattern image"
        src={"/code-bg.jpeg"}
        width={500}
        height={500}
        className="-z-[1] absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="py-20">
        <Topper />
        <TopperText
          head={"Skills"}
          note={"I am actively learning and improving"}
        />

        <motion.div
          className="flex items-stretch justify-center gap-x-10 mt-16 px-4 max-w-screen-lg mx-auto"
          variants={staggerContainer(0.1, 0.2)}
        >
          <div className="flex-max-w-[30rem] min-w-[10rem]">
            {/* Domain Skills */}
            <motion.div
              className="flex justify-center items-center gap-x-10 gap-y-14 flex-wrap mb-12"
              variants={fadeIn("up", "spring", 0.2, 1)}
            >
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-y-2 justify-center items-center p-5 border-l-[5px] border-l-cyan-600 bg-prmry2 rounded-xl min-w-[10rem]"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon
                    icon={domain.icon}
                    className="w-6 h-6 text-gray-700"
                  />
                  <span className="font-mono text-gray-700">{domain.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="flex items-center justify-center gap-x-10 gap-y-10 max-w-screen-2xl flex-wrap"
              variants={staggerContainer(0.05, 0.1)}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center gap-y-2"
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors"
                    />
                  </motion.div>
                  <motion.span
                    className="text-gray-500 font-serif"
                    whileHover={{ color: "#ffffff" }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
