'use client';

import { motion } from "framer-motion";

export default function ValuesListHero() {
  // Update these with your actual icon image paths:
  const values = [
    {
      icon: "/about/innovation.svg",
      heading: "Innovation",
      subtitle: "Innovative Compliance Solution",
      desc: "We are passionate about pushing the boundaries of technology and exploring new frontiers in AI.",
    },
    {
      icon: "/about/excellence.svg",
      heading: "Excellence",
      subtitle: "Excellent Service",
      desc: "We strive for the highest standards in everything we do, from compliance analysis to customer service.",
    },
    {
      icon: "/about/collaboration.svg",
      heading: "Collaboration",
      subtitle: "Collaborative tool for teams",
      desc: "We believe that the best results come from working together, lexbolt ensures proper cooperation within the team.",
    },
    {
      icon: "/about/integrity.svg",
      heading: "Integrity",
      subtitle: "Legal and Friendly",
      desc: "We are committed to ethical practices and transparency in all our operations.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Tag */}
     
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold">
          Our Values
        </span>
      </motion.div>
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.06 }}
        className="text-black text-2xl sm:text-3xl md:text-[64px] font-bold mb-2 leading-tight"
      >
        The Innovation Behind
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-8 leading-tight"
      >
        <span className="bg-[#FF6600] text-white px-3 py-1 text-2xl sm:text-3xl md:text-[64px] font-bold inline-block">
            Your Regulations </span>
      </motion.h2>
      {/* Values List */}
      <div className="flex flex-col gap-0">
        {values.map((value, i) => (
          <motion.div
            key={value.heading}
            className={`flex flex-col sm:flex-row items-start py-5 border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.07 + 0.15 }}
          >
            <img
              src={value.icon}
              alt={value.heading}
              className="w-8 h-8 mr-0 mb-2 sm:mr-5 sm:mb-0 mt-1"
            />
            <div className="flex flex-col flex-1">
              <span className="text-black text-lg">{value.heading}</span>
            </div>
            <div className="flex flex-col flex-[2] sm:ml-7 mt-1 sm:mt-0">
              <span className="text-xs sm:text-sm italic text-gray-800 mb-1">
                {value.subtitle}
              </span>
              <span className="text-black text-sm sm:text-base font-normal pr-0 sm:pr-16">
                {i === 1 || i === 2
                  ? <b>{value.desc.split(" ")[0]}</b> + " " + value.desc.split(" ").slice(1).join(" ")
                  : value.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
