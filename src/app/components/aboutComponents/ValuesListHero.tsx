"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ValuesListHero() {
  // Update these with your actual icon image paths:
  const values = [
    {
      icon: "/about_assets/innovation.svg",
      heading: "Innovation",
      subtitle: "Redefining Compliance with AI",
      desc: "We push the boundaries of technology to simplify complex regulations, turning compliance into a driver of innovation rather than a roadblock.",
    },
    {
      icon: "/about_assets/excellence.svg",
      heading: "Excellence",
      subtitle: "Raising the Standard",
      desc: "From compliance analysis to customer experience, we hold ourselves to the highest standards, ensuring accuracy, reliability, and trust at every step.",
    },
    {
      icon: "/about_assets/collaboration.svg",
      heading: "Collaboration",
      subtitle: "Built for Teams, Powered by Partnerships",
      desc: "We believe the strongest solutions come from working together. LexBolt enables seamless collaboration across engineering, homologation, and compliance teams.",
    },
    {
      icon: "/about_assets/integrity.svg",
      heading: "Integrity",
      subtitle: "Ethical, Transparent, Responsible",
      desc: "Our foundation is trust. We operate with full transparency and a commitment to ethical practices, ensuring compliance solutions that are both secure and dependable.",
    },
  ];

  return (
    <section className="w-full max-w-screen-3xl mx-auto pb-10 px-4 sm:px-20 my-10 overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.06 }}
        className="text-black text-3xl sm:text-3xl md:text-[64px] font-bold mb-2 leading-tight text-center md:text-start"
      >
        The Innovation Behind
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="text-gray-400 text-3xl sm:text-3xl font-semibold mb-8 leading-tight text-center md:text-start"
      >
        <span className="bg-primary text-white px-3 py-1 text-2xl sm:text-3xl md:text-[64px] font-bold inline-block ">
          Your Regulations{" "}
        </span>
      </motion.h2>
      {/* Values List */}
      <div className="flex flex-col gap-0">
        {values.map((value, i) => (
          <motion.div
            key={value.heading}
            className={`flex flex-col sm:flex-row  items-center py-5 border-b border-gray-200 ${
              i === 0 ? "border-t" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.07 + 0.15 }}
          >
            <Image
              src={value.icon}
              alt={value.heading}
              width={32} // w-8 = 32px
              height={32} // h-8 = 32px
              className="mr-0 sm:mr-5 sm:mb-0"
            />
            <div className="flex flex-col flex-1 items-start text-start justify-center">
              <span className="text-black text-lg">{value.heading}</span>
            </div>
            <div className="flex flex-col flex-[2] sm:ml-7 mt-1 sm:mt-0 text-center md:text-start px-6 md:px-0">
              <span className="text-xs sm:text-sm italic text-gray-800 mb-1">
                {value.subtitle}
              </span>
              <span className="text-black text-sm sm:text-base font-normal pr-0 sm:pr-16">
                {value.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
