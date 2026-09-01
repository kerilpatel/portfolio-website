import React from "react";

import { motion } from "framer-motion";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const icons = {
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  trophy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 21h8m-4-4v4m-5.5-16h11M6.5 5H4a1 1 0 00-1 1v1a4 4 0 004 4m10.5-6H20a1 1 0 011 1v1a4 4 0 01-4 4m-10.5-6v5a5.5 5.5 0 0011 0V5"
    />
  ),
};

const AchievementCard = ({
  index,
  title,
  context,
  description,
  icon,
  link,
  linkText,
}) => {
  const card = (
    <div className="h-full relative bg-tertiary rounded-2xl border border-white-100/5 p-6 sm:p-8 flex flex-col items-center sm:items-start gap-5 hover:border-white-100/15 transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,75,162,0.08)]">
      <div className="w-14 h-14 rounded-xl bg-black-200/50 ring-1 ring-white-100/5 group-hover:ring-white-100/10 flex justify-center items-center transition-all duration-500">
        <svg
          className="w-7 h-7 text-[#915eff]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          {icons[icon]}
        </svg>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug tracking-wide">
          {title}
        </h3>
        <p className="text-secondary text-[14px] mt-2">{context}</p>
        <p className="text-secondary/60 text-[14px] mt-3 leading-[24px]">
          {description}
        </p>

        {link && (
          <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] text-secondary/50 group-hover:text-secondary transition-colors duration-300">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {linkText}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="group flex-1 min-w-[280px] max-w-xl flex"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition and awards</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
