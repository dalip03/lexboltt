"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Member = {
  image: string;
  role: string;
  name: string;
  desc: string;
  cardBg: string;
  href?: string;
};

export default function TeamHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const members: Member[] = [
    {
      image: "/img/ceo1.JPG",
      role: "CEO/Co-founder",
      name: "Manjunathan B",
      desc: "Seasoned entrepreneur with over 24 years of experience in IT consultancy and business leadership. Skilled at driving strategic growth, fostering strong customer relationships, and managing key accounts to deliver sustained value and client satisfaction.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/manjunath-b-1528a817",
    },
    {
      image: "/img/Abhinandan.JPG",
      role: "CTO/Co-founder",
      name: "Abinandhanan S",
      desc: "Over a decade of experience in research and building scalable AI solutions for enterprises. Proven track record of working closely with global automobile companies to design and deploy advanced compliance and regulatory intelligence systems.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/abinandhanan",
    },
    {
      image: "/img/safiya.JPG",
      role: "Chief of Staff",
      name: "Safiya R",
      desc: "Experienced in operations, strategy, and collaboration with a proven ability to streamline processes, align priorities, and drive impactful results",
      cardBg: "bg-[#F354184D]",
      href: "#",
    },
    {
      image: "/img/ShankerG.jpeg",
      role: "AI & Strategy Advisor",
      name: "Shankar G",
      desc: "AI Advisor to Lexbolt.AI, brings 29 years experience in AI and data strategy, guiding enterprises to operationalize responsible AI and delivering multi-million-dollar program outcomes.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/shankargsri",
    },
  ];

  // Auto-advance carousel with smooth loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % members.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [members.length]);

  const handleCardClick = (href?: string) => {
    if (href && href !== "#") {
      window.open(href, "_blank");
    }
  };

  // Get previous and next indices with wrapping
  const getPrevIndex = () => (activeIndex - 1 + members.length) % members.length;
  const getNextIndex = () => (activeIndex + 1) % members.length;

  return (
    <section className="w-full max-w-7xl mx-auto pb-20 px-4 relative">
      <motion.h1
        className="text-center text-3xl sm:text-3xl md:text-[64px] font-bold text-black mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        The Team Behind Lexbolt
      </motion.h1>
      <motion.p
        className="text-center text-black max-w-3xl mx-auto mb-12 text-md md:text-[16px] px-4 md:px-0"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        A joint initiative between{" "}
        <span className="font-bold">Jags Consultancy Limited, UK </span>and
        domain experts from the automotive ecosystem, blending deep AI research
        with decades of compliance experience.
      </motion.p>

      {/* Desktop: 3-card carousel with center focus */}
      <div className="hidden md:block relative w-full min-h-[500px]">
        <div className="flex justify-center items-center gap-6 px-8">
          {/* Left card (previous) */}
          <motion.div
            key={`prev-${getPrevIndex()}`}
            initial={{ opacity: 0, scale: 0.88, x: -20 }}
            animate={{ opacity: 0.5, scale: 0.9, x: 0 }}
            exit={{ opacity: 0, scale: 0.88, x: -20 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(getPrevIndex())}
            className="flex-shrink-0 max-w-[280px] w-full aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex flex-col cursor-pointer shadow-lg"
          >
            <div className="relative w-full h-[65%] flex items-start justify-center overflow-hidden">
              <div className={`${members[getPrevIndex()].cardBg} absolute inset-0`} />
              <Image
                fill
                src={members[getPrevIndex()].image}
                alt={members[getPrevIndex()].name}
                className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                sizes="280px"
              />
              <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-full shadow border border-gray-200">
                {members[getPrevIndex()].role}
              </span>
            </div>
            <div className="relative flex-1 flex flex-col justify-end bg-primary">
              <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-4 py-4 z-20 flex flex-col">
                <h3 className="text-white font-bold text-base mb-1">
                  {members[getPrevIndex()].name}
                </h3>
                <p className="text-white text-xs opacity-90 leading-snug line-clamp-3">
                  {members[getPrevIndex()].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center card (active) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`center-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.95, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => handleCardClick(members[activeIndex].href)}
              className="group flex-shrink-0 max-w-[320px] w-full aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex flex-col cursor-pointer shadow-2xl z-10"
            >
              <div className="relative w-full h-[65%] flex items-start justify-center overflow-hidden">
                <div className={`${members[activeIndex].cardBg} absolute inset-0`} />
                <Image
                  fill
                  src={members[activeIndex].image}
                  alt={members[activeIndex].name}
                  className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                  sizes="320px"
                  priority
                />
                <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-full shadow border border-gray-200">
                  {members[activeIndex].role}
                </span>
              </div>
              <div className="relative flex-1 flex flex-col justify-end bg-primary">
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-4 py-5 z-20 flex flex-col">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {members[activeIndex].name}
                  </h3>
                  <p className="text-white text-sm opacity-90 leading-relaxed whitespace-normal line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {members[activeIndex].desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right card (next) */}
          <motion.div
            key={`next-${getNextIndex()}`}
            initial={{ opacity: 0, scale: 0.88, x: 20 }}
            animate={{ opacity: 0.5, scale: 0.9, x: 0 }}
            exit={{ opacity: 0, scale: 0.88, x: 20 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(getNextIndex())}
            className="flex-shrink-0 max-w-[280px] w-full aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex flex-col cursor-pointer shadow-lg"
          >
            <div className="relative w-full h-[65%] flex items-start justify-center overflow-hidden">
              <div className={`${members[getNextIndex()].cardBg} absolute inset-0`} />
              <Image
                fill
                src={members[getNextIndex()].image}
                alt={members[getNextIndex()].name}
                className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                sizes="280px"
              />
              <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-full shadow border border-gray-200">
                {members[getNextIndex()].role}
              </span>
            </div>
            <div className="relative flex-1 flex flex-col justify-end bg-primary">
              <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-4 py-4 z-20 flex flex-col">
                <h3 className="text-white font-bold text-base mb-1">
                  {members[getNextIndex()].name}
                </h3>
                <p className="text-white text-xs opacity-90 leading-snug line-clamp-3">
                  {members[getNextIndex()].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Scrollable cards */}
      <div className="md:hidden relative w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 z-50 h-full w-8 bg-gradient-to-r from-white via-white/80 to-white/0" />
        <div className="pointer-events-none absolute top-0 right-0 z-50 h-full w-8 bg-gradient-to-l from-white via-white/80 to-white/0" />

        <div className="flex gap-4 px-2 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory">
          {members.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              onClick={() => handleCardClick(member.href)}
              className="group flex-shrink-0 w-[280px] aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex flex-col cursor-pointer snap-center shadow-lg"
            >
              <div className="relative w-full h-[65%] flex items-start justify-center overflow-hidden">
                <div className={`${member.cardBg} absolute inset-0`} />
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                  sizes="280px"
                  priority={idx < 2}
                />
                <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-xs px-2 py-1 rounded-full shadow border border-gray-200">
                  {member.role}
                </span>
              </div>

              <div className="relative flex-1 flex flex-col justify-end bg-primary">
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-3 py-4 z-20 flex flex-col">
                  <h3 className="text-white font-bold text-base mb-1">
                    {member.name}
                  </h3>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIdx(expandedIdx === idx ? null : idx);
                    }}
                    className={`text-white text-sm opacity-90 leading-snug whitespace-normal cursor-pointer transition-all duration-300 ${
                      expandedIdx === idx ? "" : "line-clamp-3"
                    }`}
                  >
                    {member.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}</style>
      </div>
      
    </section>
  );
}