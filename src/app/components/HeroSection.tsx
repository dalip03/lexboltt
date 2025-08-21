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
    <div className="min-w-full h-full px-4 relative">
      <section className="min-w-full h-full flex flex-col bg-[#F6F6F6] items-center justify-center rounded-[24px] px-4 mt-4 relative overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "456px",
            height: "456px",
            right: "-148px",
            top: "-148px",
            background: "#F35418",
            borderRadius: "456px",
            filter: "blur(172px)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* (Optional) Add a similar effect to bottom-left for symmetry */}

        <div
          className="absolute"
          style={{
            width: "456px",
            height: "456px",
            left: "-148px",
            bottom: "-148px",
            background: "#F35418",
            borderRadius: "456px",
            filter: "blur(172px)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        <motion.div
          className="max-w-4xl w-full mx-auto text-center relative mt-12 px-2 sm:px-4 z-20"
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
        >
          <h1 className="font-bold text-black text-2xl md:text-[64px] leading-tight mb-6 relative">
            Stay Ahead of Every
            <br />
            Regulation, Effortlessly
          </h1>
          <p className="text-black text-xs md:text-xl mb-4">
            LexBolt Transforms Complex Automotive Regulations Into Clear,
            Structured Requirements So Your Team Can Act Faster, Stay Compliant,
            And Never Miss A Change.
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
            className="w-full max-w-[900px] object-contain z-50"
          />
        </motion.div>

        {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      </section>
    </div>
  );
}
