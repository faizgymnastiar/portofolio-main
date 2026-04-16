"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const iotProjects = [
  {
    title: "WattWarden",
    description:
      "Sistem monitoring listrik berbasis Arduino Mega yang menampilkan estimasi biaya, peringatan saat penggunaan mendekati batas maksimal, serta notifikasi otomatis via Telegram.",
    thumbnail: "/images/iot/WattWarden.png",
    github: "https://github.com/username/wattwarden",
    className: "col-span-4 md:col-span-5", // item besar (2 kolom)
  },
  {
    title: "SmartGuardBox",
    description:
      "Kotak paket pintar berbasis IoT yang memantau status kiriman secara real-time dan mengirim notifikasi via Telegram, meningkatkan keamanan dan kenyamanan penerimaan paket.",
    thumbnail: "/images/iot/SmartGuardBox.png",
    github: "https://github.com/username/smartguardbox",
  },
  {
    title: "Smart Window Shading",
    description:
      "Sistem tirai otomatis berbasis NodeMCU dan sensor cahaya yang mengatur intensitas sinar matahari masuk secara real-time, membantu mengurangi beban AC dan konsumsi energi bangunan secara efisien.",
    thumbnail: "/images/iot/WindowShading.jpg",
    github: "https://github.com/username/smartwindowshading",
  },
  {
    title: "FloraLink",
    description:
      "Sistem penyiraman dan pemantauan tanaman berbasis IoT yang memanfaatkan NodeMCU ESP8266. Sistem ini memungkinkan pengguna mengontrol proses penyiraman secara jarak jauh, sehingga meningkatkan efisiensi waktu, energi, dan sumber daya.",
    thumbnail: "/images/iot/FloraLink.png",
    github: "https://github.com/username/floralink",
    className: "col-span-2 md:col-span-3",
  },
];

export default function ProjectIoT() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-4">
      {iotProjects.map((project, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.01] transition-transform duration-300 ${project.className || ""}`}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="absolute object-cover w-full h-full opacity-30 group-hover:opacity-40 transition duration-300"
          />
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
