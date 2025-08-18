"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";

interface RequestDemoModalProps {
  onClose: () => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-w-full h-full px-4">
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
            <br />— So Your Team Can Act Faster, Stay Compliant, And Never Miss
            A Change.
          </p>
       
          <div className="relative inline-flex items-center">
            <motion.button
              onClick={() => setShowModal(true)}
              className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-semibold px-2 md:pl-4 py-1 rounded-full shadow-lg hover:bg-primary/80 transition relative"
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
        {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      </section>
    </div>
  );
}
