"use client";

// header for landing page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Socials from "./mobile-soicals";

const Header: React.FC = () => {
  const encodedNumber = encodeURIComponent("08188146243");

  return (
    <>
      <header className="z-50 fixed w-full pt-0 flex items-center justify-center bg-bg1">
        <div className="max-w-screen-xl p-4 bg-bg1 border-b-[2px] border-b-grey w-full px-5 py-3 flex justify-between items-center h-16">
          <span className="inline-flex items-center gap-1 max-w-lg">
            <span className="text-prmry1  text-[2rem]">{`<`}</span>{" "}
            <span className="">
              Code<span className="text-prmry1">No</span>Jutsu
            </span>{" "}
            <span className="text-prmry1 text-[2rem]">{`/>`}</span>
          </span>
          <span className="hidden items-center justify-between gap-5 xl:gap-x-32 lg:inline-flex">
            <span className="inline-flex gap-4">
              <a
                href={`https://wa.me/${encodedNumber}`}
                className="flex items-center justify-center text-gray-200 text-xs hover:text-prmry1"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-4 h-4 text-prmry2 mr-2"
                />{" "}
                Whatsapp
              </a>
              <a
                href="https://x.com/codenojutsu"
                className="flex items-center justify-center text-gray-200 text-xs hover:text-prmry1"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-4 h-4 text-prmry2 mr-2"
                />{" "}
                Twitter
              </a>
              <a
                href="https://www.linkdin.com/khalid-bello-322362237"
                className="flex items-center justify-center text-gray-200 text-xs hover:text-prmry1"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-4 h-4 text-prmry2 mr-2"
                />{" "}
                LinkedIn
              </a>
              <a
                href="/https://github.com/khalidbello"
                className="flex items-center justify-center text-gray-200 text-xs hover:text-prmry1"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-4 h-4 text-prmry2 mr-2"
                />{" "}
                Github
              </a>
            </span>
          </span>
          <Socials />
        </div>
      </header>
    </>
  );
};

export default Header;
