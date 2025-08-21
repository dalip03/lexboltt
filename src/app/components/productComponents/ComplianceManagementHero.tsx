"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ComplianceManagementHero() {
  const features = [
    "Expert-Curated Model",
    "Flexible Management",
    "Seamless Export",
    "24/7 Access to Support",
    "Interactive System",
    "Diverse Use Cases",
  ];

  return (
    <section className="w-full max-w-screen-xl mx-auto md:px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left: Image with experience badge */}
      <div className="relative flex-shrink-0 w-full max-w-[350px]">
        <img
          src="/product/producttransform.png"
          alt="Consultant working"
          className="rounded-3xl w-full object-cover aspect-[4/5]"
        />
        
      </div>

      {/* Right: Text and Content */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-5 w-full max-w-xl">
       <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="inline-block border border-gray-200 text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-full font-semibold mb-3"
      >
        Transform Regulations
      </motion.span>
          
     
        <motion.h1
          className="text-black font-bold text-2xl sm:text-3xl md:text-[64px] mb-2 leading-tight text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
        >
          Unlock Compliance <br className="hidden md:block" />
          Management
        </motion.h1>
        <span className="text-black text-base sm:text-lg mb-1 font-medium text-center md:text-left">
          Like Never Before
        </span>
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3 border border-gray-200 rounded-2xl bg-white py-4 px-6 mb-3 w-full">
          {features.map((feature, idx) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-black text-[15px] md:text-base"
            >
              <img src="/product/check.svg" alt="" className="w-5 h-5" />
              {feature}
            </div>
          ))}
        </div>
        {/* Contact Button */}
        <Link href="/contact" passHref>
          <button className="flex items-center cursor-pointer gap-2 bg-primary hover:bg-primary/90 transition text-white px-1 pl-4 py-1 rounded-full font-semibold shadow text-sm sm:text-base">
            Contact us
            <span>
              <img
                src="/product/right.svg"
                alt="Arrow Right"
                className="w-10 h-10 object-contain"
              />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
