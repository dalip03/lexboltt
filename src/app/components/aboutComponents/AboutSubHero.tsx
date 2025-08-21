"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.6 },
};

export default function OurJourney() {
  return (
    <section className="w-full max-w-screen-3xl mx-auto pt-8 pb-10 md:px-20 px-4 sm:px-20 my-20 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col gap-8">
        {/* Heading and Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
          <div>
            <motion.span
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
            >
              Lexbolt history
            </motion.span>
            <motion.h2
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className="text-2xl md:text-[64px] font-bold text-black mb-1"
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="max-w-xl text-gray-600 text-sm md:text-sm font-semibold md:mt-0 mt-2 text-end"
          >
            At LexBolt, we blend advanced AI with real-world automotive compliance to deliver faster, smarter regulatory workflows. From instant document parsing to proactive change tracking and integration into your engineering tools, everything we build is designed to move your team forward efficiently and compliantly.
          </motion.div>
        </div>

        {/* Row 2: Workshops + Co-created */}
        <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1.6fr] gap-2 items-start ">
          {/* Card 1 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="w-full flex flex-col "
          >
            <div className="w-full bg-white rounded-2xl flex items-center justify-center mb-3">
              <Image
                src="/about/history1.svg"
                width={500}
                height={120}
                alt="Workshop diagram"
                className="object-cover w-full h-[120px] md:h-[240px] rounded-2xl"
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-1">
              From workshops to working solution
            </h3>
            <p className="text-gray-500 text-sm font-semibold">
              LexBolt began as a hands-on collaboration with OEM teams and homologation/regulatory experts. Through multiple working sessions and reviews, we shaped a tool that turns dense automotive standards into clear, structured outputs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="w-full flex flex-col"
          >
            <div className="w-full bg-white rounded-2xl flex items-center justify-center mb-3">
              <Image
                src="/about/history2.svg"
                width={500}
                height={120}
                alt="Car diagram"
                className="object-cover w-full h-[180px] md:h-[240px] rounded-2xl "
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-1">
              Co-created with OEM &amp; Homologation Experts
            </h3>
            <p className="text-gray-500 text-sm font-semibold">
              Built with direct feedback from practitioners. The current feature set reflects real day-to-day tasks in automotive compliance: clause extraction, component linkage, comparison views, and explainable summaries.
            </p>
          </motion.div>
        </div>

        {/* Row 3: Businesses + Future */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-2 items-start">
          {/* Card 3 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="bg-white rounded-2xl p-4 flex flex-col items-center w-full"
          >
            <Image
              src="/about/history3.svg"
              width={450}
              height={170}
              alt="Car diagram"
              className="object-contain w-full h-[180px] md:h-[240px] rounded-2xl mb-3"
            />
            <h4 className="text-lg font-bold mb-1 text-black self-start">
              Automotive Focus
            </h4>
            <p className="text-gray-500 text-sm font-semibold">
              Built with guidance from automotive regulations and standards like IATF and ISO, to make sure you are compliant.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="bg-white rounded-2xl p-4 flex flex-col items-center w-full"
          >
            <Image
              src="/about/history4.svg"
              width={550}
              height={170}
              alt="Platform screenshot"
              className="object-cover w-full h-[120px] md:h-[240px] rounded-2xl mb-3"
            />
            <h4 className="text-lg font-bold mb-1 text-black self-start">
              Built for the Future
            </h4>
            <p className="text-gray-500 text-sm font-semibold">
              Version-aware, comparison-ready, and designed for traceability. LexBolt structures information so teams can compare revisions, link components to clauses, and maintain an audit-friendly trail as regulations evolve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
