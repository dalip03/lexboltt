// ContactUsPage.js (React/Next.js - Tailwind CSS Example)
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen text-black flex flex-col lg:flex-row items-stretch px-10 py-12 gap-8">
      {/* Left Info Section */}
      <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-16">
        <div className="mb-8 tracking-widest text-black text-xs font-semibold">
          CONTACT US
        </div>
        <div className="mb-8">
          <h2 className="text-3xl md:text-[56px] font-light leading-snug">
            <span className="font-medium text-black">
              Let’s Create together
            </span>
            <br />
            <span className="font-medium text-primary">
              Wonderfull Project.
            </span>
          </h2>
          <div className="mt-6 text-black text-[16px] max-w-md">
            At Lexbolt, we blend advanced AI with real-world automotive
            compliance to deliver faster, smarter regulatory workflows. From
            instant document parsing to proactive change tracking and
            integration into your engineering tools, everything we build is
            designed to move your team forward efficiently and compliantly.
          </div>
        </div>
        {/* Visit Us */}
        <div className="mb-6">
          <h4 className="uppercase text-[18px] text-black mb-1">VISIT US</h4>
          <p className="text-[16px] text-black">
            450 Bath Road, Longford, Heathrow,
            <br />
            London, UB7 OEB
          </p>
        </div>
        {/* Get in Touch */}
        <div>
          <h4 className="uppercase text-[18px] text-black mb-1">
            GET IN TOUCH
          </h4>
          <div className="text-[16px] text-black">hello@lexbolt.ai</div>
        </div>
      </div>
      {/* Right Form Section */}
      <div className="flex-1 flex items-center">
        <form className="w-full bg-gray-200/20 rounded-xl border border-gray-200 p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1 text-black">
                First Name
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-black placeholder-gray-600"
                type="text"
                placeholder="eg. john"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">
                Last Name
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-black placeholder-gray-600"
                type="text"
                placeholder="eg. lee"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">
                Phone Number
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-black placeholder-gray-600"
                type="text"
                placeholder="eg. +966 (0) 543-2900000"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-400">Email</label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-black placeholder-gray-600"
                type="email"
                placeholder="eg. hello@yourcompany.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1 text-black">Subject</label>
            <input
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-white placeholder-gray-600"
              type="text"
              placeholder="e.g. Write your subject here"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-black">Message</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm text-white placeholder-gray-600"
              placeholder="Write your Message detailed here"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-md font-semibold py-3 px-4 mt-2 hover:bg-primary/90 cursor-pointer transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
