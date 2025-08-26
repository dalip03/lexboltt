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
  // "+10+"
  const refClients = useCountUp({
    start: 0,
    end: 10,
    duration: 0.9,
    format: (val: number) => `${Math.floor(val)}+`,
  });
  // "+1K+"
  const refDocs = useCountUp({
    start: 0,
    end: 1,
    duration: 1.1,
    format: (val: number) => `${Math.floor(val)}K+`,
  });
  // "+12+"
  const refBiz = useCountUp({
    start: 0,
    end: 12,
    duration: 0.8,
    format: (val: number) => `${Math.floor(val)}+`,
  });

  return (
    <section className="w-full max-w-screen-3xl mx-auto pt-8 pb-10  px-4 sm:px-20 my-20 overflow-x-hidden">
      {/* Tag with fade-in */}
     

      {/* Headline and Description with slide-in */}
      <div className="flex flex-col md:flex-row md:items-end mb-8 ">
        {/* Left: Heading */}
        <motion.div
          className="flex-[2] min-w-0 "
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-[56px] xl:text-[64px] font-bold leading-tight mb-3 break-words">
            Revolutionizing{" "}
            <span className="bg-primary text-white px-2 md:px-3 py-1 font-extrabold inline-block">
              Businesses
            </span>{" "}
            Through <br />
            Tailored AI Models.
          </h1>
        </motion.div>

        {/* Right: Paragraph aligned bottom right */}
        <motion.div
          className="flex-[1] flex flex-col justify-end items-end mt-4 md:mb-0 pb-6 w-full "
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="h-full flex items-end max-w-full ">
            <p className="text-black text-sm md:text-base leading-tight md:text-right break-words">
              At Lexbolt, we create custom AI solutions to transform automotive
              compliance from intelligent regulation parsing to automated
              workflow integration helping teams thrive in a complex,
              data-driven industry.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats row with zoom-in/count-up animation */}
      <div className="flex  justify-between items-center gap-6 sm:gap-0 pt-16 max-w-full">
        {[ 
          { ref: refClients, label: "OEMs Consulted" },
          { ref: refDocs, label: "Documents Processed" },
          { ref: refBiz, label: "Industries Served" }
        ].map(({ ref, label }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center min-w-[100px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 + idx * 0.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <span
              ref={ref}
              className="text-black text-4xl md:text-[96px] font-bold mb-1 leading-none whitespace-nowrap"
            >
              0
            </span>
            <span className="text-gray-600 text-xs sm:text-sm md:text-md text-center max-w-[160px]">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
