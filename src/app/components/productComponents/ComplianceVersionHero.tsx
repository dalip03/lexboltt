'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import RequestDemoModal from "../RequestDemoModal";

export default function ComplianceVersionHero() {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="w-full mx-auto py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-2">
      {/* Left side: image */}
      <motion.div
        className="flex-1 flex items-center justify-center mt-10 lg:justify-start lg:mt-16 w-full"
        initial={{ opacity: 0, x: -40, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/product/productAnalyst.png"
          alt="Compliance Version Dashboard"
          className="w-[90vw] max-w-[340px] h-[220px] md:max-w-[460px] md:h-full rounded-2xl object-cover shadow-[0px_-14px_240px_-18px_rgba(252,125,63,0.37),146px_6px_240px_-12px_rgba(252,125,63,0.28)]"
        />
      </motion.div>
      {/* Right side: text and CTA */}
      <motion.div
        className="
          flex-1 flex flex-col items-center lg:items-start
          -mt-10 lg:-mt-16
          text-center lg:text-left
        "
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block bg-[#fde8e5] text-[#fc7e41] font-semibold text-xs px-3 py-1 mb-3 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          viewport={{ once: true }}
        >
          Analytics
        </motion.span>
        <motion.h1
          className="text-black font-bold text-2xl sm:text-4xl md:text-5xl mb-3 leading-tight"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          viewport={{ once: true }}
        >
          Smart Version Control
          <br />
          for Compliances
        </motion.h1>
        <motion.p
          className="text-gray-700 text-sm md:text-base mb-7 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.29 }}
          viewport={{ once: true }}
        >
          Monitor real-time changes in compliances and make informed business
          decisions. Stay ahead in the ever-evolving race of keeping up with all
          business regulations
        </motion.p>
          <div className="relative inline-flex items-center">
                    <motion.button
                      onClick={() => setShowModal(true)}
                      className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-semibold px-1 md:pl-6 pl-4 py-1 rounded-full shadow-lg hover:bg-primary/80 transition relative"
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
              {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      
    </section>
  );
}
