import React from "react";

import codechefIcon from "../assets/codechef.jpeg";
import githubIcon from "../assets/github.jpeg";
import linkedinIcon from "../assets/linkedin.png";
import { styles } from "../styles";
import HeroIdCard from "./HeroIdCard";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 lg:gap-16 pt-28`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-white whitespace-nowrap`}
            >
              Hi, I'm <span className="text-[#915eff]">Keril</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Software Engineer
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/kerilpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10"
              >
                <img
                  src={githubIcon}
                  alt="github"
                  className="w-9 h-9 object-cover rounded-full hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <a
                href="https://linkedin.com/in/keril-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10"
              >
                <img
                  src={linkedinIcon}
                  alt="linkedin"
                  className="w-9 h-9 object-cover rounded-full hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
              <a
                href="https://www.codechef.com/users/kerilpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10"
              >
                <img
                  src={codechefIcon}
                  alt="codechef"
                  className="w-9 h-9 object-cover rounded-full hover:scale-110 transition-transform cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <HeroIdCard />
      </div>
    </section>
  );
};

export default Hero;
