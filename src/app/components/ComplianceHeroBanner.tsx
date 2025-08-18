"use client";

import React from "react";

export default function ComplianceHeroBanner() {
  return (
    <section className="w-full relative bg-[#F6F6F6]/60 rounded-[32px] max-w-6xl mx-auto mt-14 p-6 md:p-12 flex flex-col md:flex-row gap-10 items-stretch">
      <div className=" w-full max-w-6xl px-4 py-10 text-center overflow-hidden flex flex-col items-center">
        {/* Top left dots image */}
        <img
          src="/img/dots.svg"
          alt="Decorative Dots"
          className="absolute left-0 top-0 w-20 h-20 pointer-events-none select-none"
        />
        {/* Bottom right shapes image */}
        <img
          src="/img/decorative.png"
          alt="Decorative Shape"
          className="absolute right-0 bottom-0 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none select-none"
        />

        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-black mb-2 leading-tight ">
          Transform your
          <span className="bg-[#FF6600] text-white px-3 py-1 rounded-md text-2xl sm:text-3xl md:text-4xl font-extrabold inline-block">
            Compliance
          </span>
          From
          <br />
          reactive to proactive.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg font-medium mb-7 mt-2">
          Lexbolt Is Hub For Managing All Regulations Professionally And
          Efficiently
        </p>

        <div className="relative inline-flex items-center">
          <button className="flex items-center text-sm cursor-pointer gap-2 bg-[#FF5C1A] text-white font-semibold px-2 md:pl-4 py-1 rounded-full shadow-lg hover:bg-orange-500 transition relative">
            Contact Sales Team
            <span className="ml-2 flex-shrink-0">
              <img
                src="/img/arrowrighticonwhite.svg"
                alt="Icon"
                className="w-12 h-12 object-contain"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
