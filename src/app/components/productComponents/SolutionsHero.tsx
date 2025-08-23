"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RequestDemoModal from "../RequestDemoModal";

export default function SolutionsHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full max-w-screen-xl mx-auto pt-12 pb-10 px-4 flex flex-col items-center">
      {/* Tag */}
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="inline-block border border-gray-200 text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-full font-semibold mb-3"
      >
        Our Solutions
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.09 }}
        className="text-black font-bold text-3xl sm:text-4xl md:text-[56px]  text-center mb-2 leading-tight max-w-4xl"
      >
        Industry Leading Solutions
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-[#2E2E2E] text-center mb-5 sm:mb-8 max-w-2xl text-sm sm:text-base md:text-[18px] "
      >
        Lexbolt delivers smart and efficient regulations solutions, combining
        technology and expertise to simplify shipping products from low to
        launch for businesses
      </motion.p>

      {/* Central image with orange shadow beneath */}
      <motion.div
        className="w-full flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.22 }}
      >
        {/* Orange shadow effect */}
        <div
          className="
            absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2
            w-[220px] h-[80px]
            sm:w-[280px] sm:h-[100px]
            md:w-[420px] md:h-[350px]
            lg:w-[590px] lg:h-[500px]
            rounded-full blur-2xl opacity-30
          "
          style={{
            background:
              "radial-gradient(ellipse at center, #FC7D3F 40%, transparent 85%)",
          }}
        />
        <img
          src="/product/productWheel.png"
          alt="Solutions Diagram"
          className="
            relative
            w-[280px] h-[280px]
            sm:w-[320px] sm:h-[320px]
            md:w-[370px] md:h-[370px]
            lg:w-[420px] lg:h-[420px]
            xl:w-[520px] xl:h-[520px]
            2xl:w-[620px] 2xl:h-[620px]
            object-cover
          "
        />
      </motion.div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
