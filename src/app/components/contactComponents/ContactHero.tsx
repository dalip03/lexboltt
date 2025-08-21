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
      desc: "Our solutions grow with your organization's needs.",
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
    <section className="w-full mx-auto py-12 px-2 overflow-x-hidden">
      {/* Header */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-8 gap-0 items-center px-0 md:px-20 mb-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="md:col-span-3 flex flex-col justify-center">
       
          <motion.h1
            className="text-black font-bold text-3xl md:text-5xl leading-tight mb-1"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.17 }}
            viewport={{ once: true }}
          >
            Streamlining
            <br />
            Your Regulations
          </motion.h1>
        </div>
        <motion.div
          className="md:col-span-5 flex flex-col items-end justify-start"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-sm md:text-base max-w-md text-right ml-auto mb-7">
            We deliver tailored AI compliance solutions designed to scale your
            regulatory workflows and drive measurable operational results.
          </p>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <div className="flex items-center justify-center mt-2 gap-2 relative z-0 w-full">
        {/* Left thumbnail */}
        <motion.div
          className="hidden md:flex flex-shrink-0 w-[44vw] max-w-[370px] h-[33vw] max-h-[260px] rounded-2xl overflow-hidden opacity-90"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={slides[leftIndex].img}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
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
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.89, y: -18 }}
            transition={{ duration: 0.43 }}
            className="relative w-[96vw] max-w-[470px] md:max-w-[600px] h-[53vw] max-h-[320px] md:max-h-[360px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg z-10"
          >
            {/* Image */}
            <div className="w-full h-full relative">
              <img
                src={slides[current].img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-end justify-between p-6 ">
                {/* Left side - Heading */}
                {slides[current].label && (
                  <div className="z-20">
                    <h3 className="relative text-white font-bold text-2xl md:text-3xl mb-2 drop-shadow-lg">
                      {slides[current].label}
                    </h3>
                  </div>
                )}
                
                {/* Right side - Small tilted white div with description */}
                {slides[current].desc && (
                  <div className="absolute z-20 ] -bottom-2 right-0">
                    <div 
                      className="bg-white p-3 pl-4 py-4  shadow-md max-w-[300px] transform rotate-1"
                      style={{
                        clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)'

                      }}
                    >
                      <p className="text-gray-700 text-[10px] font-medium leading-tight">
                        {slides[current].desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
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
        <motion.div
          className="hidden md:flex flex-shrink-0 w-[44vw] max-w-[370px] h-[33vw] max-h-[260px] rounded-2xl overflow-hidden opacity-90"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={slides[rightIndex].img}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}