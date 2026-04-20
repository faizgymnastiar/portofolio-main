"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

const iotProjects = [
  {
    title: "WattWarden",
    description: "Sistem monitoring listrik berbasis Arduino Mega yang menampilkan estimasi biaya, peringatan saat penggunaan mendekati batas maksimal, serta notifikasi otomatis via Telegram.",
    thumbnail: "/images/iot/WattWarden.png",
    github: "https://github.com/username/wattwarden",
    tagArea: "Power Management",
  },
  {
    title: "SmartGuardBox",
    description: "Kotak paket pintar berbasis IoT yang memantau status kiriman secara real-time dan mengirim notifikasi via Telegram, meningkatkan keamanan dan kenyamanan penerimaan paket.",
    thumbnail: "/images/iot/SmartGuardBox.png",
    github: "https://github.com/username/smartguardbox",
    tagArea: "Security & Automation",
  },
  {
    title: "Smart Window Shading",
    description: "Sistem tirai otomatis berbasis NodeMCU dan sensor cahaya yang mengatur intensitas sinar matahari masuk secara real-time, membantu mengurangi beban AC secara efisien.",
    thumbnail: "/images/iot/WindowShading.jpg",
    github: "https://github.com/username/smartwindowshading",
    tagArea: "Smart Home",
  },
  {
    title: "FloraLink",
    description: "Sistem penyiraman dan pemantauan tanaman berbasis IoT yang memanfaatkan NodeMCU ESP8266. Sistem ini memungkinkan pengguna mengontrol proses penyiraman secara jarak jauh.",
    thumbnail: "/images/iot/FloraLink.png",
    github: "https://github.com/username/floralink",
    tagArea: "Agriculture IoT",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
};

export default function IoTProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto text-white">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 mb-4">
          IoT Engineering
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Bridging the physical and digital worlds through smart hardware integrations, embedded systems, and automation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {iotProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={idx * 0.15}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col h-[450px]"
          >
            {/* Image Section */}
            <div className="relative h-[250px] w-full overflow-hidden border-b border-white/10">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {project.tagArea}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-1 justify-between bg-gradient-to-b from-transparent to-black/60">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaGithub className="text-xl" /> View Repository
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
