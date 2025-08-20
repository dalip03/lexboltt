"use client";

import { motion, easeOut } from "framer-motion";

export default function ProductHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section className="w-full max-w-6xl mx-auto pt-12 pb-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left side: Headline & text */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-black font-extrabold text-3xl sm:text-5xl mb-3 leading-tight"
          variants={textVariant}
        >
          Powering the Future <br />
          <span className="relative inline-block">
            of{" "}
            <span className="text-black">
              Regulations
              <span className="absolute -left-2 -bottom-1 h-1 w-[calc(100%+16px)] flex items-center pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-[#FF6600] rounded-full mx-1"
                  />
                ))}
              </span>
            </span>
          </span>
        </motion.h1>
        <motion.p className="text-gray-600 mt-2 text-base mb-8" variants={textVariant}>
          LexBolt is more than software it&apos;s an intelligent assistant for your compliance team.
        </motion.p>
      </motion.div>

      {/* Right side: Single full image */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/product/producthero.png"
          alt="Product Dashboard"
          className="w-[320px] h-[260px] md:w-[410px] md:h-full rounded-3xl object-cover"
        />
      </motion.div>
    </section>
  );
}
