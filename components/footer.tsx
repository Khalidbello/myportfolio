import { faWhatsapp, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-wrap justify-evenly items-center gap-x-10 gap-y-6 bg-bg1 border-t-[1px] border-t-gray-700 py-3 px-5">
            <p>
                <FontAwesomeIcon icon={faCopyright} className="w-5 h-5 text-gray-300" /> 2024 CodeNoJutsu All Right Reserved.
            </p>
            <div className='inline-flex items-center justify-between gap-5'>
                <a href='/#' className='flex items-center justify-center text-gray-200 text-xs'>
                    <FontAwesomeIcon icon={faWhatsapp} className='w-4 h-4 text-prmry2 mr-2' />
                </a>
                <a href='/#' className='flex items-center justify-center text-gray-200 text-xs'>
                    <FontAwesomeIcon icon={faTwitter} className='w-4 h-4 text-prmry2 mr-2' />
                </a>
                <a href='/#' className='flex items-center justify-center text-gray-200 text-xs'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-4 h-4 text-prmry2 mr-2' />
                </a>
                <a href='/#' className='flex items-center justify-center text-gray-200 text-xs'>
                    <FontAwesomeIcon icon={faGithub} className='w-4 h-4 text-prmry2 mr-2' />
                </a>
            </div>
            <p>Built and Designed By <span className="text-prmry2">Khalid Bello</span></p>
        </div>
    );
};



export default Footer;