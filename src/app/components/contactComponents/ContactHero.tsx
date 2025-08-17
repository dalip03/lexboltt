"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactHero() {
  const slides = [
    {
      img: "/product/contact1.png",
      label: "Strategize",
      desc: "Our AI Model crafts a tailored regulations strategy that aligns with your objectives",
    },
    {
      img: "/product/contact2.png",
      label: "Collaborate",
      desc: "Work with compliance experts to adapt regulations to your workflows.",
    },
    {
      img: "/product/contact3.png",
      label: "Optimize",
      desc: "We enhance efficiency by streamlining compliance processes.",
    },
    {
      img: "/product/contact1.png",
      label: "Scale",
      desc: "Our solutions grow with your organization’s needs.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Calculate indices for left and right thumbnails
  const leftIndex = (current - 1 + slides.length) % slides.length;
  const rightIndex = (current + 1) % slides.length;

  return (
    <section className="w-full  mx-auto py-12 px-4 overflow-x-hidden">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-0 items-center px-20">
        <div className="md:col-span-3 flex flex-col justify-center">
          <span className="text-xs text-gray-500 mb-2">Contact Us</span>
          <h1 className="text-black font-bold text-3xl md:text-5xl leading-tight mb-1">
            Streamlining
            <br />
            Your Regulations
          </h1>
        </div>
        <div className="md:col-span-5 flex flex-col items-end justify-start">
          <p className="text-gray-700 text-sm md:text-base max-w-md text-right ml-auto mb-7">
            We deliver tailored AI compliance solutions designed to scale your
            regulatory workflows and drive measurable operational results.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center mt-2 gap-4 relative z-0 ">
        {/* Left thumbnail */}
        <div className="hidden md:flex flex-shrink-0 w-[370px] h-[260px] rounded-2xl overflow-hidden opacity-90">
          <img
            src={slides[leftIndex].img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-[calc(50%-320px)] cursor-pointer top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center bg-white rounded-full"
          style={{ width: "46px", height: "46px" }}
        >
          <img
            src="/product/whiteright.svg"
            alt="Prev"
            className="w-8 h-8 rotate-180"
          />
        </button>
        {/* Center slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative w-[470px] md:w-[600px] h-[320px] md:h-[360px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg flex flex-col z-10 bg-white"
          >
            {/* Image top section */}
            <div className="h-[75%] w-full overflow-hidden rounded-t-2xl">
              <img
                src={slides[current].img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text bottom section */}
            <div className="h-[25%] w-full px-6 py-3 flex flex-col justify-center bg-white rounded-b-2xl">
              {slides[current].label && (
                <span className="text-black font-bold text-lg mb-1">
                  {slides[current].label}
                </span>
              )}
              {slides[current].desc && (
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug">
                  {slides[current].desc}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-[calc(50%-320px)] cursor-pointer top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center bg-white rounded-full shadow-md"
          style={{ width: "46px", height: "46px" }}
        >
          <img src="/product/whiteright.svg" alt="Next" className="w-6 h-6" />
        </button>

        {/* Right thumbnail */}
        <div className="hidden md:flex flex-shrink-0 w-[370px] h-[260px] rounded-2xl overflow-hidden opacity-90">
          <img
            src={slides[rightIndex].img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
