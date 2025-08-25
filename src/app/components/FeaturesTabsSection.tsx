"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";

const features = [
  {
    label: "Regulations",
    icon: "/img/file.svg",
    title: "Upload Any Regulation",
    desc: "Simply drop in documents from regulatory bodies or relevant authorities Lexbolt automatically parses them and generates a detailed list of all compliance requirements your project must meet, from the smallest procedural rules to major legal mandates.",
    bullets: [
      "We operate like insiders, not vendors",
      "We think in systems  not deliverables",
      "We balance architecture and execution",
      "We bring delivery ownership, not advisory slides",
      "We make governance a habit, not an audit",
    ],
    image: "/about/abouts4.svg",
  },
  {
    label: "Control",
    icon: "/img/file.svg",
    title: "Total Control",
    desc: "Take charge of your regulatory process end-to-end with full visibility.",
    bullets: [
      "Automate key controls",
      "Real-time notifications",
      "Customizable alerts",
    ],
    image: "/about/abouts2.svg",
  },
  {
    label: "Compliance",
    icon: "/img/file.svg",
    title: "Ensure Compliance",
    desc: "Stay compliant with continuous updates and AI validation.",
    bullets: [
      "Automatic compliance checks",
      "Up-to-date with latest requirements",
    ],
    image: "/about/abouts3.svg",
  },
  {
    label: "Compatible",
    icon: "/img/file.svg",
    title: "Compatible Workflows",
    desc: "Push requirements into your ALM, PLM, workflow and spreadsheet tools.",
    bullets: ["Seamless integrations", "Exports to tickets and sheets"],
    image: "/about/abouts1.svg",
  },
  {
    label: "Security",
    icon: "/img/file.svg",
    title: "Enterprise-grade Security",
    desc: "Your data is fully secure, encrypted at rest and in transit.",
    bullets: ["SOC2, HIPAA ready", "Role-based access"],
    image: "/about/abouts5.svg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeOut },
};

const FeaturesTabsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full mx-auto pb-20 px-4 sm:px-12 lg:px-20 ">
      {/* Subtitle & Heading */}
      <motion.div
        className="flex flex-col items-center mb-10"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
        >
          Why Choose Us?
        </motion.span>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-[56px]  max-w-6xl text-center leading-tight mb-4">
          Features & Benefits
        </h2>
        <p className="text-black text-center text-sm sm:text-base md:text-[16px] max-w-4xl mx-auto">
          #1 Software for managing all your regulations in one place
        </p>
      </motion.div>

      {/* Tab buttons */}
      <motion.div
        className="flex flex-nowrap justify-center items-center w-full gap-2 mb-20 overflow-x-auto no-scrollbar "
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
      >
        {features.map((feat, i) => (
          <button
            key={feat.label}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-[95px] sm:w-[110px] cursor-pointer md:w-[120px] py-2 px-1 text-[15px] rounded-lg font-semibold transition
        flex justify-center items-center
        ${
          active === i
            ? "bg-[#F35418] text-white shadow"
            : "bg-white text-black font-bold border border-gray-200 hover:bg-[#F35418] hover:text-white"
        }`}
          >
            {feat.label}
          </button>
        ))}
      </motion.div>

      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Content */}
      <motion.div
  className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-center max-w-6xl mx-auto px-4"
  initial={fadeUp.initial}
  whileInView={fadeUp.whileInView}
  viewport={fadeUp.viewport}
  transition={{ ...fadeUp.transition, delay: 0.2 }}
>
  {/* Left: Image/Card */}
  <div className="flex-1 w-full flex justify-center">
    <div className="bg-[#FFF3ED] rounded-3xl w-full max-w-xl flex items-center justify-center p-6">
      <img
        src={features[active].image}
        alt={features[active].label}
        className="w-full h-auto max-h-[360px] object-contain"
      />
    </div>
  </div>

  {/* Right: Details */}
  <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
    {/* Icon + Title */}
    <div className="flex items-center gap-3 mb-4">
      <img
        src="/img/fileicons.svg"
        alt="icon"
        className="w-10 h-10 hidden md:block"
      />
      <h2 className="font-extrabold text-2xl md:text-3xl text-black">
        {features[active].title}
      </h2>
    </div>

    {/* Description */}
    <p className="text-black text-sm md:text-base mb-4 max-w-lg">
      {features[active].desc}
    </p>

    {/* Bullets */}
    <ul className="space-y-3 max-w-lg">
      {features[active].bullets.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start gap-2 text-base text-black"
        >
          <img src="/img/orangestar.svg" alt="*" className="w-4 h-4 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</motion.div>

    </section>
  );
};

export default FeaturesTabsSection;
