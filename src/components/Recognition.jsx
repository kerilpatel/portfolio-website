import React from "react";

import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Feedbacks from "./Feedbacks";

const Recognition = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials & feedback</p>
        <h2 className={styles.sectionHeadText}>Recognition.</h2>
      </motion.div>

      <div className="mt-12">
        <Certifications />
      </div>

      <div className="mt-16">
        <Achievements />
      </div>

      <div className="mt-16">
        <Feedbacks />
      </div>
    </>
  );
};

export default SectionWrapper(Recognition, "recognition");
