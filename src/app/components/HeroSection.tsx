// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="min-w-[1240px] min-h-[700px] flex flex-col items-center justify-center bg-gradient-to-b from-[#FF875F] to-[#FFB394] rounded-[32px]  py-16 px-4 ">
      <div className="max-w-4xl w-full mx-auto text-center relative">
        <h1 className="font-sans font-bold text-white text-5xl md:text-6xl leading-tight mb-6 relative">
          Stay Ahead of Every
          <br />
          Regulation, Effortlessly
          {/* Blue 'V' badge */}
          <span className="absolute right-[-30px] top-[38px] bg-[#2B77F6] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg border-4 border-white shadow-lg select-none">
            V
          </span>
        </h1>
        <p className="font-sans text-white/80 text-lg md:text-xl mb-8">
          LexBolt Transforms Complex Automotive Regulations Into Clear,
          Structured Requirements
          <br />— So Your Team Can Act Faster, Stay Compliant, And Never Miss A
          Change.
        </p>
        <button className="bg-[#FF6C3D] hover:bg-[#ff4e06] text-white font-semibold font-sans rounded-full px-8 py-3 text-lg shadow-lg transition-colors mb-2">
          Get a Demo
        </button>
      </div>

      {/* Dashboard image + Card overlay */}
      <div className="relative flex justify-center w-full mt-12">
        <img
          src="/dashboard.png" // update with your actual image file path
          alt="Dashboard Screenshot"
          className="w-[800px] max-w-full rounded-xl shadow-2xl border-4 border-white"
        />

        {/* Document Reviews card */}
        <div className="absolute right-24 top-10 bg-white rounded-xl shadow-2xl p-5 w-56 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-2">
            <span className="font-sans font-semibold text-gray-900">
              Document Reviews
            </span>
            <span className="font-sans text-xs text-gray-400 ml-2">Today</span>
          </div>
          {/* Circular chart */}
          <svg viewBox="0 0 40 40" width="60" height="60" className="my-2">
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="#FFB394"
              strokeWidth="7"
              strokeDasharray="125"
              strokeDashoffset="60"
            />
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="#FF6C3D"
              strokeWidth="7"
              strokeDasharray="125"
              strokeDashoffset="0"
            />
          </svg>
          <div className="flex flex-col gap-1 w-full mt-2">
            <div className="flex items-center text-sm text-gray-700 font-medium">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1"
                style={{ background: "#FF6C3D" }}
              ></span>
              Approved: 500
            </div>
            <div className="flex items-center text-sm text-gray-700 font-medium">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1"
                style={{ background: "#FFB394" }}
              ></span>
              Pending: 300
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
