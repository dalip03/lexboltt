"use client";

import React, { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      form.reset();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            regulatory workflows.
          </div>
        </div>

        <div className="mb-4">
          <h4 className="uppercase text-[18px] mb-1">VISIT US</h4>
          <p className="text-[16px]">
            450 Bath Road, Longford, <br /> Heathrow, London, UB7 0EB
          </p>
        </div>

        <div>
          <h4 className="uppercase text-[18px] mb-1">GET IN TOUCH</h4>
          <div className="text-[16px]">hello@lexbolt.ai</div>
          <div className="text-[16px]">+44 20 8757 5700</div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center mt-1">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-200/20 rounded-xl border border-gray-200 md:p-8 p-4 flex flex-col gap-6"
        >
          {/* Success */}
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm">
              ✅ Your information has been received. We’ll reach out within 24
              hours.
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm">
              ❌ {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                name="firstName"
                required
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                placeholder="eg. John"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Last Name</label>
              <input
                name="lastName"
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                placeholder="eg. Lee"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                name="phone"
                required
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                placeholder="+966 543 290000"
              />
            </div>

            <div>
              <label className="block text-xs mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
                placeholder="hello@yourcompany.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              name="subject"
              required
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
              placeholder="Write your subject"
            />
          </div>

          <div>
            <label className="block text-xs mb-1">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border border-black/20 rounded-md px-4 py-2 text-sm"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white rounded-md font-semibold py-3 px-4 mt-2 transition w-full disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
