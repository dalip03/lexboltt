"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Member = {
  image: string;
  role: string;
  name: string;
  desc: string;
  cardBg: string;
  href?: string;
};


export default function TeamHero() {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  // Example: add href to card objects as needed
  const members: Member[] = [
    {
      image: "/img/ceo1.JPG",
      role: "CEO/Co-founder",
      name: "Manjunathan B",
      desc: "Seasoned entrepreneur with over 24 years of experience in IT consultancy and business leadership. Skilled at driving strategic growth, fostering strong customer relationships, and managing key accounts to deliver sustained value and client satisfaction.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/manjunath-b-1528a817?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeM2D2sTJTBq7ovVmatXndA%3D%3D",
    },
    {
      image: "/img/Abhinandan.JPG",
      role: "CTO/Co-founder",
      name: "Abinandhanan S",
      desc: "Over a decade of experience in research and building scalable AI solutions for enterprises. Proven track record of working closely with global automobile companies to design and deploy advanced compliance and regulatory intelligence systems.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/abinandhanan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
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
      image: "/img/Siva2.JPG",
      role: "Product and Growth",
      name: "Siva",
      desc: "Experienced in product strategy and digital transformation across FinTech and global media, driving operational efficiency and data-driven growth.",
      cardBg: "bg-[#F354184D]",
      href: "https://www.linkedin.com/in/sivaprasadreddy/",
    },
      {
      image: "/img/ShankerG.jpeg",
      role: "AI governance and Strategy Advisor",
      name: "Shankar G",
      desc: "AI governance and data strategy leader with 28 years of experience. Expert in aligning enterprises with the EU AI Act, ISO/IEC 42001, and NIST AI RMF; former TCS Director driving scalable governance, compliance, and business value.",
      cardBg: "bg-[#F354184D]",
      href: "#",
    },
    // {
    //   image: "/img/placeholder.svg",
    //   role: "Backend Architect",
    //   name: ".",
    //   desc: "Designs and maintains the scalable backend systems that power LexBolt's compliance engine, ensuring speed, security, and reliability.",
    //   cardBg: "bg-[#F354184D]",
    //   href: "#",
    // },
    // {
    //   image: "/img/placeholder.svg",
    //   role: "AI Industry Advisor",
    //   name: ".",
    //   desc: "Provides guidance on aligning the latest AI innovations with real-world enterprise needs, keeping LexBolt cutting-edge and practical.",
    //   cardBg: "bg-[#F354184D]",
    //   href: "#",
    // },
    // {
    //   image: "/img/placeholder.svg",
    //   role: "Automobile Regulation Expert",
    //   name: ".",
    //   desc: "Brings deep knowledge of global automotive standards and homologation, ensuring LexBolt’s outputs are accurate and industry-relevant.",
    //   cardBg: "bg-[#F354184D]",
    //   href: "#",
    // },
  ];

  

  // Duplicate members for infinite scroll
  const repeatedMembers = [...members, ...members];
  // Typed ref for auto-scroll container
  const scrollRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // Auto-scroll effect with proper typing
  useEffect(() => {
    let req: number;
    function animateScroll() {
      const el = scrollRef.current;
      if (!el || paused.current) {
        req = requestAnimationFrame(animateScroll);
        return;
      }
      el.scrollLeft += 0.5; // Adjust speed as needed
      if (el.scrollLeft > el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      req = requestAnimationFrame(animateScroll);
    }
    req = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(req);
  }, []);

  const handleMouseEnter = () => {
    paused.current = true;
  };
  const handleMouseLeave = () => {
    paused.current = false;
  };

  // Card onClick: navigate to href
  const handleCardClick = (href?: string) => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <section className="w-full mx-auto pb-20 px-4 relative">
      <motion.h1
        className="text-center text-3xl sm:text-3xl md:text-[64px] font-bold text-black mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        The Team Behind Lexbolt
      </motion.h1>
      <motion.p
        className="text-center text-black max-w-3xl mx-auto mb-8 text-md md:text-[16px] px-4 md:px-0"
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

      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute top-0 left-0 z-50 h-full w-12 bg-gradient-to-r from-white via-white/80 to-white/0" />
        <div className="pointer-events-none absolute top-0 right-0 z-50 h-full w-12 bg-gradient-to-l from-white via-white/80 to-white/0" />

        <div
          ref={scrollRef}
          className="flex gap-4  sm:gap-6 px-1 md:px-2 whitespace-nowrap overflow-x-auto scroll-smooth hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {repeatedMembers.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              onClick={() => handleCardClick(member.href)}
              className="group hidden flex-shrink-0 max-w-[260px] w-full aspect-[3/4] rounded-3xl overflow-hidden relative bg-white md:flex flex-col cursor-pointer"
            >
              <div className="relative  w-full h-[65%] flex items-start justify-center overflow-hidden">
                <div className={`${member.cardBg} absolute inset-0`} />
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                  sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             25vw"
                  priority={idx < 3}
                />
                <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-[10px] sm:text-xs px-2 py-1 rounded-full shadow border border-gray-200">
                  {member.role}
                </span>
              </div>

              <div className="relative flex-1  flex flex-col justify-end bg-primary">
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-3 py-4 sm:px-4 sm:py-5 z-20 flex flex-col">
                  <h3 className="text-white font-bold text-[clamp(0.75rem,1vw,1rem)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white text-[clamp(0.65rem,0.9vw,0.85rem)] opacity-90 leading-snug whitespace-normal line-clamp-4 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                    {member.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {members.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              onClick={() => handleCardClick(member.href)}
              className="group md:hidden flex-shrink-0 max-w-[260px] w-full aspect-[3/4] rounded-3xl overflow-hidden relative bg-white flex-col cursor-pointer"
            >
              {/* Image section */}
              <div className="relative  w-full h-full flex items-start justify-center overflow-hidden">
                <div className={`${member.cardBg} absolute inset-0`} />
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover object-[center_25%] z-10 rounded-t-3xl"
                  sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             25vw"
                  priority={idx < 3} // optimize LCP images
                />
                <span className="absolute top-3 left-3 z-20 inline-block bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-[10px] sm:text-xs px-2 py-1 rounded-full shadow border border-gray-200">
                  {member.role}
                </span>
              </div>

              {/* Card footer */}
              <div className="relative flex-1  flex flex-col justify-end bg-primary">
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-3xl px-3 py-4 sm:px-4 sm:py-5 z-20 flex flex-col">
                  <h3 className="text-white font-bold text-[clamp(0.75rem,1vw,1rem)] mb-1">
                    {member.name}
                  </h3>
                 <p
                onClick={(e) => {
                  e.stopPropagation(); // prevent opening link on text click
                  setExpandedIdx(expandedIdx === idx ? null : idx);
                }}
                className={`text-white text-[clamp(0.65rem,0.9vw,0.85rem)] opacity-90 leading-snug whitespace-normal cursor-pointer transition-all duration-300 ${
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
        {/* Hide scrollbar visually */}
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
