import React from "react";

import { motion } from "framer-motion";

import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, name, issuer, date, badge, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="group"
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative bg-tertiary rounded-2xl border border-white-100/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:border-white-100/15 transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,75,162,0.08)]">
        <div className="relative flex-shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-black-200/50 p-3 ring-1 ring-white-100/5 group-hover:ring-white-100/10 transition-all duration-500">
            <img
              src={badge}
              alt={`${name} badge`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug tracking-wide">
            {name}
          </h3>
          <p className="text-secondary text-[14px] mt-2">{issuer}</p>
          <p className="text-secondary/60 text-[13px] mt-1">{date}</p>

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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Verify credential
          </span>
        </div>

        <div className="hidden sm:flex absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-secondary/40"
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
        </div>
      </div>
    </a>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional recognition</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Industry certifications that validate my expertise and commitment to
        continuous learning.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
