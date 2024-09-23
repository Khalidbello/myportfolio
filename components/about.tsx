import Topper from "./topper";
import Image from 'next/image';

const About = () => {
    return (
        <div id="about" className="relative bg-bg2 w-full bg-opacity-20 ">
            <Image alt="About pattern iamge" src={'/bg-pattern.png'} width={500} height={500} className="-z-[1] absolute top-0 heght-0 w-full h-full opacity-15" />
            <div className="w-full h-full py-20 relative">
                <div className="flex items-center justify-center ralative px-10 -mt-[7.5rem] mb-20 bg-gray-600 bg-opacity-0">
                    <div className="h-[5rem] inline-flex justify-center items-center gap-5 rounded-full bg-gray-900 p-4">
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-prmry1 text-[1.5rem]">9</span>
                            <span className="text-gray-200 text-sm font-serif">Years of experience</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-prmry1 text-[1.5rem]">9</span>
                            <span className="text-gray-200 text-sm font-serif">Years of experience</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-prmry1 text-[1.5rem]">9</span>
                            <span className="text-gray-200 text-sm font-serif">Years of experience</span>
                        </div>
                    </div>
                </div>
                <Topper />
                <div className="flex flex-col about-break:flex-row items-center about-break:items-stretch justify-center gap-x-10 gap-y-14 mt-16 px-8 max-w-screen-lg mx-auto">
                    <div className="max-w-[30rem] min-w-[10rem]">
                        <h2 className="bg-bg1 mb-3 p-2 px-4 inline-block text-[1rem] font-mono rounded-tl-[1rem] rounded-br-[1rem] border-[2px] border-prmry2">About Me</h2>
                        <p className="bg-bg1 p-6 rounded-xl leading-[2rem]">
                            <div className="text-prmry2">{`<p>`}</div>
                            <div className="ml-3">
                                <div className="text-[2rem] text-prmry1">Hello!</div>
                                {`I'm`} Khalid Bello, a mechanical engineering student with a strong passion for web development.
                                My analytical skills give me an edge in breaking down complex business problems into practical, technical solutions. With experience in both front-end and back-end development,
                                I focus on creating efficient, scalable web applications that meet real-world needs.
                            </div>
                            <div className="text-prmry2">{`<p>`}</div>
                        </p>
                    </div>
                    <div className="bg-gray-900 w-full max-w-[30rem] about-break:min-w-[18rem]  rounded-xl">
                        <Image src={'/work-space.jpeg'} alt="work space" width={500} height={500} className="w-full h-full rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About; 