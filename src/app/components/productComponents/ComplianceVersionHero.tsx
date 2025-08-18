'use client';

import { motion } from "framer-motion";

export default function ComplianceVersionHero() {
  return (
    <section className="w-full mx-auto py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
      {/* Left side: image */}
      <motion.div
        className="flex-1 flex items-center justify-center mt-10 lg:justify-start lg:mt-16 w-full"
        initial={{ opacity: 0, x: -40, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/product/productAnalyst.png"
          alt="Compliance Version Dashboard"
          className="w-[90vw] max-w-[340px] h-[220px] md:max-w-[460px] md:h-full rounded-2xl object-cover shadow-[0px_-14px_240px_-18px_rgba(252,125,63,0.37),146px_6px_240px_-12px_rgba(252,125,63,0.28)]"
        />
      </motion.div>
      {/* Right side: text and CTA */}
      <motion.div
        className="
          flex-1 flex flex-col items-center lg:items-start
          -mt-10 lg:-mt-16
          text-center lg:text-left
        "
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block bg-[#fde8e5] text-[#fc7e41] font-semibold text-xs px-3 py-1 mb-3 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          viewport={{ once: true }}
        >
          Analytics
        </motion.span>
        <motion.h1
          className="text-black font-bold text-2xl sm:text-4xl md:text-5xl mb-3 leading-tight"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          viewport={{ once: true }}
        >
          Smart Version Control
          <br />
          for Compliances
        </motion.h1>
        <motion.p
          className="text-gray-700 text-sm md:text-base mb-7 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.29 }}
          viewport={{ once: true }}
        >
          Monitor real-time changes in compliances and make informed business
          decisions. Stay ahead in the ever-evolving race of keeping up with all
          business regulations
        </motion.p>
        <motion.button
          className="flex items-center gap-2 bg-[#FF6600] text-white px-7 py-2.5 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.39 }}
          viewport={{ once: true }}
        >
          Schedule a Call
          <span className="ml-1">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M16 12H4m12 0l-5-5m5 5l-5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
