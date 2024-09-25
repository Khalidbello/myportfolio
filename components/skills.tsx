import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topper from "./topper";
import TopperText from "./topper-text";
import { faDatabase, faDesktop, faLeaf, faMobile, faServer, faWind } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Skills: React.FC = () => {
    return (
        <div id="skills" className="relative bg-bg2 w-full bg-opacity-90">
            <Image alt="About pattern iamge" src={'/code-bg.jpeg'} width={500} height={500} className="-z-[1] absolute top-0 heght-0 w-full h-full" />
            <div className="py-20">
                <Topper />
                <TopperText
                    head={'SKills'}
                    note={'I am actively learning and improving'}
                />
                <div className="flex items-stretch justify-center gap-x-10 mt-16 px-4 max-w-screen-lg mx-auto">
                    <div className="flex-max-w-[30rem] min-w-[10rem]">
                        <div className="flex justify-center items-center gap-x-10 gap-y-14 flex-wrap  mb-12">
                            <div className="flex flex-col gap-y-2 justify-center items-center p-5 border-l-[5px] border-l-cyan-600 bg-prmry2 rounded-xl min-w-[10rem]">
                                <FontAwesomeIcon icon={faDesktop} className="w-6 h-6 text-gray-700" />
                                <span className="font-mono text-gray-700">Web development</span>
                            </div>
                            <div className="flex flex-col gap-y-2 justify-center items-center p-4 border-l-[5px] border-l-cyan-600 bg-prmry2 rounded-xl min-w-[10rem]">
                                <FontAwesomeIcon icon={faMobile} className="w-6 h-6 text-gray-700" />
                                <span className="font-mono text-gray-700">App development</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-10 gap-y-10 max-w-screen-2xl flex-wrap">
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faHtml5} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">HTML</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faCss3} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">Css</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faJs} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">JS</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faReact} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">React</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faWind} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">Tailwind Css</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faNodeJs} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">Node Js</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faServer} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">Express JS</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faLeaf} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">Mongo DB</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-900 ">
                                    <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 text-gray-400 " />
                                </div>
                                <span className="text-gray-500 font-serif">My SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Skills;