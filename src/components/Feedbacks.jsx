import React, { useLayoutEffect, useRef } from "react";

import { motion } from "framer-motion";

import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const MARQUEE_SPEED_PX_S = 40; // px/s, keeps loop speed consistent as testimonials are added/removed

const FeedbackCard = ({ testimonial, name, designation, company, image }) => {
  return (
    <div className="shrink-0 w-[300px] sm:w-[360px] mr-6 rounded-2xl bg-white/[0.04] p-6">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <p className="text-white font-semibold text-[15px] leading-tight">
            {name}
          </p>
          <p className="mt-0.5 text-secondary text-[12px] leading-tight">
            {designation}
            {company ? ` · ${company}` : ""}
          </p>
        </div>
      </div>

      <p className="mt-4 text-secondary text-[14px] leading-[1.65] line-clamp-4">
        {testimonial}
      </p>
    </div>
  );
};

const Feedbacks = () => {
  const loopedTestimonials = [...testimonials, ...testimonials];

  const trackRef = useRef(null);

  // The track holds exactly two identical copies, so the loop point is a clean
  // -50% in CSS. JS only sets the duration, and re-sets it solely on a real
  // resize: rewriting it mid-flight rescales the animation's progress, which
  // is what shows up as a jerk.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastDistance = 0;

    const measure = () => {
      const distance = track.getBoundingClientRect().width / 2;
      if (distance > 0 && Math.abs(distance - lastDistance) > 1) {
        lastDistance = distance;
        track.style.animationDuration = `${distance / MARQUEE_SPEED_PX_S}s`;
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <div className="mt-12 -mx-6 sm:-mx-16">
        <div className="marquee-viewport marquee-fade overflow-hidden">
          <div ref={trackRef} className="marquee-track flex w-max">
            {loopedTestimonials.map((card, i) => (
              <FeedbackCard key={`${card.name}-${i}`} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
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
    </>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
