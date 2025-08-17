// components/ComplianceManagementHero.tsx

export default function ComplianceManagementHero() {
  const features = [
    "Expert-Curated Model",
    "Seamless Export",
    "Interactive System",
    "Flexible Management",
    "24/7 Access to Support",
    "Diverse Use Cases",
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left side: Single image with experience badge */}
      <div className="flex-1 flex justify-end items-end relative w-full">
        <img
          src="/product/producttransform.png"
          alt="Consultant"
          className="w-[350px] md:w-[420px] h-[420px] rounded-3xl object-cover"
        />
      </div>
      {/* Right side: Text */}
      <div className="flex-1 flex flex-col items-start md:pl-10">
        <span className="inline-block bg-[#fde8e5] text-[#fc7e41] font-semibold text-xs px-3 py-1 mb-3 rounded-full">
          Transform Regulations
        </span>
        <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-1 leading-tight">
          Unlock Compliance
          <br />
          Management
        </h1>
        <span className="text-gray-600 text-lg mb-4 font-medium">
          Like Never Before
        </span>
        {/* Features Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 bg-white border border-gray-200 rounded-2xl p-5 mb-7 w-full max-w-lg">
          {features.map((feature, i) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-[16px] text-gray-700"
            >
              <img src="/product/check.svg" alt="" className="w-5 h-5" />
              {feature}
            </div>
          ))}
        </div>
        {/* Explore Button */}
        <button className="flex items-center gap-2 bg-[#FC7D3F] text-white pl-7 pr-2 py-2 rounded-full font-semibold shadow hover:bg-[#e75d00] transition text-base">
          Explore
          <span className="ml-2">
            <img
              src="/product/right.svg"
              alt="Arrow Right"
              className="w-10 h-10 object-contain"
            />
          </span>
        </button>
      </div>
    </section>
  );
}
