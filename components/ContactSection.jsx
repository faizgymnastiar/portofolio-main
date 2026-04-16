"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

// Animasi fade + slide up/down
const fadeVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full min-h-screen px-6 md:px-24 py-24 text-white overflow-hidden scroll-mt-20 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500 opacity-10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-10">
        {/* Judul & Deskripsi */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Ikon Sosial */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-10 flex-wrap"
        >
          <ContactCard
            icon={<FaEnvelope />}
            label="Email"
            link="mailto:faiz.gymnastiar778@gmail.com"
          />
          <ContactCard
            icon={<FaLinkedin />}
            label="LinkedIn"
            link="https://linkedin.com/in/faiz-gymnastiar-haryogya-1a79b7249/"
          />
          <ContactCard
            icon={<FaInstagram />}
            label="Instagram"
            link="https://instagram.com/faizgymnastiar_"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Subkomponen Kartu Kontak
function ContactCard({ icon, label, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="group w-40 h-40 flex flex-col items-center justify-center gap-3 text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-white/20 transition-all duration-300"
    >
      <div className="text-4xl group-hover:animate-bounce">{icon}</div>
      <span className="text-md font-medium">{label}</span>
    </motion.a>
  );
}
