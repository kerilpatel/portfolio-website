import React from "react";

import { motion } from "framer-motion";

import developerActivity from "../assets/developer-activity.svg";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const highlights = [
  { label: "3+ Years", detail: "Frontend, Backend & Applied AI" },
  { label: "Software Engineer II", detail: "Zebra Technologies" },
  { label: "GenAI Certified", detail: "Applied to production work" },
  { label: "B.E. Computer Science", detail: "RV Institute, Bengaluru" },
];

const OverviewIllustration = () => (
  <motion.div
    variants={fadeIn("right", "spring", 0.1, 0.75)}
    className="w-full max-w-[420px] mx-auto"
  >
    <motion.img
      src={developerActivity}
      alt=""
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-auto"
    />
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <OverviewIllustration />
        </div>

        <div className="order-1 lg:order-2">
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
            I'm a software engineer with experience across frontend, backend,
            and applied AI. Over the past 3 years I've built a Flutter SDK
            and mobile app used across platforms, a full-stack web app with
            Next.js and Django, and GenAI-powered features — including a RAG
            assistant, MCP integrations, and multi-agent workflows — for
            customer-facing and internal tools. I'm certified in Generative
            AI and have applied it directly to production work.
          </motion.p>

          <motion.p
            variants={fadeIn("left", "", 0.2, 1)}
            className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
            I started my career building two client-facing applications from
            scratch at an early-stage startup, then spent over 2.5 years at
            Zebra Technologies, where I was promoted to Software Engineer II.
            I currently mentor an intern on agentic workflows, MCP
            development, and LLM evaluation.
          </motion.p>

          <motion.div
            variants={fadeIn("left", "", 0.3, 1)}
            className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-tertiary rounded-xl px-5 py-4 border border-white/5"
              >
                <p className="text-white text-[15px] font-semibold">
                  {item.label}
                </p>
                <p className="text-secondary text-[13px] mt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
