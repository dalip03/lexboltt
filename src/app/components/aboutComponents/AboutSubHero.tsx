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
    <section className="w-full max-w-screen-3xl mx-auto md:pt-8 md:px-20 pb-10 px-4 sm:px-8 md:my-20 mt-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col gap-12">
        {/* Heading and Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
          <div className="text-center md:text-start">
           
            <motion.h2
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className="text-2xl md:text-[64px] font-bold text-black mb-1 self-center md:text-start "
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="max-w-xl text-black text-sm md:text-sm md:mt-0 mt-2 md:text-end text-center px-4 md:px-0"
          >
            At Lexbolt, we blend advanced AI with real-world automotive compliance to deliver faster, smarter regulatory workflows. From instant document parsing to proactive change tracking and integration into your engineering tools, everything we build is designed to move your team forward efficiently and compliantly.
          </motion.div>
        </div>

        {/* Row 1: Workshops + Co-created */}
        <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1.6fr] gap-3 items-start">
          {/* Card 1 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="w-full flex flex-col"
          >
            <Image
              src="/about_assets/history1.svg"
              width={500}
              height={240}
              alt="Workshop diagram"
              className="object-cover w-full h-[180px] md:h-[240px] rounded-t-3xl"
            />
            <div className="bg-[#F9F9F9] pb-2 rounded-b-2xl px-3">

           
            <h3 className="text-xl font-bold text-black mb-1 mt-2 text-center md:text-start">
              From workshops to working solution
            </h3>
            <p className="text-black text-sm text-center md:text-start">
              Lexbolt began as a hands-on collaboration with OEM teams and homologation/regulatory experts. Through multiple working sessions and reviews, we shaped a tool that turns dense automotive standards into clear, structured outputs.
            </p>
             </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="w-full flex flex-col mt-4 md:mt-0 "
          >
            <Image
              src="/about_assets/history2.svg"
              width={500}
              height={240}
              alt="Car diagram"
              className="object-cover w-full h-[180px] md:h-[240px] rounded-t-3xl"
            />
            <div className="bg-[#F9F9F9] pb-2 rounded-b-2xl px-3">
            <h3 className="text-xl font-bold text-black mb-1 mt-2 text-center md:text-start">
              Co-created with OEM &amp; Homologation Experts
            </h3>
            <p className="text-black text-sm text-center md:text-start">
              Built with direct feedback from practitioners. The current feature set reflects real day-to-day tasks in automotive compliance: clause extraction.
            </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Automotive + Future (opposite ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_2.4fr] gap-3 items-start ">
          {/* Card 3 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="w-full flex flex-col bg-[#F9F9F9] rounded-3xl mt-4 md:mt-0"
          >
            <Image
              src="/about_assets/history3.svg"
              width={450}
              height={240}
              alt="Car diagram"
              className="object-cover w-full h-[180px] md:h-[280px] rounded-3xl"
            />
            <div className="bg-[#F9F9F9] pb-2 rounded-b-2xl px-3">
            <h4 className="text-xl font-bold mb-1 text-black pl-2 mt-2 text-center md:text-start">
              Automotive Focus
            </h4>
            <p className="text-black text-sm pl-2 pb-2 text-center md:text-start">
              Built with guidance from automotive regulations and standards like IATF and ISO, to make sure you are compliant.
            </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="w-full flex flex-col bg-[#F8F2F1] rounded-[24px] mt-4 md:mt-0"
          >
            <Image
              src="/about_assets/aboutsub1.png"
              width={550}
              height={240}
              alt="Platform"
              className="object-cover w-full h-[180px] md:h-[280px] rounded-t-3xl"
            />
            <div className="bg-[#F9F9F9] pb-2 rounded-b-2xl px-3">
            <h4 className="text-xl font-bold mb-1 text-black mt-2 text-center md:text-start">
              Built for the Future
            </h4>
            <p className="text-black text-sm text-center md:text-start">
              Version-aware, comparison-ready, and designed for traceability. LexBolt structures information so teams can compare revisions, link components to clauses, and maintain an audit-friendly trail as regulations evolve.
            </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
