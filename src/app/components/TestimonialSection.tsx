"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ import framer motion

// Demo testimonials data
const testimonials = [
  {
    name: "Ghazi Chowdrey",
    role: "CEO and Founder",
    avatar: "/img/testomonial1.svg",
    rating: 5,
    location: "NYC",
    verified: true,
    text: "I am beyond impressed with Lexbolt, task and regulations management has never been so easy. I am glad I found out soon about LexBolt. I am more than excited to use it more in my work.",
  },
  {
    name: "Zain Ahmad",
    role: "Compliance Manager",
    avatar: "/img/testomonial1.svg",
    rating: 4,
    location: "London",
    verified: true,
    text: "LexBolt streamlines our compliance in ways our previous solutions never could. Highly recommended.",
  },
  {
    name: "Meera Singh",
    role: "Project Lead",
    avatar: "/img/testomonial1.svg",
    rating: 5,
    location: "Delhi",
    verified: true,
    text: "Super intuitive and fast! I wish we had switched to LexBolt years ago.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <span className="inline-flex text-[#FF5C1A] text-xl">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </span>
);

const TestimonialSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = useState({
    left: 0,
    width: 1,
    scroll: 1,
  });

  useEffect(() => {
    function handleScroll() {
      if (!scrollRef.current) return;
      setScrollInfo({
        left: scrollRef.current.scrollLeft,
        width: scrollRef.current.clientWidth,
        scroll: scrollRef.current.scrollWidth,
      });
    }
    handleScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        el.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, []);

  // calculate scroll indicator position and width
  const trackWidth = (scrollInfo.width / scrollInfo.scroll) * 100;
  const trackLeft =
    (scrollInfo.left / (scrollInfo.scroll - scrollInfo.width)) *
    (100 - trackWidth);

  return (
    <section className="w-full bg-[#F6F6F6] rounded-[32px] max-w-6xl mx-auto mt-14 p-6 md:p-12 flex flex-col md:flex-row gap-10 items-stretch">
      {/* Left Side */}
      <div className="md:w-[40%] w-full flex flex-col justify-center mb-8 md:mb-0">
        <span className="bg-white border border-gray-200 rounded-full px-4 py-1 text-xs font-medium mb-3 w-max">
          Testimonial
        </span>
        <span className="text-gray-500 text-xs mb-3">
          Trusted By 20,000+ Clients <Stars count={4} />
        </span>
        <h2 className="font-sans font-bold text-2xl md:text-4xl mb-6 text-gray-900 max-w-xs">
          What Do Our Clients Say
        </h2>
        <div className="flex gap-4 ">
          {/* Contact us button */}
          <button className="flex items-center gap-2 bg-[#FF5C1A] text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-orange-500 transition relative">
            Contact us
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF784E]/30">
              <span className="text-white text-lg font-semibold">&rarr;</span>
            </span>
          </button>
          {/* Get Started button */}
          <button className="flex items-center gap-2 bg-[#FFF3ED] text-[#FF5C1A] font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-orange-100 transition relative">
            Get Started
            <span className="flex items-center justify-center ml-2 w-8 h-8 rounded-full bg-[#FF784E]/20">
              <span className="text-[#FF5C1A] text-lg font-semibold">
                &rarr;
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side: Testimonials */}
      <div className="md:w-[60%] w-full flex flex-col items-end justify-end">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar w-full"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className=" rounded-[24px] flex shadow p-6 w-[620px] min-w-[470px] max-w-xs flex-shrink-0 scroll-snap-align-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(28, 28, 28, 0.10) 0%, rgba(28, 28, 28, 0.00) 100%)",
                borderRadius: "24px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Card header */}
              <div className="flex items-start gap-4 justify-between mb-3">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover mb-2"
                    />
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                  <div>
                    <img
                      src="/img/grid.svg"
                      alt="grid"
                      className="w-20 h-10 rounded-full object-cover mb-2"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    {t.verified && (
                      <span className="text-xs text-gray-400 flex items-center">
                        <span className="mr-1">✔️</span> Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card text and stars */}
                <div
                  className="p-4 rounded-[24px] ml-4 flex-1 shadow"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28, 28, 28, 0.10) 0%, rgba(28, 28, 28, 0.00) 100%)",
                    borderRadius: "24px",
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Stars count={t.rating} />
                  </div>
                  <div className="text-gray-700 text-sm">{t.text}</div>
                                      <span className="text-xs text-gray-400">{t.location}</span>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

     {/* Orange scroll bar indicator */}
<div className="relative w-full h-2 mt-1">
  {/* Gray track */}
  <div className="absolute left-0 top-0 w-full h-full bg-gray-200 rounded-full" />

  {/* Orange indicator with border */}
  <motion.div
    className="absolute top-0 h-full bg-primary rounded-full transition-all border border-[#FF784E] shadow-md"
    style={{
      left: `${trackLeft || 0}%`,
      width: `${trackWidth || 25}%`,
      minWidth: "40px",
    }}
    layout
    transition={{ type: "spring", stiffness: 200, damping: 30 }}
  />
</div>

      </div>

      {/* Hide native scrollbars on all browsers */}
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
    </section>
  );
};

export default TestimonialSection;
