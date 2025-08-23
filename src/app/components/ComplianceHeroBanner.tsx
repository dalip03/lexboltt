"use client";
import React, { useState } from "react";
import { easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";
import ContactButton from "./ContactButton";

interface RequestDemoModalProps {
  onClose: () => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function ComplianceHeroBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="md:w-[95%] relative bg-[#F6F6F6]/60 rounded-[32px] mx-auto mt-14 md:p-6 md:px-12 flex flex-col items-center">
      <div className="w-full md:max-w-6xl  px-4 py-10 text-center overflow-hidden flex flex-col items-center justify-center more ">
        {/* Top left dots image */}
        <div className="absolute left-0 top-0 pointer-events-none select-none z-10 hidden md:block">
          <img
            src="/img/dots.svg"
            alt="Decorative Shape"
            style={{ display: "block" }}
          />
        </div>

        {/* Bottom right shapes image */}
        <div className="absolute right-0 bottom-0   pointer-events-none select-none z-10 hidden md:block">
          <img
            className="rounded-2xl"
            src="/img/decorative.svg"
            alt="Decorative Shape"
            style={{ display: "block" }}
          />
        </div>

        <h1 className="font-extrabold text-2xl md:text-[48px] text-black mb-2 leading-tight max-w-4xl mx-auto">
          Transform your{" "}
          <span className="bg-primary text-white px-3 cursor-pointer py-1 rounded-md text-2xl md:text-[48px] font-extrabold inline-block">
            Compliance
          </span>{" "}
          From
          <br />
          reactive to proactive.
        </h1>
        <p className="text-black md:text-[18px] text-md font-medium mb-7 mt-2 md:px-12 max-w-2xl mx-auto">
          Lexbolt Is Hub For Managing All Regulations Professionally And <br />
          Efficiently
        </p>
        {/* Contact Button */}
      <ContactButton/>
      </div>
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
