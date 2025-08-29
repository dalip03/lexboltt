"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Product", href: "/product" },
];

// Variants (static objects only — TS safe)
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  exit: { opacity: 0 },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%" },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
  exit: { opacity: 0, y: 18 },
};

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="inline-block">
            <Image
              src="/img/lexbolttLogo.svg"
              alt="IIPWorks Logo"
              width={200}
              height={80}
              priority
              className="w-[100px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-2 lg:space-x-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`px-3 lg:px-4 py-2 rounded-full text-[16px] font-medium transition cursor-pointer ${
                  pathname === item.href && pathname !== "/contact"
                    ? "bg-primary text-white"
                    : "text-black hover:bg-primary hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.div
          className="hidden md:block ml-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contactus"
            className={`text-[18px] font-semibold pl-4 py-1 px-1 rounded-full transition flex items-center gap-2 shadow ${
              pathname === "/contactus"
                ? "bg-primary text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            Contact Us
            <Image
              src="/img/abouticons.svg"
              alt="Arrow"
              width={48} // w-12 = 48px
              height={48} // h-12 = 48px
              className=" object-contain"
            />
          </Link>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-2">
          <motion.button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <Menu size={24} color="black" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-60"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-72 h-full bg-white z-120 shadow-lg p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  whileTap={{ scale: 0.9, rotate: 90 }}
                >
                  <X size={24} color="black" />
                </motion.button>
              </div>

              {/* Drawer Content */}
              <nav className="flex flex-col gap-3">
                {/* Drawer Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="flex items-center"
                >
                  <Link href="/" className="inline-block">
                    <Image
                      src="/img/lexbolttLogo.svg"
                      alt="Logo"
                      width={120}
                      height={40}
                      priority
                      className="h-auto w-auto max-h-40 mb-10"
                    />
                  </Link>
                </motion.div>

                {/* Staggered Menu Items */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-3"
                >
                  {menuItems.map((item) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
                          pathname === item.href
                            ? "bg-gray-200 text-black"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants}>
                    <Link
                      href="/contactus"
                       onClick={() => setIsOpen(false)}
                      className={`text-[18px] font-semibold pl-12 py-1 px-1 rounded-full transition flex items-center justify-between gap-2 shadow ${
                        pathname === "/contactus"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-black"
                      }`}
                    >
                      Contact Us
                      <Image
                        src="/img/abouticons.svg"
                        alt="Arrow"
                        width={48} // w-12 = 48px
                        height={48} // h-12 = 48px
                        className="object-contain"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
