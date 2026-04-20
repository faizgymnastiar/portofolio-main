"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "IT Projects", path: "/projects/it" },
    { name: "Design Projects", path: "/projects/design" },
    { name: "IoT Projects", path: "/projects/iot" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold tracking-wider text-white cursor-pointer hover:text-fuchsia-400 transition">
            FAIZ<span className="font-light">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.name} href={link.path}>
                <span className="relative group text-sm font-medium transition-colors cursor-pointer block">
                  <span className={isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 font-bold' : 'text-gray-300 hover:text-white'}>
                    {link.name}
                  </span>
                  {isActive ? (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500" />
                  ) : (
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                  )}
                </span>
              </Link>
            );
          })}
          <Link href="/#about">
            <span className="px-5 py-2 text-sm font-semibold rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all">
              About Me
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-6 gap-6"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)}>
                <span className={`text-lg font-medium transition-colors ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 font-bold' : 'text-gray-300 hover:text-white'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
          <Link href="/#about" onClick={() => setIsOpen(false)}>
            <span className="px-6 py-2 text-base font-semibold rounded-full border border-white/30 text-white active:bg-white active:text-black">
              About Me
            </span>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
