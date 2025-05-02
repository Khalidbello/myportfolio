"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Image from "next/image";

export default function CustomerReview() {
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
    <div className="bg-cyan-700 py-8 mx-4 rounded-2xl" id="testimonials">
      <div className="mb-10">
        <div className="flex flex-col jusitfy-center mb-8">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="flex items-start justify-center w-4 h-7 rounded-t-full rounded-b-full border-[2px] border-yellow-500">
              <div className="w-[2px] h-3 mt-1 bg-yellow-500"></div>
            </div>
            <div className="flex items-center jusitfy-center flex-col gap-[2px]">
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-[2px] h-1 bg-white"></span>
              <span className="w-2 h-2 bg-white rounded-full -mt-[1px]"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative px-2">
          <h2 className="relative inline-block text-white sm:text-xl md:text-2xl font-bold text-center border-b-[1px] border-b-white">
            <span className="px-4">
              What people Using Azula say about Azula
            </span>
            <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] left-0 bg-white"></div>
            <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] right-0 bg-white"></div>
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-6 items-center justify-center gap-x-10  -mt-4 project-break:mt-10">
        <div className="max-w-[52rem] w-full relative overflow-hidden px-10 project-break:px-20">
          <div
            ref={carouselRef}
            className="w-full mx-auto flex justify-start items-stretch relative overflow-hidden"
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

        <div className="indcator flex justify-center items-center gap-1 mt-4 px-4">
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
        <div className="project-break:hidden flex items-center justify-center gap-4">
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
  );
}

const Member: React.FC<{
  data: { name: string; occupation: string; review: string; image: string };
}> = ({ data }) => {
  return (
    <div className="w-full flex-shrink-0 grid grid-col-10 gap-x-4 gap-y-4 justify-items-center">
      <p className="h-auto bg-cyan-600 bg-opacity-30 text-cyan-100 min-h-[16rem] font-serif leading-8 rounded-xl p-3 sm:order-2 sm:col-start-5 sm:col-span-6 py-5">
        {data.review}{" "}
      </p>

      <div className="sm:order-1 sm:col-span-4 w-full flex items-center justify-start gap-x-2 text-cyan-100">
        <Image
          src={data.image}
          alt="reviewer image"
          width={500}
          height={500}
          className="w-14 h-14 sm:h-24 sm:w-24 rounded-full bg-white"
        />
        <span>
          <span className="text-base font-semibold block">{data.name}</span>
          <span className="text-sm block">{data.occupation}</span>
        </span>
      </div>
    </div>
  );
};

const members = [
  {
    image: "/botsub.png",
    name: "Amara Okafor",
    occupation: "Teacher",
    review:
      "Azula has been a game-changer for my family. It cooks meals so much faster and uses way less charcoal. I save money and still enjoy tasty dishes!",
  },
  {
    image: "/botsub.png",
    name: "Tunde Adewale",
    occupation: "Chef",
    review:
      "As a professional chef, I value efficiency. Azula not only cooks quickly but also maintains consistent heat. A fantastic addition to any kitchen!",
  },
  {
    image: "/botsub.png",
    name: "Ngozi Eze",
    occupation: "Entrepreneur",
    review:
      "Azula is both economical and environmentally friendly. I’ve noticed a significant reduction in the amount of charcoal I use, which saves me money every month.",
  },
  {
    image: "/botsub.png",
    name: "Ibrahim Musa",
    occupation: "Mechanic",
    review:
      "I was skeptical at first, but Azula has exceeded my expectations. It’s easy to use and helps me prepare meals for my family much faster.",
  },
  {
    image: "/botsub.png",
    name: "Fatima Bello",
    occupation: "Student",
    review:
      "I love Azula! It’s perfect for quick cooking, and I don’t have to spend as much money on charcoal. Plus, it’s better for the environment, which is important to me.",
  },
];
