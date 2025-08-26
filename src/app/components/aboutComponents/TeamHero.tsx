"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function TeamHero() {
  const members = [
    {
      image: "/img/ceo.jpg",
      role: "CEO/Co founder",
      name: "Manjunathan B",
      desc: "Seasoned entrepreneur with over 24 years of experience in IT consultancy and business leadership. Skilled at driving strategic growth, fostering strong customer relationships, and managing key accounts to deliver sustained value and client satisfaction.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/profile.jpeg",
      role: "CTO/Co-founder",
      name: "Abinandhanan S",
      desc: "Over a decade of experience in research and building scalable AI solutions for enterprises. Proven track record of working closely with global automobile companies to design and deploy advanced compliance and regulatory intelligence systems.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/placeholder.svg",
      role: "Backend Architect",
      name: "John B",
      desc: "Designs and maintains the scalable backend systems that power LexBolt's compliance engine, ensuring speed, security, and reliability.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/placeholder.svg",
      role: "AI Industry Advisor",
      name: "Rohan Iyer",
      desc: "Provides guidance on aligning the latest AI innovations with real-world enterprise needs, keeping LexBolt cutting-edge and practical.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/placeholder.svg",
      role: "Automobile Regulation Expert",
      name: "Maya de",
      desc: "Brings deep knowledge of global automotive standards and homologation, ensuring LexBolt’s outputs are accurate and industry-relevant.",
      cardBg: "bg-[#F354184D]",
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const isPaused = false;

    async function infiniteScroll() {
      while (true) {
        if (!isPaused) {
          await controls.start({
            x: "-50%",
            transition: { ease: "linear", duration: 20 },
          });
          await controls.set({ x: 0 });
        } else {
          await new Promise((resolve) => setTimeout(resolve, 200)); // wait while paused
        }
      }
    }
    infiniteScroll();

    return () => {
      controls.stop();
    };
  }, [controls]);

  const repeatedMembers = [...members, ...members];

  return (
    <section className="w-full mx-auto pb-20 px-4 relative">
      {/* Headline */}
      <motion.h1
        className="text-center text-2xl sm:text-3xl md:text-[64px] font-bold text-[#232540] mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        The Team Behind LexBolt
      </motion.h1>

      <motion.p
        className="text-center text-black max-w-3xl mx-auto mb-8 text-md md:text[16px]"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        A joint initiative between{" "}
        <span className="font-bold">Jags Consultancy Limited, UK </span>and
        domain experts from the automotive ecosystem,{" "}
        <span className="font-bold">blending deep AI research</span> with
        <span className="font-bold"> decades of compliance experience.</span>
      </motion.p>

      {/* Scrollable cards */}
      <div className="relative w-full overflow-hidden">
        {/* Left/right fades */}
        <div className="pointer-events-none absolute top-0 left-0 z-50 h-full w-12 bg-gradient-to-r from-white via-white/80 to-white/0" />
        <div className="pointer-events-none absolute top-0 right-0 z-50 h-full w-12 bg-gradient-to-l from-white via-white/80 to-white/0" />

        <motion.div
          animate={controls}
          className="flex gap-4 sm:gap-6 px-1 md:px-2 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {repeatedMembers.map((member, idx) => (
            <motion.div
              key={`${member.name}-${idx}`}
              className="group flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex flex-col"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: "-50%",
                  transition: { ease: "linear", duration: 20 },
                })
              } // resume
            >
              {/* FIXED IMAGE SECTION */}
              <div className="relative w-full h-[65%] flex items-start justify-center overflow-hidden">
                <div className={`${member.cardBg} absolute inset-0`} />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top z-10 rounded-t-3xl"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-700 font-semibold text-[10px] sm:text-[11px] px-2 py-1 rounded-full shadow border border-gray-200">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* FIXED TEXT FOOTER */}
              <div className="relative w-full h-[8rem] group">
                {" "}
                {/* match initial maxHeight */}
                <motion.div
                  initial={{ maxHeight: "8rem" }}
                  whileHover={{ maxHeight: "24rem" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute bottom-0  left-0 right-0 overflow-hidden bg-primary rounded-b-3xl px-2 py-3 sm:px-4 sm:py-5 z-20 flex flex-col will-change-max-height"
                >
                  <h3 className="text-white font-bold text-xs sm:text-base mb-1 ">
                    {member.name}
                  </h3>
                  <p className="text-white text-[11px] sm:text-xs opacity-90 w-full leading-snug whitespace-normal line-clamp-4 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                    {member.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
