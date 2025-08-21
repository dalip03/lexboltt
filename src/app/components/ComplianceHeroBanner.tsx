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
    <section className="w-full relative bg-[#F6F6F6]/60 rounded-[32px]  mx-auto mt-14 p-6 md:p-12 flex flex-col md:flex-row gap-10 items-stretch">
      <div className=" w-full max-w-6xl px-4 py-10 text-center  overflow-hidden flex flex-col items-center content-center justify-center">
        {/* Top left dots image */}
        <div className="absolute left-0 top-0 pointer-events-none select-none z-10 hidden md:block ">
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

        <h1 className="font-extrabold text-xl  md:text-[48px] text-black mb-2 leading-tight ">
          Transform your
          <span className="bg-[#FF6600] text-white px-3 py-1 rounded-md text-xl md:text-[48px] font-extrabold inline-block">
            Compliance
          </span>
          From
          <br />
          reactive to proactive.
        </h1>
        <p className="text-black md:text-xl  text-lg font-medium mb-7 mt-2 md:px-12">
          Lexbolt Is Hub For Managing All Regulations Professionally And <br />
          Efficiently
        </p>

   {/* Contact Button */}
        <Link href="/contact" passHref>
          <button
            className="flex items-center gap-2 bg-[#FF6600] hover:bg-[#e75d00] transition text-white px-6 py-3 rounded-full font-semibold shadow text-sm sm:text-base"
          >
            Contact us
            <span>
              <img
                src="/product/right.svg"
                alt="Arrow Right"
                className="w-6 h-6 object-contain"
              />
            </span>
          </button>
        </Link>      </div>
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
