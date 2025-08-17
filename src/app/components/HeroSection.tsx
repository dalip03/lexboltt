"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function HeroSection() {
  return (
    <section
      className="min-w-full h-full flex flex-col items-center justify-center rounded-[24px] px-4 mt-4"
      style={{
        background: "linear-gradient(180deg, #F35418 -28.38%, #FFF 133.01%)",
      }}
    >
      <motion.div
        className="max-w-4xl w-full mx-auto text-center relative mt-12 px-2 sm:px-4"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
      >
        <h1 className="font-sans font-bold text-white text-3xl sm:text-4xl leading-tight mb-6 relative">
          Stay Ahead of Every
          <br />
          Regulation, Effortlessly
        </h1>
        <p className="font-sans text-white/80 text-sm sm:text-base mb-4">
          LexBolt Transforms Complex Automotive Regulations Into Clear,
          Structured Requirements
          <br />
          — So Your Team Can Act Faster, Stay Compliant, And Never Miss A Change.
        </p>
        <motion.button
          className="bg-primary hover:bg-[#ff4e06] cursor-pointer text-white font-medium font-sans rounded-full px-8 py-3 text-lg shadow-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Request Demo
        </motion.button>
      </motion.div>

      {/* Dashboard image + Card overlay */}
      <motion.div
        className="relative flex justify-center w-full mt-6 px-2 sm:px-0"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <img
          src="/img/herobg.png"
          alt="Dashboard Screenshot"
          className="w-full max-w-[900px] object-contain"
        />
      </motion.div>
    </section>
  );
}
