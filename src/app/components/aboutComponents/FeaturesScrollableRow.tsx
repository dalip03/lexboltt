"use client";

import { motion } from "framer-motion";

export default function ImagesScrollableRow() {
  const images = [
    "/about/abouts.png",
    "/about/about1.png",
    "/about/about2.png",
    "/about/about3.png",
    "/about/about4.png",
    "/about/abouts.png",
  ];

  return (
    <div className="w-full py-6 bg-white">
      {/* Hide native scrollbar using Tailwind and custom CSS */}
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="inline-flex gap-6 px-2">
          {images.map((src, i) => (
            <motion.div
              key={i}
className="flex-shrink-0 w-[70vw] max-w-[320px] h-[240px] rounded-2xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-contain rounded-2xl"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Add to your CSS or global styles */}
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
  );
}
