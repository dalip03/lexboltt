'use client';

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
    end: 5,
    duration: 0.9,
    format: (val: number) => `+${Math.floor(val)}K`,
  });
  // "+50M"
  const refDocs = useCountUp({
    start: 0,
    end: 50,
    duration: 1.1,
    format: (val: number) => `+${Math.floor(val)}M`,
  });
  // "+1.2K"
  const refBiz = useCountUp({
    start: 0,
    end: 1.2,
    duration: 0.8,
    format: (val: number) => `+${val.toFixed(1)}K`,
  });

  return (
    <section className="w-full max-w-6xl mx-auto pt-8 pb-10 px-4">
      {/* Tag with fade-in */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
          About Lexbolt
        </span>
      </motion.div>
      {/* Headline and Description with slide-in */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-8">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
            Revolutionizing <span className="text-gray-400">Businesses</span>{" "}
            Through <br />Tailored AI Models.
          </h1>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center md:items-start"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-700 text-sm md:text-base leading-relaxed md:mt-2 max-w-md">
            At LexBolt, we create custom AI solutions to transform automotive compliance from intelligent regulation parsing to automated workflow integration helping teams thrive in a complex, data-driven industry.
          </p>
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
            className="text-black text-3xl md:text-4xl font-bold mb-1"
          >+0K</span>
          <span className="text-gray-600 text-xs sm:text-sm">Clients Empowered</span>
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
            className="text-black text-3xl md:text-4xl font-bold mb-1"
          >+0M</span>
          <span className="text-gray-600 text-xs sm:text-sm">Documents Processed</span>
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
            className="text-black text-3xl md:text-4xl font-bold mb-1"
          >+0K</span>
          <span className="text-gray-600 text-xs sm:text-sm">Businesses Deployed</span>
        </motion.div>
      </div>
    </section>
  );
}
