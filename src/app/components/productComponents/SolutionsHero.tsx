// components/SolutionsHero.tsx

export default function SolutionsHero() {
  return (
    <section className="w-full max-w-4xl mx-auto pt-12 pb-10 px-4 flex flex-col items-center">
      {/* Tag */}
      <span className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">
        Our Solutions
      </span>
      {/* Heading */}
      <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-2 leading-tight">
        Industry Leading Solutions
      </h1>
      {/* Subheading */}
      <p className="text-gray-600 text-center mb-5 sm:mb-8 max-w-2xl">
        Lexbolt delivers smart and efficient regulations solutions, combining technology and expertise to simplify shipping products from low to launch for businesses
      </p>
      {/* Buttons */}
      <div className="flex gap-4 mb-7">
        <button className="flex items-center gap-2 bg-[#FC7D3F] text-white pl-7 pr-2 py-2 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base">
          Contact us
           <span className="ml-1">
            <img
              src="/product/right.svg"
              alt="Arrow Right"
              className="w-10 h-10 object-contain"
            />
          </span>
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-100 text-gray-700 pl-7 pr-2 py-2 rounded-full font-semibold  hover:bg-gray-100 transition text-base">
          Get Started
           <span className="ml-1">
            <img
              src="/product/whiteright.svg"
              alt="Arrow Right"
              className="w-10 h-10 object-contain"
            />
          </span>
        </button>
      </div>
      {/* Central image with orange shadow beneath */}
      <div className="w-full flex items-center justify-center relative">
        {/* Orange shadow effect */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[330px] h-[110px] md:w-[590px] md:h-[500px] rounded-full blur-2xl opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, #FC7D3F 40%, transparent 85%)"
          }}
        />
        <img
          src="/product/productWheel.png"
          alt="Solutions Diagram"
          className="relative w-[365px] h-[365px] md:w-[420px] md:h-[420px] object-cover"
        />
      </div>
    </section>
  );
}
