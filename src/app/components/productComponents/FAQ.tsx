'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is LexBolt.ai?",
    a: "LexBolt.ai is an AI-powered compliance assistant purpose-built for the automotive industry. It transforms complex regulatory documents into structured, actionable data, enabling teams to stay ahead on compliance and streamline workflows.",
  },
  {
    q: "What types of regulations does LexBolt support?",
    a: "LexBolt supports a broad spectrum of automotive and manufacturing regulations, including safety standards, environmental rules, quality certifications, government guidelines, and more. The platform adapts to diverse regulatory frameworks and evolving compliance needs.",
  },
  {
    q: "How does LexBolt extract data from documents?",
    a: "LexBolt uses advanced AI, machine learning, and natural language processing to automatically parse documents, identify key provisions, and extract relevant data points. This lets users turn lengthy and complex regulatory texts into clear insights and tasks in seconds.",
  },
  {
    q: "Can I compare different versions of a regulation?",
    a: "Yes, LexBolt includes smart version control features. You can compare different revisions of regulatory documents, highlight changes, and track updates, ensuring your business is always in compliance with the latest requirements.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.span
          className="inline-block border border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-semibold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.span>
        <motion.h2
          className="text-black text-2xl md:text-[56px] font-semibold mb-2 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-black mb-8 text-center"
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
