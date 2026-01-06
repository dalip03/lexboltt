"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import RequestDemoModal from "./RequestDemoModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- DATA ---------------- */

const testimonials = [
  {
    name: "Sr. Engineer, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 5,
    location: "NYC",
    verified: true,
    text: "“Lexbolt made a 300-page document usable in 15 minutes. Game-changing.”",
  },
  {
    name: "Sr, Developer, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 4,
    location: "London",
    verified: true,
    text: "Lexbolt streamlines our compliance in ways our previous solutions never could. Highly recommended.",
  },
  {
    name: "Project lead, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 5,
    location: "Delhi",
    verified: true,
    text: "Super intuitive and fast! I wish we had switched to Lexbolt years ago.",
  },
];

/* ---------------- STARS ---------------- */

const Stars = ({ count }: { count: number }) => (
  <span className="inline-flex">
    {Array.from({ length: count }).map((_, i) => (
      <Image key={i} src="/img/rating.svg" alt="star" width={20} height={20} className="mr-1" />
    ))}
  </span>
);

/* ---------------- COMPONENT ---------------- */

const Testimonial: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ---------------- AUTO SCROLL ---------------- */

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToSlide((activeIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  /* ---------------- HELPERS ---------------- */

  const getCardWidth = () => {
    if (!scrollRef.current) return 0;
    const firstCard = scrollRef.current.children[0] as HTMLElement;
    return firstCard.offsetWidth + 16; // smaller gap on mobile
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: getCardWidth() * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / getCardWidth());
    setActiveIndex(index);
  };

  /* ---------------- RENDER ---------------- */

  return (
    <section className="md:w-[97%] bg-[#F6F6F6] rounded-[32px] mx-auto md:mt-14 md:py-20 py-6 flex flex-col md:flex-row gap-6">
      {/* LEFT */}
      <div className="w-full md:w-[45%] px-4 md:px-20">
        <h2 className="font-bold text-2xl md:text-[56px] text-black leading-tight">
          What Do Our Clients Say
        </h2>
      </div>

      {/* RIGHT */}
      <div className="md:w-[55%] w-full relative px-2 md:px-0">
        {/* SCROLLER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 py-4 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="
                flex-shrink-0
                w-[92%]
                sm:w-[80%]
                md:w-[620px]
                rounded-[24px]
                p-4 sm:p-6
                scroll-snap-align-center
                bg-gradient-to-b from-black/10 to-transparent
              "
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* LEFT */}
                <div className="flex flex-row sm:flex-col gap-3 sm:gap-12 shrink-0">
                  <div>
                    <Image src={t.avatar} alt="" width={32} height={32} />
                    <div className="text-xs font-medium">{t.name}</div>
                    <div className="text-xs">{t.role}</div>
                  </div>

                  {t.verified && (
                    <div className="flex items-center text-xs gap-1">
                      <Image src="/img/verify.svg" alt="" width={14} height={14} />
                      Verified
                    </div>
                  )}
                </div>

                {/* RIGHT */}
                <div className="p-4 rounded-[20px] flex-1 bg-gradient-to-b from-black/10 to-transparent">
                  <Stars count={t.rating} />
                  <p className="text-[15px] sm:text-[16px] text-black mt-3">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    <Image src="/img/location.svg" alt="" width={14} height={14} />
                    <span className="text-sm">{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTROLS (mobile friendly) */}
        <div className="flex items-center justify-between mt-2 px-4">
          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                goToSlide(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)
              }
              className="p-2 rounded-full bg-white shadow"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => goToSlide((activeIndex + 1) % testimonials.length)}
              className="p-2 rounded-full bg-white shadow"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "w-6 bg-primary" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scroll-snap-align-center {
          scroll-snap-align: center;
        }
      `}</style>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Testimonial;
