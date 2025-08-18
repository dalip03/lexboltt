"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import RequestDemoModal from "../RequestDemoModal";
import { useState } from "react";

export default function AboutUsHero() {
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
    <section className="w-full min-h-[380px] flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pl-4 pt-8 lg:pt-20 lg:pb-10 mx-auto max-w-[1200px]">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tag */}
        <motion.div className="mb-3" variants={textVariant}>
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow">
            Powering fast moves
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-black font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
          variants={textVariant}
        >
          Driven By Innovation <br />
          Built For Fast Regulations
        </motion.h1>

        {/* Subheading */}
        <motion.p className="text-gray-500 text-base mb-8 max-w-lg" variants={textVariant}>
          Seamlessly manage deliveries with real-time tracking, cost-effective rates, and unmatched reliability across the globe
        </motion.p>

        {/* CTA Button + Icon */}
        <motion.div className="flex items-center gap-7" variants={textVariant}>
          <div className="relative inline-flex items-center">
                    <motion.button
                    onClick={() => setShowModal(true)}
                      className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-semibold px-1 md:pl-4 py-1 rounded-full shadow-lg hover:bg-primary/80 transition relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                     Get a Demo
                      <span className="ml-2 flex-shrink-0">
                        <img
                          src="/img/arrowrighticonwhite.svg"
                          alt="Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </span>
                    </motion.button>
                  </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Dashboard Image */}
      <motion.div
        className="flex-1 flex justify-center items-center w-full"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/about/aboutHero.svg"
          alt="Dashboard"
          width={440}
          height={390}
          className="rounded-xl object-cover"
          priority
        />
      </motion.div>
                    {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      
    </section>
  );
}
