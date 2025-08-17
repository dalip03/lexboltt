'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.span
          className="inline-block border border-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.span>
        <motion.h2
          className="text-black text-2xl md:text-3xl font-semibold mb-2 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Everything you need to know about using lexbolt.ai to take your work
          from law to launch. Find quick answers to common queries below
        </motion.p>
        <div className="w-full flex flex-col gap-8">
          {FAQS.map((item, idx) => (
            <motion.div
              key={item.q}
              className="rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <button
                className="flex w-full items-center justify-between px-5 py-5 outline-none focus:outline-none text-left"
                onClick={() => setOpenIdx(idx === openIdx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-black text-[15px] font-medium">
                  {item.q}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    className="px-5 pb-5 text-gray-400 text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
