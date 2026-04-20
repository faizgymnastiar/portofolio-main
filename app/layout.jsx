"use client";

import '../styles/globals.css';
import { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700', '800'] });

const COLORS_TOP = ["#1E1B4B", "#064E3B", "#312E81", "#4C1D95"];
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const bgImage = useTransform(
    color,
    (c) => `radial-gradient(125% 125% at 50% 0%, #000 50%, ${c})`
  );

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        <motion.div
          style={{ backgroundImage: bgImage }}
          className="fixed inset-0 -z-10 h-full w-full opacity-70"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
