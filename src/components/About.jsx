import React from "react";

import { motion } from "framer-motion";

import developerActivity from "../assets/developer-activity.svg";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const highlights = [
  { label: "3+ Years", detail: "Frontend, Backend & Applied AI" },
  { label: "Sr. Software Engineer", detail: "NEXA" },
  { label: "Nvidia Certified", detail: "Generative AI and LLMs" },
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
            Software Engineer with 3+ years building full-stack products and
            GenAI-powered features across mobile, web, and cloud platforms.
          </motion.p>

          <motion.p
            variants={fadeIn("left", "", 0.2, 1)}
            className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
            Currently at NEXA, and previously spent 2.5 years at Zebra
            Technologies, where I built a Flutter SDK and mobile application
            supporting printers across platforms, and owned a web application
            end-to-end using Next.js and Django. I also designed and shipped
            GenAI features for customer-facing and internal tools — including
            RAG assistants, MCP integrations, and multi-agent workflows.
          </motion.p>

          <motion.p
            variants={fadeIn("left", "", 0.3, 1)}
            className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
            Before that, at Gida Technologies, I built and shipped two
            applications from scratch in a fast-paced startup environment,
            working directly with clients to turn shifting requirements into
            working features.
          </motion.p>

          <motion.p
            variants={fadeIn("left", "", 0.4, 1)}
            className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
            I'm NVIDIA-Certified in Generative AI LLMs and AWS Certified as a
            Cloud Practitioner, and I enjoy working across the stack — from
            SDK development to LLM-powered systems.
          </motion.p>

          <motion.div
            variants={fadeIn("left", "", 0.5, 1)}
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
                <p className="text-secondary text-[13px] mt-1">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
