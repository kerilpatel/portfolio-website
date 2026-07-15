import React from "react";

import { motion } from "framer-motion";

import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const MARQUEE_DURATION_S = 35; // seconds for one full pass through the unique set

const FeedbackCard = ({ testimonial, name, designation, image }) => {
  return (
    <div className="p-7 rounded-3xl border border-white/[0.08] bg-black-200">
      <p className="text-white font-black text-[36px] leading-none">&ldquo;</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[16px] leading-[1.6] line-clamp-5">
          {testimonial}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  // Render the set twice back-to-back so translateY(-50%) loops seamlessly
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-8 ${styles.paddingX}`}>
        {/* Vertical marquee: continuous auto-scroll, pauses in place on hover/focus */}
        <div className="marquee-viewport marquee-fade relative h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden">
          <div
            className="marquee-track flex flex-col gap-6"
            style={{ animationDuration: `${MARQUEE_DURATION_S}s` }}
          >
            {loopedTestimonials.map((card, i) => (
              <FeedbackCard key={`${card.name}-${i}`} {...card} />
            ))}
          </div>
        </div>

        {/* LinkedIn link */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.linkedin.com/in/keril-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-secondary hover:text-white text-[16px] font-medium transition-colors duration-200"
          >
            View all recommendations on LinkedIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
