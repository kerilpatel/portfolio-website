import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const LINKEDIN_URL = "https://linkedin.com/in/keril-patel";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setToggle(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-30 px-4 sm:px-6 pt-3 sm:pt-4">
      {/* the island itself */}
      <nav
        className={`mx-auto max-w-7xl rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0a1f]/85 border-white/15 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)]"
            : "bg-[#0d0a1f]/60 border-white/10"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2.5 pl-4 pr-2.5 sm:pl-5 sm:pr-3">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => {
              setToggle(false);
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[17px] font-bold cursor-pointer flex whitespace-nowrap">
              Keril &nbsp;
              <span className="sm:block hidden">| Software Engineer</span>
            </p>
          </Link>

          <ul className="list-none hidden xl:flex flex-row gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-secondary hover:text-white text-[15px] font-medium transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-[#915eff] hover:bg-[#a274ff] transition-colors px-5 py-2 text-[14px] font-semibold text-white whitespace-nowrap"
            >
              Connect with Me
            </a>

            <button
              type="button"
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              onClick={() => setToggle(!toggle)}
              className="xl:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <img
                src={toggle ? close : menu}
                alt=""
                className="w-[24px] h-[24px] object-contain"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile / tablet panel, floating under the island */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } xl:hidden mx-auto max-w-7xl mt-2 rounded-2xl border border-white/10 bg-[#0d0a1f]/95 backdrop-blur-xl p-4 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)]`}
      >
        <ul className="list-none flex flex-col gap-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setToggle(false)}
                className="block px-2 py-2 rounded-lg text-[16px] font-medium text-secondary hover:text-white hover:bg-white/5 transition-colors"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setToggle(false)}
          className="mt-3 flex items-center justify-center rounded-full bg-[#915eff] hover:bg-[#a274ff] transition-colors px-5 py-3 text-[15px] font-semibold text-white"
        >
          Connect with Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
