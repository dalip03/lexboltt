"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Typings for hook params
interface CountUpParams {
  start?: number;
  end: number;
  duration?: number;
  format: (val: number) => string;
}

// Type-safe CountUp hook
function useCountUp({ start = 0, end, duration = 1, format }: CountUpParams) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let startTs = 0;

    function animate(ts: number) {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / (duration * 1000), 1);
      const value = start + (end - start) * progress;
      if (ref.current) {
        ref.current.textContent = format(progress < 1 ? value : end);
      }
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [end, duration, start, format]);
  return ref;
}

export default function AboutStatsHero() {
  // "+5K"
  const refClients = useCountUp({
    start: 0,
    end: 10,
    duration: 0.9,
    format: (val: number) => `+${Math.floor(val)}K`,
  });
  // "+50M"
  const refDocs = useCountUp({
    start: 0,
    end: 1,
    duration: 1.1,
    format: (val: number) => `+${Math.floor(val)}K`,
  });
  // "+1.2K"
  const refBiz = useCountUp({
    start: 0,
    end: 10,
    duration: 0.8,
    format: (val: number) => `+${Math.floor(val)}K`,
  });

  return (
    <section className="w-full max-w-6xl mx-auto pt-8 pb-10 px-4 my-20">
      {/* Tag with fade-in */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold">
          About Lexbolt
        </span>
      </motion.div>
      {/* Headline and Description with slide-in */}
      <div className="flex flex-col md:flex-row md:items-end md:gap-8 mb-8">
        {/* Left: Heading (big column) */}
        <motion.div
          className="flex-[2] min-w-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-[56px] xl:text-[64px] font-bold leading-tight mb-3">
            Revolutionizing{" "}
            <span className="bg-[#FF6600] text-white px-2 md:px-3 py-1 font-extrabold inline-block">
              Businesses
            </span>{" "}
            Through <br />
            Tailored AI Models.
          </h1>
        </motion.div>

        {/* Right: Paragraph bottom right, matching the heading height */}
        <motion.div
          className="flex-[1] flex flex-col justify-end items-end "
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="h-full flex items-end">
            <p className="text-black text-sm md:text-base leading-tight max-w-md md:text-right">
              At LexBolt, we create custom AI solutions to transform automotive
              compliance from intelligent regulation parsing to automated
              workflow integration helping teams thrive in a complex,
              data-driven industry.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats row with zoom-in/count-up animation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 pt-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, type: "spring" }}
          viewport={{ once: true }}
        >
          <span
            ref={refClients}
            className="text-black text-4xl md:text-[96px] font-bold mb-1"
          >
            +0
          </span>
          <span className="text-gray-600 text-xs sm:text-sm md:text-md">
            OEMs Conulted
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
          viewport={{ once: true }}
        >
          <span
            ref={refDocs}
            className="text-black text-4xl md:text-[96px]  font-bold mb-1"
          >
            +0K
          </span>
          <span className="text-gray-600 text-xs sm:text-sm md:text-md">
            Documents Processed
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, type: "spring" }}
          viewport={{ once: true }}
        >
          <span
            ref={refBiz}
            className="text-black text-4xl md:text-[96px]  font-bold mb-1"
          >
            +0K
          </span>
          <span className="text-gray-600 text-xs sm:text-sm md:md">
            Industries Served
          </span>
        </motion.div>
      </div>
    </section>
  );
}
