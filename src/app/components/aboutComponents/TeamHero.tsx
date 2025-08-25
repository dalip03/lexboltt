"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  const members = [
    {
      image: "/img/testo1.png",
      role: "CEO / Co Founder",
      name: "Manjunathan B",
      desc: "Drives product vision by combining deep regulatory knowledge.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/profile.jpeg",
      role: "CTO / Co Founder",
      name: "Abinandhan S",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/testo2.png",
      role: "AI Advisor",
      name: "Ananya Mehta",
      desc: "Drives product vision by combining deep regulatory knowledge.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/testo1.png",
      role: "Product Manager",
      name: "Rohan Iyer",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#F354184D]",
    },
    {
      image: "/img/testo2.png",
      role: "Product Manager",
      name: "Maya de",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#F354184D]",
    },
  ];

  return (
    <section className="w-full  mx-auto py-12 px-4 relative ">
      {/* Tag */}

      <motion.div
        className="mb-3 text-center"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold">
          Lexbolt Team
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-center text-2xl sm:text-3xl md:text-[64px] font-bold text-[#232540] mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Meet Our Team
      </motion.h1>

      <motion.p
        className="text-center text-black max-w-md mx-auto mb-8 text-md md:text[16px]"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        A dedicated team of experts using tech and smart strategy to simplify
        regulations for all
      </motion.p>

      {/* Scrollable cards */}
      <div className="relative w-full ">
        {/* Left/right fades */}
        <div className="pointer-events-none absolute top-0 left-0 z-50 h-full w-12 bg-gradient-to-r from-white via-white/80 to-white/0" />
        <div className="pointer-events-none absolute top-0 right-0 z-50 h-full w-12 bg-gradient-to-l from-white via-white/80 to-white/0" />

        <div className="overflow-x-auto whitespace-nowrap hide-scrollbar pb-3 flex justify-center">
          <div className="inline-flex gap-4 sm:gap-6 px-1 md:px-2">
            {members.map((member, idx) => (
              <motion.div
                key={`${member.name}-${idx}`}
                className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg bg-white"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                {/* Background tint */}
                <div className={`${member.cardBg} absolute inset-0`} />

                {/* Image full cover */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top z-10"
                />

                {/* Floating Role Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-700 font-semibold text-[10px] sm:text-[11px] px-2 py-1 rounded-full shadow border border-gray-200">
                    {member.role}
                  </span>
                </div>

                {/* Footer overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-primary rounded-b-3xl px-2 py-3 sm:px-4 sm:py-5 z-20 flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-white font-bold text-xs sm:text-base">
                    {member.name}
                  </h3>
                  <p className="text-white text-[10px] sm:text-xs opacity-90 w-full break-words leading-snug whitespace-normal">
  {member.desc}
</p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}
