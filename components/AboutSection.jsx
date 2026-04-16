"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Animasi in & out tapi tidak remove dari DOM
const boxRevealVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.6,
      ease: "easeInOut", // lebih smooth keluar
    },
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};


export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  // 3D Card effect
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
      const rotateX = -(y - midY) / 8;
      const rotateY = (x - midX) / 8;

      setRotateStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease",
        transformStyle: "preserve-3d",
      });
    };

    const handleMouseLeave = () => {
      setRotateStyle({
        transform: "rotateX(0deg) rotateY(0deg)",
        transition: "transform 0.3s ease",
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
      className="w-full px-6 py-20 md:px-24 text-white scroll-mt-20"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={boxRevealVariant}
        custom={0}
      >
        {/* Judul */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
          variants={boxRevealVariant}
          custom={0}
        >
          About Me
        </motion.h2>

        {/* Konten */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Foto */}
          <motion.div
            ref={cardRef}
            style={rotateStyle}
            className="transition-transform duration-100 w-full md:w-[300px] h-[300px] mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl bg-white/10 border border-white/20"
            variants={boxRevealVariant}
            custom={0.1}
          >
            <Image
              src="/Foto-Faiz.jpg"
              alt="Foto Faiz"
              width={300}
              height={300}
              className="object-cover w-full h-full pointer-events-none select-none"
            />
          </motion.div>

          {/* Deskripsi */}
          <div className="flex-1 flex flex-col gap-6">
            <motion.p
              className="text-base leading-relaxed"
              variants={boxRevealVariant}
              custom={0.2}
            >
              I’m a  student in Internet Engineering Technology at Universitas Gadjah Mada, 
              with a strong interest and skill set in web and application development, UI/UX design, Internet of Things (IoT), 
              as well as creative fields including graphic design, documentation, and photography. Experienced in handling 
              a wide range of digital and creative projects, and highly capable of collaborating within cross-functional teams. 
              Known for being creative, adaptable, and having excellent visual communication skills through both design and multimedia documentation.
            </motion.p>

            {/* Magang */}
            <motion.div variants={boxRevealVariant} custom={0.3}>
              <h3 className="font-semibold mb-2">💼 Internship Experience</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Front-End Developer Intern - PT Inamas Intesis Teknologi (Aug 2025 - Now)</li>
                <li>IT Application Developer Intern — Hino Motors Manufacturing Indonesia (Mar–Jul 2025)</li>
                <li>Graphic Designer — Shaaastudio (Feb 2025–Now)</li>
                <li>Web & Software Developer Intern — Integra Inovasi Indonesia (Jul–Aug 2024)</li>
              </ul>
            </motion.div>

            {/* Organisasi */}
            <motion.div variants={boxRevealVariant} custom={0.4}>
              <h3 className="font-semibold mt-4 mb-2">📚 Organizational Experience</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Head of Media Division — FORKOM TRI (Feb 2024–Present)</li>
                <li>Staff of Media & Info — YACARANDA TEAM UGM (Dec 2022–Dec 2024)</li>
                <li>Design Coordinator — NETCOMP 2.0 (May 2023–May 2024)</li>
                <li>Sub Coordinator Design — Festival Gadjah Mada (Mar 2023–Feb 2024)</li>
                <li>Vice Head of Media — FORKOM TRI (Feb 2023–Feb 2024)</li>
                <li>Sub Coordinator Design — TED 2023 (Aug 2023–May 2024)</li>
              </ul>
            </motion.div>

            {/* CV */}
            <motion.div
              className="self-start md:self-end mt-4"
              variants={boxRevealVariant}
              custom={0.5}
            >
              <a
                href="/CV-Faiz Gymnastiar.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
              >
                <FaDownload />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>

    
  );
}
