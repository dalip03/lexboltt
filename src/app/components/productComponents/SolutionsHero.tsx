"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RequestDemoModal from "../RequestDemoModal";
import Link from "next/link";

export default function SolutionsHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto pt-12 pb-10 px-4 flex flex-col items-center">
      {/* Tag */}
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold mb-3"
      >
        Our Solutions
      </motion.span>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.09 }}
        className="text-black text-3xl md:text-5xl font-bold text-center mb-2 leading-tight"
      >
        Industry Leading Solutions
      </motion.h1>
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-gray-600 text-center mb-5 sm:mb-8 max-w-2xl"
      >
        Lexbolt delivers smart and efficient regulations solutions, combining
        technology and expertise to simplify shipping products from low to
        launch for businesses
      </motion.p>
      {/* Buttons */}
      <motion.div
        className="flex gap-4 mb-7"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.19 }}
      >
        <Link href="/contact">
          <button className="flex items-center gap-2 bg-primary text-white pl-7 px-1 py-2 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base">
            Contact us
            <span className="ml-1">
              <img
                src="/product/right.svg"
                alt="Arrow Right"
                className="w-10 h-10 object-contain"
              />
            </span>
          </button>
        </Link>
        <motion.button
          onClick={() => setShowModal(true)}
          className="flex items-center cursor-pointer text-sm gap-2 bg-[#F354181A] text-[#FF5C1A] font-semibold px-1 md:pl-4 py-1 pl-4 rounded-full shadow-lg hover:bg-orange-100 transition relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Get a Demo
          <span className="ml-2 flex-shrink-0">
            <img
              src="/img/arrowrighticon.svg"
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
          </span>
        </motion.button>
      </motion.div>
      {/* Central image with orange shadow beneath */}
      <motion.div
        className="w-full flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.22 }}
      >
        {/* Orange shadow effect */}
        <div
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[330px] h-[110px] md:w-[590px] md:h-[500px] rounded-full blur-2xl opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, #FC7D3F 40%, transparent 85%)",
          }}
        />
        <img
          src="/product/productWheel.png"
          alt="Solutions Diagram"
          className="relative w-[365px] h-[365px] md:w-[420px] md:h-[420px] object-cover"
        />
      </motion.div>
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
