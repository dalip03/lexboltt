'use client';
export default function TeamHero() {
  const members = [
    {
      image: "/team/manjunathan.jpg",
      role: "CEO / Co Founder",
      name: "Manjunathan B",
      desc: "Drives product vision by combining deep regulatory knowledge.",
      cardBg: "bg-[#FBE1DC]",
    },
    {
      image: "/team/abhinandhan.jpg",
      role: "CTO / Co Founder",
      name: "Abinandhan S",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#FBE1DC]",
    },
    {
      image: "/team/ananya.jpg",
      role: "AI Advisor",
      name: "Ananya Mehta",
      desc: "Drives product vision by combining deep regulatory knowledge.",
      cardBg: "bg-[#FBE1DC]",
    },
    {
      image: "/team/rohan.jpg",
      role: "Product Manager",
      name: "Rohan Iyer",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#FBE1DC]",
    },
     {
      image: "/team/rohan.jpg",
      role: "Product Manager",
      name: "Rohan Iyer",
      desc: "Architects scalable backend systems and ensures seamless integration.",
      cardBg: "bg-[#FBE1DC]",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 relative">
      {/* Tag */}
      <div className="mb-3 text-center">
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
          Lexbolt Team
        </span>
      </div>

      {/* Headline and description */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#232540] mb-2">
        Meet Our Team
      </h1>
      <p className="text-center text-gray-600 max-w-md mx-auto mb-8 text-base">
        A dedicated team of experts using tech and smart strategy to simplify regulations for all
      </p>

      {/* Scrollable cards with gradient edge fades */}
      <div className="relative w-full">
        {/* Left/right edge fade gradients */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-white/0" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-white/0" />

        <div className="overflow-x-auto whitespace-nowrap hide-scrollbar pb-3">
          <div className="inline-flex gap-6 px-1 md:px-2">
            {members.map((member, idx) => (
              <div
                key={member.name}
                className="flex-shrink-0 w-[260px] sm:w-[270px] md:w-[280px] h-[400px] rounded-3xl overflow-hidden relative flex flex-col justify-end shadow-lg"
              >
                {/* Card Background */}
                <div className={`${member.cardBg} w-full h-full absolute top-0 left-0`} />
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block bg-white text-gray-700 font-semibold text-xs px-3 py-1 rounded-full shadow border border-gray-200">
                    {member.role}
                  </span>
                </div>
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[65%] object-cover object-top relative z-10"
                />
                {/* Orange footer info */}
                <div className="absolute bottom-0 left-0 w-full bg-[#F1612C] rounded-b-3xl px-6 py-6 z-20 flex flex-col gap-2">
                  <h3 className="text-white font-bold text-base">{member.name}</h3>
                  <p className="text-white text-xs opacity-80 border h-full">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* View all button */}
      <div className="flex w-full justify-center mt-7">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700 text-sm shadow transition border border-gray-300">
          View all
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path d="M14 6l6 6-6 6M4 12h16" stroke="#232540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Hide scrollbar visually */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}
