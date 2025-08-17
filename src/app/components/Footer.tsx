"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeOut },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 px-6 md:px-20 py-10 border-t border-gray-200">
      {/* Top part */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mb-6 text-sm font-semibold text-center md:text-left"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/img/lexbolttLogo.svg"
              alt="Logo"
              width={200}
              height={80}
              priority
              className="w-[90px] h-auto"
            />
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
            
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        <div className="text-white text-xs">©2025 Lexboltt. All Rights Reserved.</div>
      </motion.div>

      <hr className="border-white mb-8" />

      {/* Middle part */}
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-8 items-center md:items-start text-center md:text-left"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
      >
        {/* Left: Newsletter */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
          <div className="w-full max-w-md px-4 py-6 rounded-[16px] flex flex-col items-center md:items-start gap-2">
            <h3 className="text-md text-white font-medium">Subscribe to lexboltt.ai</h3>

            <form className="flex w-full max-w-md mx-auto bg-[#F35418] rounded-full overflow-hidden shadow items-center border">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-grow px-6 py-4 bg-transparent text-white placeholder-white/60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-5 py-3 rounded-full transition hover:bg-orange-100"
                style={{ marginRight: "4px", marginTop: "2px", marginBottom: "2px" }}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Right: Explore & Resources */}
        <div className="w-full md:w-[60%] flex flex-col sm:flex-row justify-center md:justify-end gap-10 text-center md:text-left">
          <div>
            <h4 className="font-medium mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="hover:text-gray-300 cursor-pointer">Solutions</li>
              <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white">Solutions</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-gray-300 cursor-pointer">Account Management</li>
              <li className="hover:text-gray-300 cursor-pointer">Sales Tracking</li>
              <li className="hover:text-gray-300 cursor-pointer">Employee Integration</li>
              <li className="hover:text-gray-300 cursor-pointer">Analytics Dashboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-gray-300 cursor-pointer">hello@lexbolt.ai</li>
              <li className="hover:text-gray-300 cursor-pointer">Bengaluru, India / Remote Global</li>
              <li className="hover:text-gray-300 cursor-pointer">Terms of Service</li>
              <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
