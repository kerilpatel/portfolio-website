import React from "react";

import { motion } from "framer-motion";

import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ title, items, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary shadow-card flex flex-col rounded-2xl p-6 border border-white-100/5 hover:border-white-100/10 transition-colors duration-300"
    >
      <h3 className="mb-6 text-[24px] font-bold text-white tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="border-white-100/10 bg-black-200 hover:bg-white-100/10 hover:border-secondary/50 cursor-pointer rounded-full border px-4 py-2 text-[14px] text-secondary hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(170,166,195,0.2)]"
          >
            {item}
          </div>
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

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
