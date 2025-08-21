"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ import framer motion
import RequestDemoModal from "./RequestDemoModal";
import Link from "next/link";

// Demo testimonials data
const testimonials = [
  {
    name: "Sr. Engineer, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 5,
    location: "NYC",
    verified: true,
    text: "I am beyond impressed with Lexbolt, task and regulations management has never been so easy. I am glad I found out soon about LexBolt. I am more than excited to use it more in my work.",
  },
  {
    name: "Sr, Developer, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 4,
    location: "London",
    verified: true,
    text: "LexBolt streamlines our compliance in ways our previous solutions never could. Highly recommended.",
  },
  {
    name: "Project lead, at a",
    role: "respected OEM",
    avatar: "/img/placeholder.svg",
    rating: 5,
    location: "Delhi",
    verified: true,
    text: "Super intuitive and fast! I wish we had switched to LexBolt years ago.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <span className="inline-flex text-xl">
    {Array.from({ length: count }).map((_, i) => (
      <img key={i} src="/img/rating.svg" alt="star" className="w-5 h-5 mr-1" />
    ))}
  </span>
);

const Rating = ({ count }: { count: number }) => (
  <span className="inline-flex text-xl">
    {Array.from({ length: count }).map((_, i) => (
      <img
        key={i}
        src="/img/ratingstar.svg"
        alt="star"
        className="w-2 h-2 mr-1"
      />
    ))}
  </span>
);
const TestimonialSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
    <section className="w-[90%] bg-[#F6F6F6] rounded-[32px] mx-auto mt-14 py-6 px-6  md:px-10  flex flex-col md:flex-row justify-between gap-10 items-stretch">
      {/* Left Side */}
      <div className="flex flex-col items-center mb-8 md:px-0  xl-px-10 ">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-gray-200 self-start text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
        >
          Testimonial
        </motion.span>
        <span className="text-black text-xs mb-3 self-start flex justify-center items-center gap-2">
          Trusted By 20,000+ Clients <Rating count={5} />
        </span>
        <h2 className="font-sans font-bold text-2xl md:text-4xl mb-6 text-gray-900 max-w-xs self-start">
          What Do Our Clients Say
        </h2>
      </div>

      {/* Right Side: Testimonials */}
      <div className="md:w-[60%] w-full flex flex-col items-end justify-end ">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 py-6 no-scrollbar w-full overflow-y-hidden "
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
                    <div className="font-medium text-sm text-gray-400  ">
                      {t.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {t.role}
                    </div>
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
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default TestimonialSection;
