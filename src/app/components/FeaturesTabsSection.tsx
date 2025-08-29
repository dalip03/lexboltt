"use client";
import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const features = [
  {
    label: "Regulations",
    icon: "/img/file.svg",
    title: "Upload Any Regulation",
    subtitle: "AI-Powered Document Intelligence",
    desc: "Upload standards, directives, or homologation files -from UNECE to ISO. LexBolt automatically interprets and structures them into actionable compliance requirements, from high-level mandates to clause-level rules.",
    bullets: [
      "Works with global standards (ISO, UNECE, IATF, ASPICE, FMVSS, GB/T)",
      "Structured outputs: requirements, tests, references",
      "Zero manual tagging or keyword hunting",
    ],
    image: "/about_assets/abouts4.svg",
  },
  {
    label: "Control",
    icon: "/img/file.svg",
    title: "Total Control",
    subtitle: "End-to-End Compliance Visibility",
    desc: "Gain complete oversight of your regulatory landscape. Monitor every clause, update, and validation in one intelligent dashboard.",
    bullets: [
      "Automated controls with audit trail",
      "Real-time notifications and alerts",
      "Configurable dashboards for teams",
    ],
    image: "/about_assets/abouts2.svg",
  },
  {
    label: "Compliance",
    icon: "/img/file.svg",
    title: "Ensure Compliance",
    subtitle: "Continuous AI Validation",
    desc: "Stay ahead of evolving regulations with proactive compliance checks and auto-updated requirements.",
    bullets: [
      "Automatic validation against latest revisions",
      "Multi-market regulation tracking",
      "Clause-to-component verification",
    ],
    image: "/about_assets/abouts3.svg",
  },
  {
    label: "Compatible",
    icon: "/img/file.svg",
    title: "Compatible Workflows",
    subtitle: "Integrate Where You Work",
    desc: "Push requirements directly into your engineering and compliance workflows. No disruption just smarter pipelines.",
    bullets: [
      "Connect to ALM / PLM / ERP systems",
      "Export to JIRA, Azure DevOps, and spreadsheets",
      "API-ready for custom integrations",
    ],
    image: "/about_assets/abouts1.svg",
  },
  {
    label: "Security",
    icon: "/img/file.svg",
    title: "Enterprise-grade Security",
    subtitle: "Secure. Scalable. Audit-Ready.",
    desc: "Built with the rigor of enterprise security frameworks, ensuring your data remains protected across regions and teams.",
    bullets: [
      "Data encrypted at rest & in transit",
      "Role-based access controls",
      "•	SOC2 & ISO27001-ready architecture",
    ],
    image: "/about_assets/abouts5.svg",
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
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-[56px]  max-w-6xl text-center leading-tight mb-4">
          Features & Benefits
        </h2>
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
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-center max-w-6xl mx-auto md:px-4"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
      >
        {/* Left: Image/Card */}
        <div className="flex-1 w-full flex justify-center">
          <div className="bg-[#FFF3ED] rounded-3xl w-full max-w-xl flex items-center justify-center">
            <Image
              src={features[active].image}
              alt={features[active].label}
              width={800}
              height={360}
              className="w-full h-auto max-h-[360px] object-contain"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/img/fileicons.svg"
              alt="icon"
              width={40} // w-8 = 32px
              height={40} // h-8 = 32px
              className=" hidden md:block"
            />
            <div>
              <h2 className="font-extrabold text-2xl md:text-3xl text-black">
                {features[active].title}
              </h2>
            </div>
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
                className="flex items-start text-start gap-2 text-base text-black"
              >
                <Image
                  src="/img/orangestar.svg"
                  alt="*"
                  width={16}
                  height={16}
                  className=" mt-1"
                />
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
