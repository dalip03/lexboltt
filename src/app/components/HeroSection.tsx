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
    <div className="min-w-full h-full px-4 relative">
      <section
        className="min-w-full h-full flex flex-col items-center justify-center rounded-[24px] px-4 mt-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F35418 0%, #F35418 100%)",
        }}
      >
        {/* Right top corner image */}
        <img
          src="/img/herodiv.png" // replace with your actual image path
          alt="Top Right Decoration"
          className="absolute top-0 right-0 pointer-events-none select-none w-34 h-35 object-contain"
          style={{ zIndex: 10 }}
        />

        {/* Bottom left corner image */}
        <img
          src="/img/herodiv.png" // replace with your actual image path
          alt="Bottom Left Decoration"
          className="absolute bottom-0 rotate-180 left-0 pointer-events-none select-none w-34 h-35 object-contain"
          style={{ zIndex: 10 }}
        />

        <motion.div
          className="max-w-4xl w-full mx-auto text-center relative mt-12 px-2 sm:px-4 z-20"
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
            So Your Team Can Act Faster, Stay Compliant, And Never Miss A Change.
          </p>

          <div className="relative inline-flex items-center">
            <motion.button
              onClick={() => setShowModal(true)}
              className="flex items-center text-sm cursor-pointer gap-2 bg-white text-primary font-semibold px-1 md:pl-6 py-1 pl-4 rounded-full shadow-lg hover:bg-white transition relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get a Demo
              <span className="ml-2 flex-shrink-0">
                <img
                  src="/img/righticonorange.svg"
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
