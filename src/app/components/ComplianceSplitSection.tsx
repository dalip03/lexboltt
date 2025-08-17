import React from "react";

const ComplianceTiltSection: React.FC = () => (
  <section className="w-full py-10 px-2 sm:py-16 sm:px-4">
    <div className="flex flex-col md:flex-row min-h-[420px] rounded-[24px] overflow-hidden my-8 relative">
      {/* Orange Panel */}
      <div
        className="
          flex flex-col justify-center
          px-5 py-8 sm:px-10 sm:py-12 text-white font-sans 
          min-h-[320px] md:min-h-[420px]
          z-10 md:-mr-40
          w-full md:w-1/2
        "
        style={{
          background: "#FF5C1A",
          clipPath:
            "polygon(0 0, 100% 0, 80% 100%, 0 100%)"
        }}
      >
        <h2 className="font-bold text-2xl sm:text-3xl leading-tight mb-5">
          Transform your compliance
          <br />
          from reactive to proactive
        </h2>
        <p className="text-white text-opacity-80 text-base sm:text-md mb-7 sm:mb-9">
          AourApp Is Hub For Managing All Regulations Professionally
          <br />
          And Efficiently
        </p>
        <div className="flex gap-3 sm:gap-6 mt-2 flex-wrap">
          <button className="bg-white text-[#FF5C1A] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow hover:bg-orange-50 transition text-base sm:text-lg w-full sm:w-auto mb-2 sm:mb-0">
            Request A Demo
          </button>
          <button className="border border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold bg-transparent hover:bg-white hover:text-[#FF5C1A] transition text-base sm:text-lg w-full sm:w-auto">
            Contact Sales
          </button>
        </div>
      </div>

      {/* White Panel */}
      <div
        className="
          flex-grow relative min-h-[240px] md:min-h-[420px] bg-white overflow-hidden 
          w-full md:w-1/2
        "
        style={{
          clipPath:
            "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
        }}
      >
        <img
          src="/img/transform.png"
          alt="Dashboard"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default ComplianceTiltSection;
