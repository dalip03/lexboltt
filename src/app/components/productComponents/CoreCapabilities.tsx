"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const capabilities = [
  {
    title: "AI-Powered Regulations Analyser",
    desc: "Standards like UNECE, ISO, IATF, and ASPICE processed into actionable insights.",
  },
  {
    title: "Semantic Insights Hub",
    desc: "Tabbed outputs that break down requirements into summaries, scenarios, thresholds, and implementation steps.",
  },
  {
    title: "Component Validation Engine",
    desc: "Instantly cross-check vehicle part specs against mandated clauses and tests.",
  },
  {
    title: "Comparative Intelligence",
    desc: "Spot differences across document versions or jurisdictions at a glance.",
  },
  {
    title: "Visual Interpretation",
    desc: "Extract and interpret diagrams, charts, and figures for compliance relevance.",
  },
  {
    title: "Dynamic Q&A",
    desc: "Ask natural-language questions, get precise, regulation-grounded answers.",
  },
  {
    title: "Regulation Lifecycle Tracking",
    desc: "Track revisions, deadlines, and enforcement timelines.",
  },
  {
    title: "Multi-Region Harmonization",
    desc: "Compare how a component is regulated across different geographies.",
  },
  {
    title: "Integrations",
    desc: "Connect with JIRA, SAP, or export to Cloud, or have Custom Integrations.",
  },
];
// Explicitly type variants as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    // Simplified transition to remove complex spring in single block
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function CoreCapabilities() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-14 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="inline-block text-xs font-medium text-[#444] border border-[#ddd] rounded-full px-5 py-1 mb-4">
          Lexbolt Advantages
        </span>
        <h2 className="text-3xl md:text-[56px] font-bold text-black">
          Core Capabilities
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[#FFF] flex flex-col justify-center items-start rounded-xl overflow-hidden"
            style={{
              height: 210,
              padding: "24px 16px",
              gap: 20,
              borderRadius: 12,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 18px rgba(0,0,0,0.08)" }}
          >
            {/* Text */}
            <div>
              <h3 className="text-[20px] font-bold text-black leading-snug mb-2 pr-4">
                {cap.title}
              </h3>
              <p className="text-sm text-black pr-4">{cap.desc}</p>
            </div>

            {/* Decorative shapes */}
            <div className="absolute bottom-0 right-0  z-0 pointer-events-none select-none">
              <img
                src="/product/capabilities.svg"
                alt="decorative"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute left-0 top-0 z-0 pointer-events-none select-none">
              <img
                src="/product/capabilities1.svg"
                alt="Decorative corner"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
