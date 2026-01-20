"use client";

import React, { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ❗ prevents page reload

    // TODO: API call can be added here later

    setSubmitted(true);

    // Optional: reset form fields
    e.currentTarget.reset();

    // Optional: auto-hide message after few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full text-black flex flex-col lg:flex-row items-center md:px-10 px-6 py-12 gap-12">
      {/* Left Info Section */}
      <div className="flex-1 flex flex-col justify-center pr-0 md:pr-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-[56px] font-bold md:leading-15">
            Partner with Us to Drive Compliance Forward
          </h2>
          <div className="mt-4 text-black text-[16px] max-w-2xl">
            At Lexbolt, we integrate advanced AI with automotive compliance
            expertise to deliver reliable, efficient, and future-ready
            regulatory workflows. Our solutions enable automated document
            processing, proactive regulatory change management, and seamless
            integration with engineering systems empowering your team to stay
            compliant while focusing on innovation.
          </div>
        </div>

        <div className="mb-4">
          <h4 className="uppercase text-[18px] text-black mb-1">VISIT US</h4>
          <p className="text-[16px] text-black">
            450 Bath Road, Longford, <br /> Heathrow, London, UB7 0EB
          </p>
        </div>

        <div>
          <h4 className="uppercase text-[18px] text-black mb-1">GET IN TOUCH</h4>
          <div className="text-[16px] text-black">hello@lexbolt.ai</div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center mt-1">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-200/20 rounded-xl border border-gray-200 md:p-8 p-4 flex flex-col gap-6"
        >
          {/* ✅ Success Message */}
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm">
              ✅ Your information has been received, and we will reach out to
              you within 24 hours.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1 text-black">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                type="text"
                placeholder="eg. john"
                required
              />
            </div>

            <div>
              <label className="block text-xs mb-1 text-black">Last Name</label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                type="text"
                placeholder="eg. lee"
              />
            </div>

            <div>
              <label className="block text-xs mb-1 text-black">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                type="text"
                placeholder="eg. +966 (0) 543-2900000"
                required
              />
            </div>

            <div>
              <label className="block text-xs mb-1 text-black">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                type="email"
                placeholder="eg. hello@yourcompany.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1 text-black">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
              type="text"
              placeholder="e.g. Write your subject here"
              required
            />
          </div>

          <div>
            <label className="block text-xs mb-1 text-black">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
              placeholder="Write your Message detailed here"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white rounded-md font-semibold py-3 px-4 mt-2 hover:bg-primary/90 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
