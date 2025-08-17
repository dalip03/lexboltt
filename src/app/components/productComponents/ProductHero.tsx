// components/ProductHero.tsx

export default function ProductHero() {
  return (
    <section className="w-full max-w-6xl mx-auto pt-12 pb-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left side: Headline & text */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1 className="text-black font-extrabold text-3xl sm:text-5xl mb-3 leading-tight">
          Powering the Future <br />
          <span className="relative inline-block">
            of{" "}
            <span className="text-black">
              Regulations
              {/* Decorative orange dots underline */}
              <span className="absolute -left-2 -bottom-1 h-1 w-[calc(100%+16px)] flex items-center pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-[#FF6600] rounded-full mx-1"
                  />
                ))}
              </span>
            </span>
          </span>
        </h1>
        <p className="text-gray-600 mt-2 text-base mb-8">
          LexBolt is more than software—it&aposs an intelligent assistant for your compliance team.
        </p>
      </div>
      {/* Right side: Single full image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src="/product/producthero.png"
          alt="Product Dashboard"
          className="w-[320px] h-[260px] md:w-[410px] md:h-full rounded-3xl object-cover "
        />
      </div>
    </section>
  );
}
