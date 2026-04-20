"use client";

import Image from "next/image";
import { FaDownload, FaBriefcase, FaUsers } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const cardRef = useRef(null);
  const [rotateStyle, setRotateStyle] = useState({});

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateX = -(y - midY) / 10;
      const rotateY = (x - midX) / 10;

      setRotateStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.1s ease",
      });
    };

    const handleMouseLeave = () => {
      setRotateStyle({
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.4s ease",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="mb-12 border-l-4 border-emerald-400 pl-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me.</h2>
          <p className="text-gray-400 mt-2">Get to know the creator behind the work.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Photo */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="lg:col-span-4 h-[400px] md:h-[500px]"
          >
            <div
              ref={cardRef}
              style={rotateStyle}
              className="w-full h-full relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/Foto-Faiz.jpg"
                alt="Faiz Gymnastiar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="/CV-Faiz Gymnastiar.pdf"
                  download
                  className="w-full flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition-all"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Layout */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Bio Card */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex-1 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Who am I?</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                I’m a student in <span className="text-white font-medium">Internet Engineering Technology</span> at Universitas Gadjah Mada, 
                with a strong interest and skill set in web and application development, UI/UX design, Internet of Things (IoT), 
                as well as creative fields including graphic design, documentation, and photography. <br /><br />
                Experienced in handling a wide range of digital and creative projects, I am highly capable of collaborating within cross-functional teams. 
                Known for being creative, adaptable, and having excellent visual communication skills through both code and multimedia.
              </p>
            </motion.div>

            {/* Exp & Org Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Internship */}
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.4}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <h3 className="font-semibold text-lg">Experience</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Front-End Developer Intern</span>
                    <span className="text-xs">PT Inamas Intesis Teknologi • Aug 2025 - Now</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">IT Application Developer Intern</span>
                    <span className="text-xs">Hino Motors Manufacturing Indonesia • Mar–Jul 2025</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Graphic Designer</span>
                    <span className="text-xs">Shaaastudio • Feb 2025–Now</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Web & Software Developer Intern</span>
                    <span className="text-xs">Integra Inovasi Indonesia • Jul–Aug 2024</span>
                  </li>
                </ul>
              </motion.div>

              {/* Organization */}
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.5}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                    <FaUsers className="text-xl" />
                  </div>
                  <h3 className="font-semibold text-lg">Organization</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Head of Media Division</span>
                    <span className="text-xs">FORKOM TRI • Feb 2024–Present</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Staff of Media & Info</span>
                    <span className="text-xs">YACARANDA TEAM UGM • Dec 2022–Dec 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Design Coordinator</span>
                    <span className="text-xs">NETCOMP 2.0 • May 2023–May 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Sub Coordinator Design</span>
                    <span className="text-xs">Festival Gadjah Mada • Mar 2023–Feb 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Vice Head of Media</span>
                    <span className="text-xs">FORKOM TRI • Feb 2023–Feb 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white font-medium">Sub Coordinator Design</span>
                    <span className="text-xs">TED 2023 • Aug 2023–May 2024</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
