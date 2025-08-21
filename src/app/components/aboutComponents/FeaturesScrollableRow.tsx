"use client";

import { motion } from "framer-motion";

export default function ImagesScrollableRow() {
  const images = [
    "/about/abouts.png",
    "/about/about1.png",
    "/about/about2.png",
    "/about/about3.png",

  ];

  // Each image width + gap approx 236px (230 width + 6 gap)
  // Total width = number of images * 236
  const totalImgCount = images.length;
  const itemWidthWithGap = 236;
  const totalWidth = totalImgCount * itemWidthWithGap;

  return (
    <div className="w-full py-6 bg-white overflow-hidden">
      <motion.div
        className="flex gap-6"
        style={{ width: totalWidth * 2 }}
        animate={{ x: [0,-totalWidth] }} 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, 
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[230px] h-[230px] rounded-2xl overflow-hidden"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-contain rounded-2xl bg-white"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
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
