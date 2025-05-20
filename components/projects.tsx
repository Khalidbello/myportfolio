"use client";

import Topper from "./topper";
import TopperText from "./topper-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import botSubImg from "@/public/botsub-img.png";
import botSubAdminImg from "@/public/botsub-admin.png";
import azulaImg from "@/public/azula-img.png";
import theLogicRoomImg from "@/public/the-logic-room.png";
import sabiqFarmImg from "@/public/sabiq-farm.png";

const Projects: React.FC = () => {
  const carouselRef = useRef<null | HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    setCurrent(index);

    if (carouselRef?.current) {
      const width = carouselRef.current.scrollWidth / members.length;
      console.log("corusel, widht", width);
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  const leftScroll = () => {
    const nextIndex = current - 1;
    if (nextIndex >= 0) {
      scrollTo(nextIndex);
    }
  };

  const rightScroll = () => {
    const nextIndex = current + 1;
    if (nextIndex < members.length) {
      scrollTo(nextIndex);
    }
  };

  return (
    <div id="projects" className="relative bg-bg1 w-full">
      <div className="py-20">
        <Topper />
        <TopperText
          head={"Projects"}
          note={"I am actively learning and improving"}
        />
        <div className="w-full flex flex-col gap-y-6 items-center justify-center gap-x-10  -mt-4 project-break:mt-10">
          <div className="max-w-[52rem] w-full relative overflow-hidden px-10 project-break:px-20">
            <div
              ref={carouselRef}
              className="w-full mx-auto flex justify-start items-stretch mt-10 relative overflow-hidden"
            >
              {members.map((data, index) => (
                <Member key={index} data={data} />
              ))}
            </div>
            <button
              className="hidden project-break:flex left-bt absolute top-[50%] left-[-10px] md:left-3 z-10 bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full justify-center items-center"
              onClick={leftScroll}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-4 w-4 text-prmry2"
              />
            </button>
            <button
              className="hidden project-break:flex absolute top-[50%] right-[-10px] md:right-3 z-10 bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full justify-center items-center"
              onClick={rightScroll}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 text-prmry2"
              />
            </button>
          </div>

          <div className="indcato flex justify-center items-center gap-1 mt-4 px-4">
            {members.map((_, index) => (
              <button
                key={index}
                className={`hover:bg-orange-300 w-2 h-2 rounded-full ${
                  index === current ? "bg-prmry2" : "bg-gray-700"
                }`}
                onClick={() => scrollTo(index)}
              ></button>
            ))}
          </div>
          <div className="project-break:hidden flex items-center justify-center gap-4 -mb-14">
            <button
              className="bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full flex justify-center items-center"
              onClick={leftScroll}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-4 w-4 text-prmry2"
              />
            </button>
            <button
              className="bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full flex justify-center items-center"
              onClick={rightScroll}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 text-prmry2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Member: React.FC<{
  data: { link: string; info: string; image: StaticImageData };
}> = ({ data }) => {
  return (
    <div className="w-full flex-shrink-0 flex items-center flex-wrap-reverse justify-center gap-x-4">
      <div className="w-[20rem] rounded-x">
        <Image
          alt="project image"
          height={500}
          width={500}
          src={data.image}
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="max-w-[15rem] py-5">
        <div className="text-center pt-4">
          <a
            href={data.link}
            className="border-b-[1px] border-b-white text-blue-300 text-[1.2rem]"
          >
            Visit Website{" "}
            <FontAwesomeIcon icon={faForward} className="w-2 h-2" />
          </a>
        </div>
        <p className="leading-[1.5rem] text-sm">{data.info}</p>
      </div>
    </div>
  );
};

const members = [
  {
    image: botSubImg,
    link: "https://botsub.vercel.app",
    info: "BotSub – Developed and launched a conversational Facebook and WhatsApp bot enabling users to purchase airtime and data seamlessly, even in free mode. As the founder and sole developer, I architected the system from scratch, growing the user base to 400+ active customers",
  },
  {
    image: botSubAdminImg,
    link: "https://botsub.vercel.app/admin",
    info: "BotSub Admin – Designed an intuitive admin dashboard to streamline customer management, issue resolution, and growth analytics, empowering non-technical team members to oversee operations efficiently",
  },
  {
    image: azulaImg,
    link: "https://codenojutsu.vercel.app/azula",
    info: "Azula – Created a dynamic product page featuring a web-compatible 3D model for an improved charcoal stove, blending interactive design with persuasive storytelling.",
  },
  {
    image: theLogicRoomImg,
    link: "https://www.thelogicroominnovation.com/",
    info: "The Logic Room – Built as a frontend developer during my internship at Tech-Reyal, this business landing page prioritized clean design and responsive functionality to enhance user engagement",
  },
  {
    image: azulaImg,
    link: "https://codenojutsu.vercel.app/azula",
    info: "Azula – Created a dynamic product page featuring a web-compatible 3D model for an improved charcoal stove, blending interactive design with persuasive storytelling.",
  },
  {
    image: sabiqFarmImg,
    link: "https://sabiqfarm.vercel.app/",
    info: "SabiqFarm – Delivered a grant-focused landing page for a peer’s agricultural initiative, optimizing conversion through clear value propositions and seamless UX.",
  },
];

export default Projects;
