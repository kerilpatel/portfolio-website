import React, { useId, useLayoutEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { Blocks, Code2, Layers, Plug, Sparkles } from "lucide-react";

import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CATEGORY_META = {
  Languages: { icon: Code2, accent: "#56ccf2" },
  Frameworks: { icon: Layers, accent: "#38ef7d" },
  "Generative AI": { icon: Sparkles, accent: "#804dee" },
  "Architecture & Concepts": { icon: Blocks, accent: "#f5af19" },
  "APIs & Tools": { icon: Plug, accent: "#ec008c" },
};

// Minimum distance (px) the tooltip keeps from the viewport edges.
const TOOLTIP_GUTTER = 12;

const SkillPill = ({ name, note, accent }) => {
  const tooltipId = useId();
  const tooltipRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);

  const close = () => {
    setOpen(false);
    setShift(0);
  };

  // Nudge the centered tooltip back on-screen for pills near the edges.
  // Runs before paint, so the unshifted position is never visible.
  useLayoutEffect(() => {
    if (!open || !tooltipRef.current) return;
    const { left, right } = tooltipRef.current.getBoundingClientRect();
    const maxRight = window.innerWidth - TOOLTIP_GUTTER;
    if (left < TOOLTIP_GUTTER) setShift(TOOLTIP_GUTTER - left);
    else if (right > maxRight) setShift(maxRight - right);
  }, [open]);

  return (
    <div
      tabIndex={0}
      aria-describedby={tooltipId}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onFocus={() => setOpen(true)}
      onBlur={close}
      onKeyDown={(e) => e.key === "Escape" && close()}
      className="relative hover:z-10 focus:z-10 border-white-100/10 bg-black-200 hover:bg-white-100/10 hover:border-secondary/50 focus:outline-none focus-visible:border-secondary/50 cursor-default rounded-full border px-4 py-2 text-[14px] text-secondary hover:text-white focus-visible:text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(170,166,195,0.2)]"
    >
      {name}
      <span id={tooltipId} className="sr-only">
        {note}
      </span>
      {open && (
        <span
          ref={tooltipRef}
          role="tooltip"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 w-max max-w-[min(240px,calc(100vw-24px))]"
          style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
        >
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative block rounded-lg border border-white-100/10 bg-primary px-3 py-1.5 text-center text-[12px] leading-snug text-white shadow-card"
          >
            <span
              className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
              style={{ backgroundColor: accent }}
            />
            {note}
            <span
              className="absolute top-full left-1/2 -mt-1 h-2 w-2 rotate-45 border-b border-r border-white-100/10 bg-primary"
              style={{ marginLeft: `calc(-4px - ${shift}px)` }}
            />
          </motion.span>
        </span>
      )}
    </div>
  );
};

const SkillCard = ({ title, items, index }) => {
  const { icon: Icon, accent } = CATEGORY_META[title] ?? {};

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="group bg-tertiary shadow-card flex flex-col sm:flex-row sm:items-start gap-5 rounded-2xl p-6 border border-white-100/5 hover:border-white-100/10 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 sm:w-60 sm:flex-shrink-0">
        {Icon && (
          <span
            className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${accent}1a`, color: accent }}
          >
            <Icon size={20} aria-hidden="true" />
          </span>
        )}
        <h3 className="text-[22px] font-bold text-white tracking-wider">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-3 sm:pt-1">
        {items.map(({ name, note }) => (
          <SkillPill key={name} name={name} note={note} accent={accent} />
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My technical expertise</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-5">
        {skills.map((skillCategory, index) => (
          <SkillCard
            key={skillCategory.title}
            title={skillCategory.title}
            items={skillCategory.items}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
