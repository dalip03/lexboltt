"use client";

import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "../RequestDemoModal";
import TalkUs from "./talkusButton";
import RequestCall from "../RequestCallButton";

interface RequestDemoModalProps {
  onClose: () => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function ProductTalkUs() {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      className="md:w-[95%] relative bg-[#F6F6F6]/60 rounded-[32px] mx-auto mt-14 md:p-6 md:px-12 flex flex-col items-center"
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={fadeUp.transition}
    >
      <div className="w-full md:max-w-6xl  px-4 py-10 text-center overflow-hidden flex flex-col items-center justify-center more ">
        {/* Top left dots image */}
        <div className="absolute left-0 top-0 pointer-events-none select-none z-10 hidden md:block rounded-t-[32px] overflow-hidden">
          <img
            src="/product/talkus2.svg"
            alt="Decorative Shape"
            className="w-24 h-auto md:w-28"
          />
        </div>

        {/* Bottom right shapes image */}
        <div className="absolute right-0 bottom-0 pointer-events-none select-none z-10 hidden md:block rounded-[32px] overflow-hidden">
          <img
            className="w-24 h-auto md:w-56"
            src="/product/talkus1.svg"
            alt="Decorative Shape"
          />
        </div>

        <div className="py-10">
          <h1 className="font-bold text-2xl md:text-[48px] text-black mb-2 max-w-3xl mx-auto leading-[1.1] tracking-tight">
            Compliance Should Accelerate Innovation, Not Slow It Down.
          </h1>

          <div className="flex gap-4 mt-6 w-full justify-center md:justify-center">
            {/* Contact Button */}
            <RequestCall onClick={() => setShowModal(true)}/>
            <TalkUs />
          </div>
        </div>
      </div>
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </motion.section>
  );
}
