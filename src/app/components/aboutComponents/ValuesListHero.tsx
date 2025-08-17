// components/ValuesListHero.tsx

export default function ValuesListHero() {
  // Update these with your actual icon image paths:
  const values = [
    {
      icon: "/about/innovation.svg",
      heading: "Innovation",
      subtitle: "Innovative Compliance Solution",
      desc: "We are passionate about pushing the boundaries of technology and exploring new frontiers in AI.",
    },
    {
      icon: "/about/excellence.svg",
      heading: "Excellence",
      subtitle: "Excellent Service",
      desc: "We strive for the highest standards in everything we do, from compliance analysis to customer service.",
    },
    {
      icon: "/about/collaboration.svg",
      heading: "Collaboration",
      subtitle: "Collaborative tool for teams",
      desc: "We believe that the best results come from working together, lexbolt ensures proper cooperation within the team.",
    },
    {
      icon: "/about/integrity.svg",
      heading: "Integrity",
      subtitle: "Legal and Friendly",
      desc: "We are committed to ethical practices and transparency in all our operations.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Tag */}
      <div className="mb-5">
        <span className="inline-flex items-center gap-1 border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold shadow">
          <img
              src="/about/star.svg"
              alt="star"
              className="w-6 h-6"
            /> Our Values
        </span>
      </div>
      {/* Header */}
      <h1 className="text-black text-3xl sm:text-4xl font-bold mb-2 leading-tight">
        The Innovation Behind
      </h1>
      <h2 className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-8 leading-tight">
        Your Regulations
      </h2>
      {/* Values List */}
      <div className="flex flex-col gap-0">
        {values.map((value, i) => (
          <div
            key={value.heading}
            className={`flex items-start py-5 border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}
          >
            <img
              src={value.icon}
              alt={value.heading}
              className="w-8 h-8 mr-5 mt-1"
            />
            <div className="flex flex-col flex-1">
              <span className="text-gray-600 text-lg">{value.heading}</span>
            </div>
            <div className="flex flex-col flex-[2] ml-7">
              <span className="text-xs sm:text-sm italic text-gray-500 mb-1">
                {value.subtitle}
              </span>
              <span className="text-black text-sm sm:text-base font-normal pr-16">
                {i === 1 || i === 2
                  ? <b>{value.desc.split(" ")[0]}</b> + " " + value.desc.split(" ").slice(1).join(" ")
                  : value.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
