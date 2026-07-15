import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Keril, currently working as a Software Engineer II at Zebra
        Technologies. With 3+ years of experience across mobile, web, and
        backend systems, I've had the opportunity to build impactful solutions
        in FinTech, HealthTech, and enterprise workflow automation.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        While my background is rooted in Flutter and cross-platform native app
        development, my recent focus has expanded deeply into Generative AI
        integrations, RAG systems, and AI Agents. I enjoy the challenge of
        building clean, scalable architectures and blending LLM orchestration
        with user-friendly interfaces.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I graduated with a Bachelor of Engineering in Computer Science from RV
        Institute of Technology and Management in Bengaluru. Since then, my work
        has ranged from developing mission-critical SDKs and offline features to
        architecting GenAI pipelines that reduce manual rework and improve team
        efficiency.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Every day, I'm driven by a passion for excellence and a desire to keep
        improving as a software developer. The tech landscape is always
        evolving, and I'm committed to growing along with it, expanding my
        knowledge and skills to stay at the forefront of the industry.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
