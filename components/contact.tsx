import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topper from "./topper"
import TopperText from "./topper-text"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";

const Contact: React.FC = () => {
    return (
        <div id="contact" className="relative bg-bg2 w-full">
            <div className="py-20">
                <Topper />
                <TopperText
                    head={'Contact'}
                    note={`Hit me up let's talk about the next big thing`}
                />
                <div className="mt-16 px-8">
                    <h2 className="text-center mb-10">
                        <span className="px-4 py-2 border-[2px] border-prmry2 text-prmry1 font-mono rounded-tl-[1rem] rounded-br-[1rem]">Send Me A Message</span>
                    </h2>
                    <form action="" className="block max-w-xl mx-auto">
                        <div className="flex items-center justify-between flex-grow gap-x-10 mb-8">
                            <div className="flex flex-col items-start justify-start gap-y-2 w-[46%]">
                                <label htmlFor="name" className="text-sm text-prmry1">Your name *</label>
                                <input id="name" type="text" placeholder="Enter your name" className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-y-2 w-[46%]">
                                <label htmlFor="email" className="text-sm text-prmry1">Email *</label>
                                <input id="email" type="text" placeholder="Enter your email" className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-y-2 mb-4">
                            <label htmlFor="message" className="text-sm text-prmry1">Your message *</label>
                            <textarea id="message" placeholder="Enter your needs" className="h-[1.5rem] w-full px-4 py-1 bg-transparent border-b-[2px] border-b-prmry2 text-sm"></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="px-4 py-2 rounded-full bg-prmry1 text-gray-800 flex items-center justify-center gap-3">
                                Send <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 text-gray-800"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Contact;