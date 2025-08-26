"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";
import Image from "next/image";

// Demo testimonials data
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

const Stars = ({ count }: { count: number }) => (
  <span className="inline-flex text-xl">
    {Array.from({ length: count }).map((_, i) => (
      <Image key={i} src="/img/rating.svg" alt="star" width={20} height={20} className="mr-1" />
    ))}
  </span>
);

const Rating = ({ count }: { count: number }) => (
  <span className="inline-flex text-xl">
    {Array.from({ length: count }).map((_, i) => (
      <Image
        key={i}
        src="/img/ratingstar.svg"
        alt="star"
        width={12}
        height={12}
        className=" mr-1"
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
    <section className="md:w-[97%] bg-[#F6F6F6] rounded-[32px] mx-auto mt-14 py-20 flex flex-col md:flex-row justify-between gap-1 items-stretch">
      {/* Left Side */}
      <div className="w-full md:w-[45%] flex flex-col  mb-8 px-4  md:px-20 ">
        <span className="text-black text-[16px] mb-3 self-start flex gap-2 items-center">
          Trusted By 20,000+ Clients <Rating count={5} />
        </span>
        <h2 className="w-full font-sans font-bold text-2xl md:text-[56px] mb-6 text-black  self-start">
          What Do Our Clients Say
        </h2>
      </div>

      {/* Right Side: Testimonials */}
      <div className="md:w-[55%] w-full flex flex-col items-end justify-end  ">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 py-6 no-scrollbar w-full  overflow-y-hidden "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-[620px] rounded-[24px] flex  p-6 scroll-snap-align-center"
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
              <div className="flex items-start relative gap-4 justify-between ">
                <div className="  flex flex-col gap-12 h-full">
                  <div>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={32} // w-8 → 32px
                      height={32} // h-8 → 32px
                      className="rounded-full object-cover mb-2"
                    />

                    <div className="font-medium text-xs text-black  ">
                      {t.name}
                    </div>
                    <div className="text-xs font-medium text-black">
                      {t.role}
                    </div>
                  </div>
                  <div className="absolute">
                    <Image
                      src="/img/grid.svg"
                      alt="grid"
                      width={120} // ✅ 30*4 = 120px (Tailwind ka w-30, h-30 = 120px)
                      height={120}
                      className="rounded-full object-cover mb-2"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {t.verified && (
                      <span className="text-xs text-[#2E2E2E] flex items-center">
                        <span className="mr-1">
                          {" "}
                          <Image
                            src="/img/verify.svg"
                            alt="location"
                            width={20} // md:h-5 → 20px
                            height={20} // md:w-5 → 20px
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-cover"
                          />
                        </span>{" "}
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card text and stars */}
                <div
                  className="p-4 rounded-[24px] ml-4 flex-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28, 28, 28, 0.10) 0%, rgba(28, 28, 28, 0.00) 100%)",
                    borderRadius: "24px",
                  }}
                >
                  <div className="flex items-center mb-4">
                    <Stars count={t.rating} />
                  </div>
                  <div className="text-black text-[16px]">{t.text}</div>
                  <div className="flex items-center  gap-1 text-center mt-4">
                    <Image
                      src="/img/location.svg"
                      alt="location"
                      width={20} // md:h-5 ka approx
                      height={20}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
                    />

                    <span className="text-[10px] sm:text-sm md:text-sm text-black">
                      {t.location}
                    </span>
                  </div>
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
            className="absolute top-0 h-full bg-primary rounded-full border border-[#FF784E]"
            style={{
              left: `${trackLeft || 0}%`,
              width: `${trackWidth || 25}%`,
              minWidth: "40px",
              boxShadow: "0 0 8px 2px rgba(255, 120, 78, 0.6)", // glow effect
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
