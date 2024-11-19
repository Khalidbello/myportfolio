"use client";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MutableRefObject, useRef } from "react";

const Socials: React.FC = () => {
  const mNavRef = useRef<null | HTMLButtonElement>(null);
  const socialNavRef = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (mNavRef.current) {
      mNavRef.current.style.backgroundColor = "#54565E";
    }
    setTimeout(() => {
      if (socialNavRef.current) socialNavRef.current.style.right = "0";
    }, 250);
  };

  const hideSocialNavRef: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (socialNavRef.current) socialNavRef.current.style.right = "-20rem";
    if (mNavRef.current) mNavRef.current.style.backgroundColor = "#292936";
  };

  return (
    <>
      <button
        ref={mNavRef}
        onClick={handleClick}
        className="relative inline-flex justify-center items-center gap-x-1  bg-bg1 lg:hidden"
      >
        <span className="text-white text-xs">Socials</span>
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-prmry1 w-[0.8rem] h-[0.8rem]"
        />
      </button>
      <SocialLinks eleRef={socialNavRef} show={hideSocialNavRef} />
    </>
  );
};

const SocialLinks: React.FC<{
  eleRef: MutableRefObject<HTMLDivElement | null>;
  show: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ eleRef, show }) => {
  return (
    <div className="fixed top-0 right-0 bg-gray-50">
      <div
        ref={eleRef}
        className="fixed top-0 -right-[20rem] transition-all pt-10 flex flex-col items-start justify-start gap-y-4 px-3 py-4 bg-bg1 rounded-l-xl border-grey border-[1px]"
      >
        <button className="absolute top-2 right-2" onClick={show}>
          <FontAwesomeIcon
            icon={faCaretRight}
            className="text-prmry1 w-[0.8rem] h-[0.8rem] "
          />
        </button>
        <a
          href="/#"
          className="flex items-center justify-center text-gray-200 text-xs"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-4 h-4 text-prmry2 mr-2"
          />{" "}
          Whatsapp
        </a>
        <a
          href="/#"
          className="flex items-center justify-center text-gray-200 text-xs"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-4 h-4 text-prmry2 mr-2"
          />{" "}
          Twitter
        </a>
        <a
          href="/#"
          className="flex items-center justify-center text-gray-200 text-xs"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-4 h-4 text-prmry2 mr-2"
          />{" "}
          LinkedIn
        </a>
        <a
          href="/#"
          className="flex items-center justify-center text-gray-200 text-xs"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-4 h-4 text-prmry2 mr-2"
          />{" "}
          Github
        </a>
      </div>
    </div>
  );
};

export default Socials;
