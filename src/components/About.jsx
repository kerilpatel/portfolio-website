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
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        Hi, I'm Keril, currently working as a Software Engineer I at Zebra
        Technologies. With over a year of experience, I've had the opportunity
        to work on some exciting projects. My primary focus has been on Flutter
        and mobile app development, where I've helped create impactful solutions
        like a stock trading app for one of India's top brokers and a patient
        initiative app for a major pharmaceutical company. In these roles, I
        developed key features to make the user experience smoother and more
        engaging.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I bring strong skills in Flutter, native mobile app development. I enjoy
        the challenge of building scalable, user-friendly applications. At Zebra
        Technologies, I'm currently involved in developing innovative software
        solutions to support the company's goals.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I graduated with a Bachelor of Engineering in Computer Science &
        Engineering from RV Institute of Technology and Management in Bengaluru.
        My time at RVITM was invaluable, providing me with a solid grounding in
        software engineering principles and the chance to apply what I learned
        through hands-on projects.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Every day, I'm driven by a passion for excellence and a desire to keep
        improving as a software developer. The tech world is always evolving,
        and I'm committed to growing along with it, expanding my knowledge and
        skills to stay at the forefront of the industry.
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
