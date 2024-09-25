import { faDownload, faEnvelope, faLink, faLocation, faMailBulk, faNetworkWired, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero:React.FC = () => {
    return (
        <div id="hero" className="bg-bg1 w-full min-h-full py-20 pb-[6.5rem] hero-break:pb-20 px-10">
            <div className="w-full min-h-full bg-bg1 mt-5 overflow-hidden flex flex-col-reverse hero-break:flex-row items-center justify-center gap-y-14 flex-wrap-reverse gap-x-14">
                <div className="flex flex-col items-start justify-evenly min-w-[15rem] h-[35rem] px-12 hero-break:px-8 border-[2px] border-t-[5px] border-l-[5px] border-gray-400 border-l-prmry2 border-t-prmry2 rounded-tl-[8rem] rounded-br-[8rem]">
                    <div className="flex flex-col justify-center items-center gap-y-3">
                        <div className="flex items-center justify-center w-[5rem] h-[5rem] overflow-hidden rounded-full border-[2px] border-prmry2 bg-gray-900">
                            <FontAwesomeIcon icon={faUser} className="w-[3rem] h-[3rem]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">Khalid</span>
                            <span>Full-stack web developer</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-2 text-xs">
                        <span className="flex justify-center items-center"> <FontAwesomeIcon icon={faMailBulk} className="w-5 h-5 text-prmry2 mr-3" /> bellokhalid74@gmail.com</span>
                        <span className="flex justify-center items-center"> <FontAwesomeIcon icon={faLocation} className="w-5 h-5 text-prmry2 mr-3" /> Nigeria</span>
                        <span className="flex justify-center items-center"> <FontAwesomeIcon icon={faNetworkWired} className="w-5 h-5 text-prmry2 mr-3" /> Full-time / Freelance</span>
                        <span className="flex justify-center items-center"> <FontAwesomeIcon icon={faLink} className="w-5 h-5 text-prmry2 mr-3" /> www.khalid.com.ng</span>
                    </div>
                    <div className="text-left">
                        <button className="flex justify-center items-center gap-x-3 bg-white text-gray-800 py-2 px-4 rounded-l-full rounded-r-full">Doownload Cv <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-gray-800" /></button>
                    </div>
                </div>
                <div className="w-full max-w-[40em]">
                    <h1 className="text-prmry2 text-[4rem] hero-break:text-[6rem] mb-10 hero-break:mb-14 bg-green-00">Developer</h1>
                    <div className="mb-0 text-[2rem]">
                        <div className="text-prmry2 text-sm">{`<h1>`}</div>
                        <div className="ml-8">Hey<span className="text-prmry1">!</span></div>
                        <div className="ml-8"> {`I'm`} <span className="text-prmry1">Khalid</span>,</div>
                        <div className="ml-8"> A Full-Stack Web Developer</div>
                        <div className="text-prmry2 text-sm">{`</h1>`}</div>
                    </div>
                    <div className="mb-4">
                        <div className="text-prmry2 text-sm">{`<p>`}</div>
                        <p className="ml-8 text-sm font-mono">
                            I help business grow by crafting amazing web products. If {`you're`} looking for a developer that loves to get stuff done
                        </p>
                        <div className="text-prmry2 text-sm">{`</p>`}</div>
                    </div>
                    <button className="flex items-center jusitfy-center gap-3 text-[1rem] text-prmry1 pl-8">
                        {`Let's Talk`} <FontAwesomeIcon icon={faEnvelope} className="bg-gray-700 text-prmry1 w-5 h-5 rounded-full p-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Hero;