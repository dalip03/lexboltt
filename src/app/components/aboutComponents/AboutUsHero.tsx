// components/AboutUsHero.tsx

import Image from "next/image";

export default function AboutUsHero() {
  return (
    <section className="w-full min-h-[380px] flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pl-4 pt-8 lg:pt-20 lg:pb-10 mx-auto max-w-[1200px] ">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
        {/* Top Tag */}
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow">
            Powering fast moves
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
          Driven By Innovation <br />
          Built For Fast Regulations
        </h1>
        {/* Subheading */}
        <p className="text-gray-500 text-base mb-8 max-w-lg">
          Seamlessly manage deliveries with real-time tracking, cost-effective rates, and unmatched reliability across the globe
        </p>
        {/* CTA Button + Icon */}
        <div className="flex items-center gap-7">
          <button className="flex items-center gap-2 bg-[#FF6B00] text-white px-7 py-2.5 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base">
            Get a Demo
            <span className="ml-1">{/* Arrow Icon */}
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M16 12H4m12 0l-5-5m5 5l-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
         
        </div>
      </div>

      {/* Right Side - Dashboard Image */}
      <div className="flex-1 flex justify-center items-center w-full ">
        <Image
          src="/about/aboutHero.svg"
          alt="Dashboard"
          width={440}
          height={390}
          className="rounded-xl object-cover"
          priority
        />
      </div>
    </section>
  );
}
