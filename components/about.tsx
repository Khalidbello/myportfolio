import Topper from "./topper";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="relative bg-bg2 w-full bg-opacity-90">
      <Image
        alt="About pattern iamge"
        src={"/bg-pattern.png"}
        width={500}
        height={500}
        className="-z-[1] absolute top-0 heght-0 w-full h-full"
      />
      <div className="w-full h-full py-20 relative">
        <div className="flex items-center justify-center ralative -mt-[7.5rem] mb-20 bg-gray-600 bg-opacity-0">
          <div className="h-[5rem] font-mono inline-flex justify-center items-center gap-5 mx-10 rounded-full bg-gray-900 p-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-prmry1 text-[2rem]">3</span>
              <span className="text-gray-200 text-xs font-mono">
                Years Of Experience
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-prmry1 text-[2rem]">4</span>
              <span className="text-gray-200 text-xs font-mono">
                Live Projects
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-prmry1 text-[2rem]">3</span>
              <span className="text-gray-200 text-xs font-mono">
                Programming Languages
              </span>
            </div>
          </div>
        </div>
        <Topper />
        <div className="flex flex-col about-break:flex-row items-center about-break:items-stretch justify-center gap-x-10 gap-y-14 mt-16 px-8 max-w-screen-lg mx-auto">
          <div className="max-w-[30rem] min-w-[10rem]">
            <h2 className="bg-bg1 mb-3 p-2 px-4 inline-block text-[1rem] font-mono rounded-tl-[1rem] rounded-br-[1rem] border-[2px] border-prmry2">
              About Me
            </h2>
            <div className="bg-bg1 p-6 rounded-xl leading-[2rem]">
              <div className="text-prmry2">{`<p>`}</div>
              <div className="ml-3">
                <div className="text-[2rem] text-prmry1">Hello!</div>
                <p className="p-0 m-0">
                  {`I’m Khalid Bello, a Mechanical Engineering student with
                  first-class grades and a passion for building things—both in
                  the lab and on the web. My engineering mindset helps me break
                  down problems and build clean, practical solutions. I code
                  user-friendly apps and websites that actually work, blending
                  logic with creativity. Currently juggling studies and side
                  projects, I love turning ideas into real digital tools. Let’s
                  make something great together!`}
                </p>
              </div>
              <div className="text-prmry2">{`<p>`}</div>
            </div>
          </div>
          <div className="relative bg-gray-900 w-full max-w-[30rem] about-break:min-w-[18rem]  rounded-xl">
            <Image
              src={"/h-art.png"}
              alt="art by historia
              "
              width={500}
              height={500}
              className="w-full h-full rounded-xl opacity-50"
              // style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
