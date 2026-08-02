import React from "react";

import codechefIcon from "../assets/codechef.jpeg";
import githubIcon from "../assets/github.jpeg";
import linkedinIcon from "../assets/linkedin.png";

const socials = [
  {
    name: "github",
    href: "https://github.com/kerilpatel",
    icon: githubIcon,
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/keril-patel",
    icon: linkedinIcon,
  },
  {
    name: "codechef",
    href: "https://www.codechef.com/users/kerilpatel",
    icon: codechefIcon,
  },
];

const Footer = () => (
  <footer className="relative z-10 flex flex-col items-center gap-6 py-10 border-t border-white/10">
    <div className="flex gap-6">
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
          <img
            src={icon}
            alt={name}
            className="w-9 h-9 object-cover rounded-full hover:scale-110 transition-transform cursor-pointer"
          />
        </a>
      ))}
    </div>
    <p className="text-secondary text-[13px]">
      © {new Date().getFullYear()} Keril Patel. All rights reserved.
    </p>
  </footer>
);

export default Footer;
