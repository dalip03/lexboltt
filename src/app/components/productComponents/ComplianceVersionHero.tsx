"use client";
import { motion } from "framer-motion";

export default function ComplianceVersionHero() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 flex flex-col-reverse lg:flex-row items-start gap-8 mt-20">
      {/* Left Side: Image */}
      <motion.div
        className="flex-1 flex items-start justify-center lg:justify-start w-full "
        initial={{ opacity: 0, x: -40, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/product/products2.svg"
          alt="Compliance Version Dashboard"
          className="w-full max-w-[340px] h-[220px] md:max-w-[460px] md:h-full object-cover shadow-[0px_-14px_240px_-18px_rgba(252,125,63,0.37),146px_6px_240px_-12px_rgba(252,125,63,0.28)]"
        />
      </motion.div>
      {/* Right Side: Text, aligned top-left on desktop */}
      <motion.div
        className="flex-1 flex flex-col item-center justify-center text-center md:items-start md:justify-start md:text-left lg:mt-0 mt-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        viewport={{ once: true }}
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3 "
        >
          Analytics
        </motion.span>
        <motion.h1
          className="text-black font-bold text-2xl sm:text-3xl md:text-[56px]  mb-3 leading-tight "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          viewport={{ once: true }}
        >
          Smart Version Control<br />
          for Compliances
        </motion.h1>
        <motion.p
          className="text-[#2E2E2E] text-sm md:text-base mb-7 max-w-lg "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.29 }}
          viewport={{ once: true }}
        >
          Monitor real-time changes in compliances and make informed business decisions. Stay ahead in the ever-evolving race of keeping up with all business regulations.
        </motion.p>
      </motion.div>
    </section>
  );
}
