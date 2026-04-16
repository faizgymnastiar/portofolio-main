"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FaReact, FaNodeJs, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiArduino,
  SiMysql, SiCanva, SiAdobepremierepro, SiAdobeaftereffects,
} from "react-icons/si";

// === Variants ===
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const simpleFade = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  const techIcons = [
    { icon: <FaReact className="text-[#61DBFB]" />, label: "React" },
    { icon: <FaNodeJs className="text-[#3C873A]" />, label: "Node.js" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind" },
    { icon: <FaPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <FaFigma className="text-[#F24E1E]" />, label: "Figma" },
    { icon: <SiAdobephotoshop className="text-[#31A8FF]" />, label: "Photoshop" },
    { icon: <SiAdobeillustrator className="text-[#FF9A00]" />, label: "Illustrator" },
    { icon: <SiAdobepremierepro className="text-[#9999FF]" />, label: "Premiere Pro" },
    { icon: <SiAdobeaftereffects className="text-[#AE81FF]" />, label: "After Effects" },
    { icon: <SiArduino className="text-[#00979D]" />, label: "Arduino" },
    { icon: <SiMysql className="text-[#4479A1]" />, label: "MySQL" },
    { icon: <SiCanva className="text-[#00C4CC]" />, label: "Canva" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
      id="hero"
    >
      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
        className="text-xl md:text-2xl font-semibold text-white"
      >
        👋 Hello, I’m
      </motion.p>

      <motion.img
        src="/assets/Faiz.gif"
        alt="Wave GIF"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.2}
        className="w-64 h-64 mt-2"
      />

      <motion.h1
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.4}
        className="text-4xl md:text-6xl font-bold text-white mt-2"
      >
        Faiz Gymnastiar Haryogya
      </motion.h1>

      <motion.p
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.6}
        className="mt-4 text-lg md:text-xl text-gray-300"
      >
        IT Developer • Graphic Designer • IoT Enthusiast • UI/UX Designer
      </motion.p>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.8}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
        >
          Explore Projects
        </a>
        <a
          href="#about"
          className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
        >
          About Me
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
        >
          Contact
        </a>
      </motion.div>

      <motion.div
        variants={simpleFade}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
        className="mt-12 w-full max-w-4xl px-4"
      >
        <div className="rounded-xl backdrop-blur-md bg-white/10 border border-white/50 shadow-md overflow-hidden p-4">
          <div className="flex gap-10 animate-marquee items-center whitespace-nowrap w-max">
            {techIcons.concat(techIcons).map((tech, index) => (
              <div
                key={index}
                className="text-4xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                title={tech.label}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
