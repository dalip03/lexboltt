"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";

const steps = [
  {
    title: "Upload Any Regulation",
    desc: "Drop in documents from applicable regulatory bodies or relevant authorities.",
    icon: "/icons/file.svg",
    image: "/img/process1.svg",
  },
  {
    title: "AI Parses Key Requirements",
    desc: "We extract obligations, test procedures, effective dates, and more down to the clause level.",
    icon: "/icons/search.svg",
    image: "/img/process1.svg",
  },
  {
    title: "Track What’s Changed",
    desc: "Compare versions side by side. Get notified of new amendments, deleted text, and reworded requirements.",
    icon: "/icons/doc.svg",
    image: "/img/process1.svg",
  },
  {
    title: "Export & Assign",
    desc: "Push structured requirements directly into your workflows PLM, ALM, spreadsheets, or tickets.",
    icon: "/icons/doc.svg",
    image: "/img/process1.svg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.25, once: true },
  transition: { duration: 0.6, ease: easeOut },
};

const ProcessStepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6">
      {/* Headings */}
      <motion.div
        className="flex flex-col items-center mb-6 px-2"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
      >
        <span className="text-[#FF8C51] border border-[#FF8C51] rounded-full px-5 py-1 text-sm font-medium mb-4 whitespace-nowrap">
          Our Process
        </span>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 text-center font-sans leading-tight max-w-[350px] sm:max-w-xl">
          From Law to
          <br />
          Launch — in 4 Steps
        </h1>
        <p className="text-gray-600 mb-10 text-center font-sans text-sm sm:text-base max-w-[400px] sm:max-w-lg">
          #1 Software for managing all your regulations in one place
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
      >
        {/* Left: Steps */}
        <div className="flex flex-col gap-4 w-full md:w-80 overflow-x-auto md:overflow-visible no-scrollbar md:max-w-none px-2 md:px-0">
          {steps.map((step, i) => (
            <motion.button
              key={step.title}
              onClick={() => setActiveStep(i)}
              layout
              className={`flex items-center gap-3 w-full rounded-xl transition text-left px-4 py-2 md:px-6 md:py-4 cursor-pointer ${
                activeStep === i
                  ? "cursor-pointer"
                  : "shadow-none bg-transparent"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span
                className={`rounded-full inline-flex items-center justify-center w-14 h-12 border border-[#FFE1D0] transition ${
                  activeStep === i ? "bg-primary" : "bg-[#FFF3ED]"
                }`}
              >
                <img
                  src={step.icon}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </span>
              <div>
                <div
                  className={`font-bold text-base font-sans mb-1 ${
                    activeStep === i ? "text-black" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-gray-500 text-sm font-sans max-w-[200px] sm:max-w-[300px]">
                  {step.desc}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        {/* Right: Image/Card */}
        <motion.div
          className="flex-grow flex items-center justify-center min-h-[220px] sm:min-h-[280px]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
        >
          <img
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            className="rounded-2xl max-h-[220px] sm:max-h-[320px] max-w-full object-contain"
          />
        </motion.div>
      </motion.div>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProcessStepsSection;
