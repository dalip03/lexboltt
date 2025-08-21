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
    <section className="w-full  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-8 lg:pt-20 lg:pb-10">
      {/* Left Side - text area (wider on desktop) */}
      <motion.div
        className="lg:flex-[1.8] flex-1 flex flex-col items-start justify-center ml-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tag */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
        >
          Powering Fast Move
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          className="text-black font-bold text-2xl sm:text-3xl md:text-[64px] leading-tight mb-5"
          variants={textVariant}
        >
          Driven By Innovation <br />
          Built For Fast Regulations
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-black text-base mb-8 max-w-lg"
          variants={textVariant}
        >
          Seamlessly manage deliveries with real-time tracking, cost-effective
          rates, and unmatched reliability across the globe
        </motion.p>

        {/* CTA Button + Icon */}
        <motion.div className="flex items-center gap-7" variants={textVariant}>
          <div className="relative inline-flex items-center">
            <motion.button
              onClick={() => setShowModal(true)}
              className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-semibold px-1 md:pl-4 pl-4 py-1 rounded-full shadow-lg hover:bg-primary/80 transition relative"
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

      {/* Right Side - Dashboard/Image area (less wide on desktop) */}
      <motion.div
        className="lg:flex-1 flex-1 flex  w-full "
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/about/aboutHero.svg"
          alt="Dashboard"
          width={440}
          height={390}
          className="rounded-xl object-cover w-full max-w-[420px] md:max-w-[440px] lg:max-w-[420px] xl:max-w-[420px]"
          priority
        />
      </motion.div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
