"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesScrollableRow() {
  const images = [
    "/about/abouts.png",
    "/about/about1.png",
    "/about/about2.png",
    "/about/about3.png",
  ];

  // Double the array for smooth infinite scroll effect
  const allImages = [...images, ...images, ...images, ...images];

  // Animation distance calculation based on max (desktop) width + gap
  const ITEM_WIDTH = 230;
  const ITEM_GAP = 24; // gap-6
  const MOVE_X = images.length * (ITEM_WIDTH + ITEM_GAP);

  return (
    <div className="w-full  mx-auto px-4 py-6 bg-white overflow-x-auto hide-scrollbar">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: [0, -MOVE_X] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // adjust for preferred speed
          ease: "linear",
        }}
      >
        {allImages.map((src, i) => (
          <div
            key={i}
            className={`
              flex-shrink-0 rounded-2xl overflow-hidden
              w-[140px] h-[140px]
              sm:w-[180px] sm:h-[180px]
              md:w-[200px] md:h-[200px]
              lg:w-[230px] lg:h-[230px]
            `}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-contain rounded-2xl bg-white"
              draggable={false}
              width={230}
              height={230}
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
