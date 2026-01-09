"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";
import DemoButton from "./DemoButton";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [showFixedButton, setShowFixedButton] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;
        const scrolledPastHero = heroRect.top;

        // Calculate 20% of hero section height
        const threshold = heroHeight * 0.2;

        // Show button when scrolled 20% past the hero section
        setShowFixedButton(scrolledPastHero < -threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-w-7xl h-full md:px-4 relative">
      {/* Fixed Button - Shows after scrolling 20% of hero section */}
      <div
        className={`fixed bottom-0 left-310 right-0 z-50 flex justify-center pt-4 pb-6 transition-all duration-300 ${
          showFixedButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="relative inline-flex items-center">
          <motion.button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-medium px-1 md:pl-6 py-1 pl-4 rounded-full shadow-lg hover:bg-primary transition relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Book a Demo
            <span className="ml-2 flex-shrink-0">
              <Image
                src="/img/arrowrighticonwhite.svg"
                alt="Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </span>
          </motion.button>
        </div>
      </div>

      <section
        ref={heroRef}
        className="min-w-full h-full flex flex-col bg-[#F6F6F6] items-center justify-center rounded-[24px] px-4 mt-4 relative overflow-hidden"
      >
        {/* Top-right blur circle */}
        <div
          className="absolute right-[-148px] top-[-148px] bg-[#F35418] rounded-full filter blur-[172px] pointer-events-none z-5 
          w-[456px] h-[456px]
          sm:right-[-120px] sm:top-[-120px] sm:w-[360px] sm:h-[360px]
          xs:right-[-80px] xs:top-[-80px] xs:w-[240px] xs:h-[240px]"
        />

        {/* Bottom-left blur circle */}
        <div
          className="absolute left-[-148px] bottom-[-148px] bg-[#F35418] rounded-full filter blur-[172px] pointer-events-none z-5 
          w-[456px] h-[456px] 
          sm:left-[-120px] sm:bottom-[-120px] sm:w-[360px] sm:h-[360px] 
          xs:left-[-80px] xs:bottom-[-80px] xs:w-[240px] xs:h-[240px]"
        />

        <motion.div
          className="max-w-6xl w-full mx-auto text-center relative mt-14 px-2 sm:px-4 z-20"
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
        >
          <h1 className="font-bold text-black  text-xl sm:text-[42px] lg:text-[56px] leading-tight mb-6 relative">
            Rethinking Compliance Intelligence
            <br />
            for the Automotive Industry
          </h1>
          <p className="text-black text-[12px] sm:text-base lg:text-[16px] mb-4 px-100 sm:px-48 lg:px-28">
            AI-driven insights that decode regulations, accelerate validation,
            and keep your designs compliant from concept to production, and new
            regulations updated for engineering and homologation.
          </p>

          <DemoButton onClick={() => setShowModal(true)} />
        </motion.div>

        {/* Dashboard image + Card overlay */}
        <motion.div
          className="relative flex justify-center w-full mt-6 px-2 sm:px-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <Image
            src="/img/homebgnew.svg"
            alt="Dashboard Screenshot"
            width={900}
            height={500}
            className="
    w-full
    max-w-[320px]    
    sm:max-w-[420px]     
    md:max-w-[600px]     
    lg:max-w-[900px]     
    mx-auto
    object-contain
    z-20
  "
          />
        </motion.div>

        {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
      </section>
    </div>
  );
}
