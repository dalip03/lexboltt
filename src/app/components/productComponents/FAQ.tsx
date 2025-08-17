// components/FAQs.tsx
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "What is LexBolt.ai?",
    a: "LexBolt is an AI-powered compliance assistant designed specifically for the automotive industry. It converts complex regulatory documents into structured, actionable data to help teams stay ahead of compliance requirements.",
  },
  {
    q: "What types of regulations does LexBolt support?",
    a: "The ideal duration varies per individual, but most successful mentorships last for at least a few months to a year for the best results.",
  },
  {
    q: "How does LexBolt extract data from documents?",
    a: "You may schedule regular sessions as per your mentorship plan and mutual availability with your mentor.",
  },
  {
    q: "Can I compare different versions of a regulation?",
    a: "You can start whenever you feel ready for focused, consistent improvement and guidance towards your goals.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">
          FAQ
        </span>
        <h2 className="text-black text-2xl md:text-3xl font-semibold mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Everything you need to know about using lexbolt.ai to take your work
          from law to launch. Find quick answers to common queries belowp
        </p>
        <div className="w-full flex flex-col gap-8">
          {FAQS.map((item, idx) => (
            <div key={item.q} className="rounded-lg shadow">
              <button
                className="flex w-full items-center justify-between px-5 py-5 outline-none focus:outline-none text-left"
                onClick={() => setOpenIdx(idx === openIdx ? null : idx)}
              >
                <span className="text-black text-[15px] font-medium">
                  {item.q}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-gray-400 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
