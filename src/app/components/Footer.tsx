"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal"; // make sure path is correct

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeOut },
};

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-primary text-gray-400 px-6 md:px-20 py-10 border-t border-gray-200">
      {/* Top part */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between  text-sm font-semibold text-center md:text-left"
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

          {/* Social img */}
          <div className="flex gap-4">
            <img src="/img/instagram.svg" alt="Instagram" className="w-10 h-10 cursor-pointer hover:opacity-80" />
            <img src="/img/linkedin.svg" alt="LinkedIn" className="w-10 h-10 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        <div className="text-white text-xs">©2025 Lexboltt. All Rights Reserved.</div>
      </motion.div>

      <hr className="border-white mb-6" />

      {/* Middle part */}
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-8 items-center md:items-start text-center md:text-left"
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
      >
        {/* Left: Newsletter */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start">
          <div className="w-full max-w-md px-4 py-6 rounded-[16px] flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold">
              <h3 className="text-md text-white font-medium">Subscribe to lexboltt.ai</h3>
              
            <form className="flex w-full max-w-md mx-auto pr-1 bg-[#F35418] rounded-full overflow-hidden shadow items-center border">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-grow pl-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-4  py-2 rounded-full transition hover:bg-orange-100"
              >
                Sign up
              </button>
            </form>
                  <Link href="/" className="font-bold font-serif">
                    <Image
                      src="/img/footericon2.svg"
                      alt="Logo"
                      width={80}
                      height={20}
                    />
                  </Link>
                </div>{" "}
            
          </div>
        </div>

        {/* center explore */}
        <div className="w-full md:w-[30%] flex justify-center ">
          <div>
            <h4 className="font-medium mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/product" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="w-full md:w-[35%] flex flex-col sm:flex-row justify-center md:justify-end gap-10 text-center md:text-left">
          <div>
            <h4 className="font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 text-white/60">
              <li
                className="hover:text-gray-300 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                hello@lexbolt.ai
              </li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setShowModal(true)}>
                450 Bath Road, Longford, <br/> Heathrow, Lomdon, UB7 OEB
              </li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setShowModal(true)}>
                Terms of Service
              </li>
              <li className="hover:text-gray-300 cursor-pointer" onClick={() => setShowModal(true)}>
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </footer>
  );
};

export default Footer;
