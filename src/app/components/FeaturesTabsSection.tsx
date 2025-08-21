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
    image: "/about/abouts1.svg",
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
    image: "/about/abouts4.svg",
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
    <section className="w-full max-w-6xl mx-auto py-16 px-2">
      {/* Subtitle & Heading */}
      <motion.div
        className="flex flex-col items-center mb-8"
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
        <h2 className="font-bold text-2xl md:text-[64px] text-black mb-2 text-center">
          Features & Benefits
        </h2>
        <p className="text-black text-center text-xl md:max-w-xl mx-auto">
          #1 Software for managing all your regulations in one place
        </p>
      </motion.div>
      <motion.div
        className="flex flex-nowrap justify-center gap-3 mb-12 overflow-x-auto no-scrollbar"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
      >
        {features.map((feat, i) => (
          <button
            key={feat.label}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-[156px] py-[18px] hover:bg-[#F35418] hover:text-white cursor-pointer px-[16px] flex flex-col justify-center items-center gap-[20px] rounded-[12px] font-semibold text-base transition ${
              active === i
                ? "bg-[#F35418] text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
            style={
              active === i
                ? {
                    boxShadow: "0 54.479px 64.093px 0 rgba(205,205,205,0.16)",
                  }
                : {}
            }
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
        className="flex flex-col md:flex-row gap-8 justify-center items-stretch"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
      >
        {/* Left: Image/Card */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#FFF3ED] rounded-2xl shadow w-full max-w-[552px] min-h-[296px] flex flex-col items-center justify-center">
            <img
              src={features[active].image}
              alt={features[active].label}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Right: Details */}
        <div className="flex flex-row gap-4 justify-center items-center md:items-start px-4 md:px-0 text-center md:text-left">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-[#FF5C1A] rounded-full">
              <img src={features[active].icon} alt="" className="w-6 h-6" />
            </span>
            <div>
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start w-full max-w-md mx-auto md:mx-0">
           
            <span className="font-bold text-xl text-black">
              {features[active].title}
            </span>
          </div>
          <p className="text-black mb-5 px-2 md:pr-20 max-w-md">
            {features[active].desc}
          </p>
          <ul className="mt-2 space-y-2 max-w-md mx-auto md:mx-0">
            {features[active].bullets.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-black text-base justify-center md:justify-start"
              >
                <img src="/img/orangestar.svg" alt="*" className="w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesTabsSection;
