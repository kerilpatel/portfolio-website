import React, { useState, useEffect, useCallback } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const CARDS_PER_VIEW = 2;
const AUTO_SLIDE_INTERVAL = 5000;

const FeedbackCard = ({ testimonial, name, designation, company, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-black-200 p-10 rounded-3xl w-full sm:w-[calc(50%-14px)] flex-shrink-0">
      <p className="text-white font-black text-[48px]">&ldquo;</p>

      <div className="mt-1">
        <p
          className={`text-white tracking-wider text-[16px] leading-[1.6] ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {testimonial}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-secondary hover:text-white text-[13px] mt-2 transition-colors duration-200 cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        <div className="mt-5 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} at {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const totalSlides = Math.ceil(testimonials.length / CARDS_PER_VIEW);
  const [[currentSlide, direction], setSlide] = useState([0, 1]);

  const goToSlide = useCallback(
    (index) => {
      const dir = index > currentSlide ? 1 : -1;
      setSlide([index, dir]);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    setSlide(([prev]) => {
      const next = (prev + 1) % totalSlides;
      return [next, 1];
    });
  }, [totalSlides]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const startIdx = currentSlide * CARDS_PER_VIEW;
  const visibleCards = testimonials.slice(startIdx, startIdx + CARDS_PER_VIEW);

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
        {/* Carousel container with fixed height to prevent layout shift */}
        <div className="relative overflow-hidden min-h-[350px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={(dir) => ({
                x: dir > 0 ? "100%" : "-100%",
                opacity: 0,
              })}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={(dir) => ({
                x: dir > 0 ? "-100%" : "100%",
                opacity: 0,
              })}
              transition={{
                x: { type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.35 },
              }}
              className="absolute inset-0 flex flex-col sm:flex-row gap-7"
            >
              {visibleCards.map((item) => (
                <FeedbackCard key={item.name} {...item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-secondary/40 hover:bg-secondary/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
