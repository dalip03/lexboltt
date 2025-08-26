"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Smarter Document Intelligence ",
    desc: "Go beyond keyword search with semantic AI tuned for ISO, UNECE, ASPICE, and OEM standards.",
    icon: "/img/fileicons.svg",
    image: "/img/upload.svg",
  },
  {
    title: "Component-Level Traceability ",
    desc: "Connect vehicle specs directly with applicable clauses and thresholds.",
    icon: "/img/searchicons.svg",
    image: "/img/searchai.svg",
  },
  {
    title: "Instant Regulatory Comparisons ",
    desc: "Old vs new revisions, or multi-market standards side by side.",
    icon: "/img/docicons.svg",
    image: "/img/trackchanged.svg",
  },
  {
    title: "Audit-Ready Summaries ",
    desc: "Generate structured tables of requirements, tests, and interpretations you can trust.",
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
    <section className="w-full mx-auto py-10 px-4 md:px-8 ">
      {/* Headings */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
     
        <h1 className="font-bold text-2xl md:text-[56px] mb-3 text-center leading-tight max-w-xl mt-6">
          Upload. Interpret. Compare. Validate. 
        </h1>
        <p className="text-black mb-6 text-center text-sm sm:text-[16px] max-w-xl">
          Compliance simplified for Engineering, NPD, Regulations and Homologation teams.
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
              <Image
                src={step.icon}
                alt="icon"
                width={40} // w-10 = 40px
                height={40} // h-10 = 40px
                className="mr-4 flex-shrink-0"
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
