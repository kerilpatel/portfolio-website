import React from "react";

import { motion } from "framer-motion";
import { Blocks, Code2, Layers, Plug, Sparkles } from "lucide-react";

import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Fixed, closed set of 5 categories — icon + accent are presentation-only,
// so they live here rather than in the data-only skills constant.
const CATEGORY_META = {
  Languages: { icon: Code2, accent: "#56ccf2" },
  Frameworks: { icon: Layers, accent: "#38ef7d" },
  "Generative AI": { icon: Sparkles, accent: "#804dee" },
  "Architecture & Concepts": { icon: Blocks, accent: "#f5af19" },
  "Integrations & APIs": { icon: Plug, accent: "#ec008c" },
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
