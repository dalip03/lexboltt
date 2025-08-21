"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

const steps = [
  {
    title: "Upload Any Regulation",
    desc: "Drop in documents from applicable regulatory bodies or relevant authorities.",
    icon: "/img/fileicons.svg",
    image: "/img/upload.svg",
  },
  {
    title: "AI Parses Key Requirements",
    desc: "We extract obligations, test procedures, effective dates, and more down to the clause level.",
    icon: "/img/searchicons.svg",
    image: "/img/searchai.svg",
  },
  {
    title: "Track What’s Changed",
    desc: "Compare versions side by side. Get notified of new amendments, deleted text, and reworded requirements.",
    icon: "/img/docicons.svg",
    image: "/img/trackchanged.svg",
  },
  {
    title: "Export & Assign",
    desc: "Push structured requirements directly into your workflows PLM, ALM, spreadsheets, or tickets.",
    icon: "/img/docicons.svg",
    image: "/img/export.svg",
  },
];

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const imageFade = {
  hidden: { opacity: 0, y: 100, scale: 0.95 }, // comes from down
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function ProcessStepsSection() {
  return (
    <section className="w-full mx-auto py-14 px-4 md:px-8">
      {/* Headings */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
      >
        Our Process
      </motion.span>
        <h1 className="font-bold text-2xl md:text-[64px] mb-3 text-center leading-tight max-w-xl">
          From Law to <br /> Launch in 4 Steps
        </h1>
        <p className="text-black mb-6 text-center text-sm sm:text-xl max-w-lg">
          #1 Software for managing all your regulations in one place
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-4 mb-20  ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Text Card */}
            <motion.div
              className="rounded-2xl px-6 md:pl-20  py-5 flex items-start w-full md:w-1/2 "
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut, delay: idx * 0.2 }}
            >
              <img
                src={step.icon}
                alt=""
                className="w-10 h-10 mr-4 flex-shrink-0"
              />
              <div className="">
                <h3 className="font-extrabold text-xl text-black mb-1">
                  {step.title}
                </h3>
                <p className="text-black text-sm md:text-md">{step.desc}</p>
              </div>
            </motion.div>

            {/* Image */}
            <div className="relative w-full md:w-1/2 max-w-[600px] self-end flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#f8f2f1]" />
              <motion.img
                src={step.image}
                alt={step.title}
                className="rounded-2xl w-full h-full object-cover relative"
                variants={imageFade}
                transition={{ duration: 0.8, ease: easeOut, delay: idx * 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
