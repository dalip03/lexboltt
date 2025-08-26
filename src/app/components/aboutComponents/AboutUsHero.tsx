"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import RequestDemoModal from "../RequestDemoModal";
import { useState } from "react";
import DemoButton from "../DemoButton";

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
    <section className="w-full mx-auto flex flex-col-reverse md:pl-20 lg:flex-row items-center justify-between gap-6 sm:gap-10 pt-8 lg:pt-20 lg:pb-10">
      {/* Left Side - text area */}
      <motion.div
        className="flex-1 lg:flex-[1.8]  flex flex-col items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        

        {/* Main Heading */}
        <motion.h1
          className="text-black font-bold text-2xl sm:text-3xl md:text-[48px] lg:text-[56px]   leading-tight mb-5"
          variants={textVariant}
        >
          Driven By Innovation <br />
          Built For Fast Regulations
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-black text-sm sm:text-base md:text-lg mb-8 max-w-lg"
          variants={textVariant}
        >
          Regulations are evolving faster than ever. For automotive OEMs and
          suppliers, ensuring compliance across markets is both mission-critical
          and resource-intensive.<span className="font-semibold"> LexBolt exists to change that.</span>
        </motion.p>

        {/* CTA Button + Icon */}
        <DemoButton onClick={() => setShowModal(true)} />
      </motion.div>

      {/* Right Side - Dashboard/Image area */}
      <motion.div
        className="flex-1 w-full flex justify-center lg:justify-end"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/img/abouthero2.png"
          alt="Dashboard"
          width={440}
          height={390}
          className="rounded-xl object-cover w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px]"
          priority
        />
      </motion.div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
