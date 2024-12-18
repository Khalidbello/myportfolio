"use client";

import {
  faCode,
  faContactBook,
  faDesktop,
  faHome,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Register scroll events
    Events.scrollEvent.register("begin", function (to) {
      console.log("Scroll started to:", to);
    });

    Events.scrollEvent.register("end", function (to) {
      setActiveSection(to);
    });

    // Register scroll spy
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navItems = [
    { to: "hero", icon: faHome },
    { to: "about", icon: faUser },
    { to: "skills", icon: faCode },
    { to: "projects", icon: faDesktop },
    { to: "reviews", icon: faUsers },
    { to: "contact", icon: faContactBook },
  ];

  return (
    <nav className="opacity-70 rounded-t-full rounded-b-full fixed top-24 right-5 nav-switch:top-24 nav-switch:right-20 p-3 flex flex-col items-center justify-center gap-y-7 bg-gray-800 border-[2px] border-gray-300">
      {navItems.map((item) => (
        <ScrollLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          onSetActive={() => setActiveSection(item.to)}
          className={`${
            activeSection === item.to ? "bg-white" : "bg-gray-800"
          } hover:text-prmry2 rounded-full w-8 h-8 flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={`${
              activeSection === item.to ? "text-gray-800" : "text-gray-200"
            } w-4 h-4 hover:text-prmry1`}
          />
        </ScrollLink>
      ))}
    </nav>
  );
};

export default SideNav;
