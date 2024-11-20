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
import Image from "next/image";

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
  data: { link: string; info: string; image: string };
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
    image: "/lifestyleleverage.png",
    link: "https://lifestyleleverage.com.ng",
    info: "An e-learning site i built for a client, who got tired of the old fashioned whatsaap classes",
  },
  {
    image: "/botsub-inspire.jpg",
    link: "https://botsub.vercel.app",
    info: "My saas product, a facebook that enables customers to purchase data even when they are totally out of data leverging facebook freemode",
  },
  {
    image: "/lifestyleleverage.png",
    link: "https://lifestyleleverage.com.ng",
    info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet",
  },
];

export default Projects;
