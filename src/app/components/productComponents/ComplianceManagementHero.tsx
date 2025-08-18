'use client';

import { motion } from "framer-motion";
import RequestDemoModal from "../RequestDemoModal";
import { useState } from "react";

export default function ComplianceManagementHero() {
  const features = [
    "Expert-Curated Model",
    "Seamless Export",
    "Interactive System",
    "Flexible Management",
    "24/7 Access to Support",
    "Diverse Use Cases",
  ];
      const [showModal, setShowModal] = useState(false);
  

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left side: Single image with experience badge */}
      <motion.div
        className="flex-1 flex justify-end items-end relative w-full"
        initial={{ opacity: 0, scale: 0.9, x: -30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="/product/producttransform.png"
          alt="Consultant"
          className="w-[90vw] max-w-[350px] md:max-w-[420px] h-[60vw] md:h-[420px] rounded-3xl object-cover"
        />
      </motion.div>
      {/* Right side: Text */}
      <motion.div
        className="flex-1 flex flex-col items-start md:pl-10"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block bg-[#fde8e5] text-[#fc7e41] font-semibold text-xs px-3 py-1 mb-3 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Transform Regulations
        </motion.span>
        <motion.h1
          className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-1 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
        >
          Unlock Compliance
          <br />
          Management
        </motion.h1>
        <motion.span
          className="text-gray-600 text-lg mb-4 font-medium"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          viewport={{ once: true }}
        >
          Like Never Before
        </motion.span>
        {/* Features Box */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 bg-white border border-gray-200 rounded-2xl p-5 mb-7 w-full max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          viewport={{ once: true }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center gap-2 text-[16px] text-gray-700"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              viewport={{ once: true }}
            >
              <img src="/product/check.svg" alt="" className="w-5 h-5" />
              {feature}
            </motion.div>
          ))}
        </motion.div>
        {/* Explore Button */}
        <motion.button
          className="flex items-center gap-2 bg-primary text-white pl-7 px-1 py-2 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          viewport={{ once: true }}
          onClick={() => setShowModal(true)}
        >
          Explore
          <span className="ml-2">
            <img
              src="/product/right.svg"
              alt="Arrow Right"
              className="w-10 h-10 object-contain"
            />
          </span>
        </motion.button>
      </motion.div>
              {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      
    </section>
  );
}
