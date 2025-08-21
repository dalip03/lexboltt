"use client";

import { motion, easeOut } from "framer-motion";
import DemoButton from "../DemoButton";
import { useState } from "react";
import RequestDemoModal from "../RequestDemoModal";

export default function ProductHero() {
  const [showModal, setShowModal] = useState(false);

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
    <section className="w-full max-w-6xl mx-auto pt-12 pb-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-14">
      {/* Left side: Headline & text */}
      <motion.div
        className="flex-[1.4] flex flex-col text-center md:text-start md:justify-center md:items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-black font-extrabold text-2xl sm:text-3xl md:text-[48px] lg:text-[64px] mb-3 leading-tight"
          variants={textVariant}
        >
          Powering the Future <br />
          <span className="relative inline-block">
            of{" "}
            <span className="text-black">
              Regulations
            </span>
          </span>
        </motion.h1>
        <motion.p
          className="text-black mt-2 text-base md:text-xl mb-8 md:pr-36"
          variants={textVariant}
        >
          LexBolt is more than software it&apos;s an intelligent assistant for your compliance team.
        </motion.p>

        {/* Responsive DemoButton wrapper */}
        <div className="w-full max-w-xs mx-auto md:mx-0 mb-8">
          <DemoButton onClick={() => setShowModal(true)} />
        </div>
      </motion.div>

      {/* Right side: Product image */}
      <motion.div
        className="flex-1 flex items-end justify-end w-full"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/product/products1.svg"
          alt="Product Dashboard"
          className="w-full max-w-[320px] md:max-w-[410px] h-auto rounded-3xl object-cover"
        />
      </motion.div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
