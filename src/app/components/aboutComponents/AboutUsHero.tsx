'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsHero() {
  return (
    <section className="w-full min-h-[380px] flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pl-4 pt-8 lg:pt-20 lg:pb-10 mx-auto max-w-[1200px] ">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3"
        >
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow">
            Powering fast moves
          </span>
        </motion.div>
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-black font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
        >
          Driven By Innovation <br />
          Built For Fast Regulations
        </motion.h1>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-gray-500 text-base mb-8 max-w-lg"
        >
          Seamlessly manage deliveries with real-time tracking, cost-effective rates, and unmatched reliability across the globe
        </motion.p>
        {/* CTA Button + Icon */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="flex items-center gap-7"
        >
          <button className="flex items-center gap-2 bg-[#FF6B00] text-white px-7 py-2.5 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base">
            Get a Demo
            <span className="ml-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M16 12H4m12 0l-5-5m5 5l-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Right Side - Dashboard Image */}
      <motion.div
        className="flex-1 flex justify-center items-center w-full"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/about/aboutHero.svg"
          alt="Dashboard"
          width={440}
          height={390}
          className="rounded-xl object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
