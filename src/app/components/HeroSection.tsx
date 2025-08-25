"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";
import DemoButton from "./DemoButton";

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
    <div className="min-w-full h-full md:px-4 relative">
      <section className="min-w-full h-full flex flex-col bg-[#F6F6F6] items-center justify-center rounded-[24px] px-4 mt-4 relative overflow-hidden">
        {/* Top-right blur circle */}
        <div
          className="absolute right-[-148px] top-[-148px] bg-[#F35418] rounded-full filter blur-[172px] pointer-events-none z-5 
          w-[456px] h-[456px]
          sm:right-[-120px] sm:top-[-120px] sm:w-[360px] sm:h-[360px]
          xs:right-[-80px] xs:top-[-80px] xs:w-[240px] xs:h-[240px]"
        />

        {/* Bottom-left blur circle */}
        <div
          className="absolute left-[-148px] bottom-[-148px] bg-[#F35418] rounded-full filter blur-[172px] pointer-events-none z-5 
          w-[456px] h-[456px] 
          sm:left-[-120px] sm:bottom-[-120px] sm:w-[360px] sm:h-[360px] 
          xs:left-[-80px] xs:bottom-[-80px] xs:w-[240px] xs:h-[240px]"
        />

        <motion.div
          className="max-w-4xl w-full mx-auto text-center relative mt-14 px-2 sm:px-4 z-20"
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
        >
          <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-[48px] lg:text-[56px] leading-tight mb-6 relative">
            Stay Ahead of Every
            <br />
            Regulation, Effortlessly
          </h1>
          <p className="text-black text-sm sm:text-base md:text-[16px] mb-4 md:px-24" >
            Lexbolt transforms complex automotive regulations into clear,
            structured requirements so your team can act faster, stay compliant,
            and never miss a change.
          </p>

          <DemoButton onClick={() => setShowModal(true)} />
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
            src="/img/homebgnew.svg"
            alt="Dashboard Screenshot"
            className="w-full max-w-[900px] object-contain z-20"
          />
        </motion.div>

        {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      </section>
    </div>
  );
}
