'use client';

import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section className="w-full max-w-6xl mx-auto pt-12 pb-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left side: Headline & text */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-black font-extrabold text-3xl sm:text-5xl mb-3 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.11 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Powering the Future <br />
          <span className="relative inline-block">
            of{" "}
            <span className="text-black">
              Regulations
              {/* Decorative orange dots underline */}
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
        <motion.p
          className="text-gray-600 mt-2 text-base mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.17 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          LexBolt is more than software—it&apos;s an intelligent assistant for your compliance team.
        </motion.p>
      </motion.div>
      {/* Right side: Single full image */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.13 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src="/product/producthero.png"
          alt="Product Dashboard"
          className="w-[320px] h-[260px] md:w-[410px] md:h-full rounded-3xl object-cover "
        />
      </motion.div>
    </section>
  );
}
