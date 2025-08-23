// ContactUsPage.js (React/Next.js - Tailwind CSS Example)
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen text-black flex flex-col lg:flex-row items-stretch px-6 py-12 gap-8">
      {/* Left Info Section */}
      <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-16">
        <div className="mb-8 tracking-widest text-white text-xl font-semibold">
          CONTACT US
        </div>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-light leading-snug">
            <span className="font-medium text-white">Let’s Create together</span><br />
            <span className="font-medium text-[#F5D49B]">Wonderfull Project.</span>
          </h2>
          <div className="mt-6 text-gray-400 text-sm max-w-md">
            Lexbolt is a Saudi company specialized in designing awards, shields, models, gifts, branding, media production, and event organization.
          </div>
        </div>
        {/* Visit Us */}
        <div className="mb-6">
          <h4 className="uppercase text-xs text-gray-400 mb-1">VISIT US</h4>
          <p className="text-sm text-gray-300">
            6844 Al Abu Haimed Street - Al Nuzha District,<br />
            Riyadh RHNA6844, Kingdom of Saudi Arabia
          </p>
        </div>
        {/* Get in Touch */}
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-1">GET IN TOUCH</h4>
          <div className="text-sm text-gray-300">info@rooh.sa</div>
          <div className="text-sm text-gray-300">+966 (0) 1 123 444 65</div>
          <div className="text-sm text-gray-300">+966 (0) 8 001 244 111</div>
        </div>
      </div>
      {/* Right Form Section */}
      <div className="flex-1 flex items-center">
        <form className="w-full bg-black rounded-xl border border-gray-700 p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1 text-gray-400">First Name</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="text"
                placeholder="eg. Mohamed"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Last Name</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="text"
                placeholder="eg. AL-GHAMEDI"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Phone Number</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="text"
                placeholder="eg. +966 (0) 543-2900000"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Email</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="email"
                placeholder="eg. hello@yourcompany.com"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Date of visiting Showroom</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="date"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Time</label>
              <input
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
                type="time"
                placeholder="--:--"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1 text-gray-400">Subject</label>
            <input
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
              type="text"
              placeholder="e.g. Write your subject here"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-gray-400">Message</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500"
              placeholder="Write your Message detailed here"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B59762] text-white rounded-md font-semibold py-3 px-4 mt-2 hover:bg-[#9d8354] transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
