'use client';

import { motion } from "framer-motion";

export default function AboutSubHero() {
  const cards = [
    {
      heading: "Our Journey",
      text:
        "LexBolt has grown from a niche compliance tool into a trusted AI partner for teams across automotive, manufacturing, and other regulated industries helping them navigate complex requirements with speed and confidence.",
    },
    {
      heading: "Millions of Products Delivered",
      text:
        "From electronics to Automotive, we've successfully helped over 12 industries.",
    },
    {
      heading: "4K+ Businesses Empowered",
      text:
        "We've helped startups, enterprises, and eCommerce brands scale faster",
    },
    {
      heading: "Built for the Future",
      text:
        "With smart version control, real-time insights, and tech-first approach, lexbolt continues to lead the way in modern, efficient regulations management solutions.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-2 pt-10 pb-14">
      {/* History Tag */}
      <div className="flex flex-wrap items-center gap-4 mb-1">
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
          Lexbolt history
        </span>
      </div>
      {/* Title and Description - Always outside cards */}
      <div className="grid md:grid-cols-[2fr_3fr] gap-4 mb-7">
        <h1 className="text-4xl font-semibold text-black leading-tight">
          About lexbolt.ai
        </h1>
        <p className="text-gray-700 text-sm md:text-md leading-relaxed md:mt-2 max-w-2xl">
          At LexBolt, we blend advanced AI with real-world automotive compliance to deliver faster, smarter regulatory workflows. From instant document parsing to proactive change tracking and integration into your engineering tools, everything we build is designed to move your team forward efficiently and compliantly.
        </p>
      </div>
      {/* Cards Grid with scroll-fade in animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Card div only */}
            <div className="bg-[#F8F2F1] rounded-2xl min-h-[180px] w-full" />
            {/* Text and Heading below the card */}
            <h3 className="text-black font-semibold text-sm mt-4 mb-2">
              {card.heading}
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed mb-1">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
