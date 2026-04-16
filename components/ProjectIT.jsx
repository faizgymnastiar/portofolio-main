"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const projects = [
  {
    title: "HMMI SQA Digitalization & Integration System",
    description:
      "Aplikasi internal untuk mendukung digitalisasi proses Shipping Quality Audit PT Hino Motors Manufacturing Indonesia.",
    note: "Detail Code dan Tampilan keseluruhan tidak ditampilkan karena kebijakan perusahaan.",
    images: ["/images/it/hsqa.png"],
  },
  {
    title: "HR Quiz System",
    description:
      "Sistem evaluasi berbasis web untuk trainee karyawan yang dikembangkan menggunakan ASP.NET Core dan SQL Server. Menyediakan fitur manajemen soal, pelaksanaan kuis, hingga rekap hasil evaluasi secara otomatis untuk mendukung proses pelatihan SDM yang lebih efektif dan terstruktur.",
    note: "Detail Code dan Tampilan keseluruhan tidak ditampilkan karena kebijakan perusahaan.",
    images: ["/images/it/hrquiz-1.png", "/images/it/hrquiz-2.png", "/images/it/hrquiz-3.png"],
  },
  {
    title: "UI Design: Supplier Award Website",
    description:
      "Desain antarmuka untuk website penghargaan pemasok terbaik Hino Group.",
    images: ["/images/it/supplier.png"],
  },
  {
    title: "Web Application: Buku Tamu Digital",
    description:
      "Aplikasi e-BukuTamu berbasis web untuk pencatatan tamu di instansi pemerintah dan perusahaan.",
    images: ["/images/it/bukutamu-1.png", "/images/it/bukutamu-2.png", "/images/it/bukutamu-3.png"],
  },
  {
    title: "UI/UX Design Coffeelytic",
    description:
      "Desain tampilan untuk website Coffeelytic yang merupakan project capstone Codingcamp DBS X Dicoding.",
    images: ["/images/it/coffee2.png", "/images/it/coffee1.png", "/images/it/coffee3.png", "/images/it/coffee4.png"],
  },
];

export default function ProjectIT() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="project-it"
      ref={sectionRef}
      className="w-full px-6 py-20 md:px-24 text-white scroll-mt-20"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeVariant}
        custom={0}
      >
        IT & Software Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeVariant}
            custom={index + 1}
          >
            {/* Image Slider */}
            <div className="h-52 relative flex overflow-x-auto snap-x snap-mandatory">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="h-52 min-w-full relative snap-center shrink-0"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    className="object-cover w-1920px h-1080px"
                  />
                </div>
              ))}
            </div>

            {/* Konten */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>

              {project.note && (
                <p className="mt-4 text-[11px] text-gray-400 italic">
                  {project.note}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
