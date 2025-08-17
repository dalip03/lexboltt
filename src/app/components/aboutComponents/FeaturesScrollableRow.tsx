"use client";
export default function ImagesScrollableRow() {
  const images = [
    "/about/abouts.png",
    "/about/about1.png",
    "/about/about2.png",
    "/about/about3.png",
    "/about/about4.png",
    "/about/about1.png",
    "/about/abouts.png",
  ];

  return (
    <div className="w-full py-6 bg-white">
      {/* Hide native scrollbar using Tailwind and custom CSS */}
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="inline-flex gap-6 px-2">
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[230px] h-[175px] rounded-2xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Add to your CSS or global styles */}
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
