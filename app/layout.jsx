"use client";

import '../styles/globals.css';
import { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <motion.div
          style={{ backgroundImage: bgImage }}
          className="fixed inset-0 -z-10 h-full w-full"
        />
        {children}
      </body>
    </html>
  );
}
