'use client';

import Topper from "./topper";
import TopperText from "./topper-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Image from 'next/image';

const Projects = () => {
    const carouselRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const scrollTo = (index: number) => {
        setCurrent(index);

        if (carouselRef?.current) {
            // @ts-expect-error: hide never error
            carouselRef.current.scrollTo({
                left: 500,
                behavior: 'smooth'
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
        <div id="projects" className="relative bg-bg1 w-full bg-opacity-20">
            <div className="py-20">
                <Topper />
                <TopperText
                    head={'Projects'}
                    note={'I am actively learning and improving'}
                />
                <div className="w-full flex flex-col gap-y-2 items-center justify-center gap-x-10 mt-16">
                    <div className="max-w-[50rem] relative overflow-hidden px-20">
                        <div
                            ref={carouselRef}
                            className="max-[800px] mx-auto flex justify-start items-stretch  mt-10  relative overflow-hidden"
                        >
                            {members.map((_, index) => (
                                <Member key={index} />
                            ))}
                        </div>
                        <button className="left-bt absolute top-[50%] left-[-10px] md:left-0 z-10 bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full flex justify-center items-center" onClick={leftScroll}>
                            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 text-prmry2" />
                        </button>
                        <button className="right-bt absolute top-[50%] right-[-10px] md:right-0 z-10 bg-prmry2 bg-opacity-20 p-2 w-14 h-14 rounded-full flex justify-center items-center" onClick={rightScroll}>
                            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-prmry2" />
                        </button>
                    </div>

                    <div className="indcato flex justify-center items-center gap-1 mt-4 px-4">
                        {members.map((_, index) => (
                            <button
                                key={index}
                                className={`hover:bg-orange-300 w-2 h-2 rounded-full ${index === current ? 'bg-prmry2' : 'bg-gray-700'}`}
                                onClick={() => scrollTo(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Member = () => {
    return (
        <div className="w-full flex-shrink-0 flex items-stretch justify-center flex-wrap gap-x-4">
            <div className="w-[21rem] h-full rounded-xl">
                <Image alt='project image' height={500} width={500} src={`/lifestyleleverage.png`} className="rounded-xl w-full h-full" />
            </div>
            <div className="w-[15rem] py-5">
                <div className="text-center pt-4">
                    <a href="" className="border-b-[2px] border-b-white text-prmry1 text-[1.25rem]">
                        Visit Website  <FontAwesomeIcon icon={faLink} className="w-2 h-2" />
                    </a>
                </div>
                <p className="leading-[2rem]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, totam sapiente? Iure asperiores libero cupiditate iusto provident ipsa dignissimos
                    quia? Ex at dolorem porro facilis necessitatibus obcaecati quidem nam voluptatibus!
                </p>
            </div>
        </div>
    );
};

const members = [1, 2, 3, 5, 6, 7, 8, 9, 10];


export default Projects;