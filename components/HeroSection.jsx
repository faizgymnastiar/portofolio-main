"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact, FaNodeJs, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJsSquare,
  FaPalette, FaImage, FaVideo, FaFilm
} from "react-icons/fa";
import {
  SiTailwindcss, SiArduino,
  SiMysql, SiCanva,
} from "react-icons/si";
import Link from 'next/link';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const techIcons = [
    { icon: <FaReact className="text-[#61DBFB]" />, label: "React" },
    { icon: <FaNodeJs className="text-[#3C873A]" />, label: "Node.js" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind" },
    { icon: <FaPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <FaFigma className="text-[#F24E1E]" />, label: "Figma" },
    { icon: <FaImage className="text-[#31A8FF]" />, label: "Photoshop" },
    { icon: <FaPalette className="text-[#FF9A00]" />, label: "Illustrator" },
    { icon: <FaVideo className="text-[#9999FF]" />, label: "Premiere Pro" },
    { icon: <FaFilm className="text-[#AE81FF]" />, label: "After Effects" },
    { icon: <SiArduino className="text-[#00979D]" />, label: "Arduino" },
    { icon: <SiMysql className="text-[#4479A1]" />, label: "MySQL" },
    { icon: <SiCanva className="text-[#00C4CC]" />, label: "Canva" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center pt-24 overflow-hidden"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-1">
        {/* Left Side: Typography & Buttons */}
        <div className="flex flex-col items-start text-left z-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Available for Work</span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
          >
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-light italic">Vision</span> <br />
            Meets <span className="underline decoration-wavy decoration-blue-500/50 underline-offset-8">Code</span>.
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
            className="text-lg md:text-xl text-gray-400 max-w-lg mb-8"
          >
            I'm <strong className="text-white">Faiz Gymnastiar Haryogya</strong>, 
            a multidisciplinary creator bridging the gap between stunning Graphic Design 
            and scalable IT Development.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.6}
            className="flex flex-wrap gap-4"
          >
            <Link href="#featured-projects">
              <span className="px-8 py-4 rounded-full font-bold bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View My Work
              </span>
            </Link>
            <Link href="#contact">
              <span className="px-8 py-4 rounded-full font-bold border border-white/30 text-white hover:bg-white/10 transition-all">
                Let's Talk
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: GIF Icon & Abstract Aesthetic */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
          className="relative flex justify-center items-center w-full max-w-md mx-auto"
        >
          {/* Glassmorphism Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[40px] border border-white/20 backdrop-blur-xl rotate-3 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[40px] border border-white/10 backdrop-blur-md -rotate-6 scale-100" />
          
          <div className="relative z-10 p-8 rounded-[40px] shadow-2xl overflow-hidden flex justify-center items-center h-full w-full">
            <motion.img
              src="/assets/Faiz.gif"
              alt="Faiz Wave GIF"
              className="w-72 h-72 object-cover rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] border-4 border-white/10"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee Tech Slider */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.8}
        className="w-full mt-20 border-y border-white/10 bg-white/5 backdrop-blur-sm py-4 overflow-hidden"
      >
        <div className="flex gap-16 animate-marquee items-center whitespace-nowrap w-max opacity-80">
          {techIcons.concat(techIcons).concat(techIcons).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-2xl hover:scale-110 transition-transform duration-300 group"
              title={tech.label}
            >
              <div className="grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="text-base font-semibold tracking-wide text-gray-500 group-hover:text-white transition-colors">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
