"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";
import DemoButton from "./DemoButton";
import Link from "next/link";

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
    <section className="w-full relative bg-[#F6F6F6]/60 rounded-[32px] mx-auto mt-14 p-6 md:p-12 flex flex-col items-center gap-10">
      <div className="w-full max-w-6xl px-4 py-10 text-center overflow-hidden flex flex-col items-center justify-center more ">
        {/* Top left dots image */}
        <div className="absolute left-0 top-0 pointer-events-none select-none z-10 hidden md:block">
          <img
            src="/img/dots.svg"
            alt="Decorative Shape"
            style={{ display: "block" }}
          />
        </div>

        {/* Bottom right shapes image */}
        <div className="absolute right-0 bottom-0 pointer-events-none select-none z-10 hidden md:block">
          <img
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
        <p className="text-black md:text-xl text-lg font-medium mb-7 mt-2 md:px-12 max-w-2xl mx-auto">
          Lexbolt Is Hub For Managing All Regulations Professionally And <br />
          Efficiently
        </p>
        {/* Contact Button */}
        <Link href="/contact" passHref>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary transition text-white px-4 py-2 rounded-full font-semibold shadow text-sm sm:text-base mx-auto">
            Contact us
            <span>
              <img
                src="/product/right.svg"
                alt="Arrow Right"
                className="w-10 h-10 object-contain"
              />
            </span>
          </button>
        </Link>
      </div>
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
