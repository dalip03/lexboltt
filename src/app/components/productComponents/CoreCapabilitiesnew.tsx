"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Brain,
  Layers,
  CheckCircle,
  GitCompare,
  Eye,
  MessageSquare,
  CalendarClock,
  Globe,
  Plug,
} from "lucide-react";

const capabilities = [
  { title: "AI-Powered Regulations Analyser", icon: Brain },
  { title: "Semantic Insights Hub", icon: Layers },
  { title: "Component Validation Engine", icon: CheckCircle },
  { title: "Comparative Intelligence", icon: GitCompare },
  { title: "Visual Interpretation", icon: Eye },
  { title: "Dynamic Q&A", icon: MessageSquare },
  { title: "Regulation Lifecycle Tracking", icon: CalendarClock },
  { title: "Multi-Region Harmonization", icon: Globe },
  { title: "Integrations", icon: Plug },
];

/* Motion – subtle & elegant */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function CoreCapabilitiesnew() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-[56px] font-bold text-black">
          Core Capabilities
        </h2>
      </motion.div>

      {/* Capabilities list */}
      <motion.ul
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-x-12
    gap-y-8
    md:gap-y-14
    max-w-7xl
    mx-auto
    place-items-center
  "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {capabilities.map(({ title, icon: Icon }, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            className="
        group
        flex
        items-center
        gap-4
        w-full
        max-w-[360px]
      "
          >
            {/* Icon */}
            <Icon
              size={18}
              strokeWidth={1.8}
              className="text-primary flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Text */}
            <h3 className="text-[18px] font-semibold text-black leading-snug">
              {title}
            </h3>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
