'use client';

import { motion } from "framer-motion";

export default function ContactFormHero() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-10">
      <motion.div
        className="relative bg-primary rounded-2xl flex flex-col md:flex-row items-start justify-between px-7 py-10 min-h-[260px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Top Curve Image */}
        <motion.img
          src="/img/leftcurve.svg"
          alt="Left Curve"
          className="absolute left-0 top-0 w-24 h-24 rounded-tl-2xl pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        />
        {/* Right Top Curve Image */}
        <motion.img
          src="/img/rightcurve.svg"
          alt="Right Curve"
          className="absolute right-0 top-0 w-20 h-20 pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          viewport={{ once: true }}
        />
        {/* Bottom Center Curve Image */}
        <motion.img
          src="/img/downcurve.svg"
          alt="Bottom Curve"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-56 h-20 pointer-events-none opacity-30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          viewport={{ once: true }}
        />
        {/* Form content */}
        <motion.div
          className="flex-1 py-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.13 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2 leading-snug">
            Start Easing your
            <br />
            Regulations Today
          </h2>
          <p className="text-white text-sm mb-6 opacity-90 font-medium">
            Join lexbolt to access easy, regulated and sorted compliances!
          </p>
        </motion.div>
        {/* Form box */}
        <motion.form
          className="flex-1 flex flex-col gap-3 max-w-xs w-full md:ml-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src="/img/insta.svg"
              alt="User"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none opacity-80"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-white rounded-lg pl-10 pr-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none w-full"
            />
          </div>
          <div className="relative">
            <img
              src="/img/chat.svg"
              alt="Email"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none opacity-80"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-white rounded-lg pl-10 pr-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none w-full"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Type your message"
            className="bg-transparent border border-white rounded-lg px-4 py-2 text-white text-sm placeholder-white/80 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="bg-white text-primary w-40 font-semibold px-4 py-3 rounded-full shadow mt-2 hover:bg-orange-200 transition text-sm"
          >
            Submit form
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
