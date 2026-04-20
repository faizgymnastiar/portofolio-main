"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import ImageLightbox from "../../../components/ImageLightbox";

// Add placeholder image since user will provide them later
const placeholderImg = "/images/it/placeholder.png";

const projects = [
  {
    title: "Website Desa Wisata Kemujan Karimunjawa",
    description: "Sistem informasi dan pemesanan layanan pariwisata untuk Desa Wisata Kemujan, Karimunjawa. Mengintegrasikan berbagai fitur untuk memudahkan wisatawan menjelajahi potensi lokal.",
    images: [placeholderImg],
  },
  {
    title: "Website Travel Opentrip Labiru Karimunjawa",
    description: "Platform pemesanan paket wisata opentrip untuk Labiru Tour, menyajikan informasi rute, harga, dan manajemen booking wisata Karimunjawa.",
    images: [placeholderImg],
  },
  {
    title: "Aplikasi PMPD Vibration Monitoring (Web Based)",
    description: "Aplikasi web-based untuk pengukur getaran mesin (predictive maintenance) di PT Inamas Sintesis Teknologi. Berfungsi untuk memantau kesehatan mesin secara real-time.",
    images: [placeholderImg],
  },
  {
    title: "Aplikasi Purchasing PT Inamas Sintesis Teknologi",
    description: "Sistem manajemen proses pembelian terintegrasi (purchasing) untuk mengoptimalkan operasional dan persetujuan pengadaan barang di PT Inamas Sintesis Teknologi.",
    images: [placeholderImg],
  },
  {
    title: "HMMI SQA Digitalization & Integration System",
    description: "Aplikasi internal untuk mendukung digitalisasi proses Shipping Quality Audit PT Hino Motors Manufacturing Indonesia.",
    note: "Detail Code dan Tampilan keseluruhan tidak ditampilkan karena kebijakan perusahaan.",
    images: ["/images/it/hsqa.png"],
  },
  {
    title: "HR Quiz System",
    description: "Sistem evaluasi berbasis web untuk trainee karyawan yang dikembangkan menggunakan ASP.NET Core dan SQL Server. Menyediakan fitur manajemen soal, pelaksanaan kuis, hingga rekap hasil evaluasi otomatis.",
    note: "Detail Code dan Tampilan keseluruhan tidak ditampilkan karena kebijakan perusahaan.",
    images: ["/images/it/hrquiz-1.png", "/images/it/hrquiz-2.png", "/images/it/hrquiz-3.png"],
  },
  {
    title: "Supplier Award Website",
    description: "Desain antarmuka untuk website penghargaan pemasok terbaik Hino Group.",
    images: ["/images/it/supplier.png"],
  },
  {
    title: "Buku Tamu Digital",
    description: "Aplikasi e-BukuTamu berbasis web untuk pencatatan tamu di instansi pemerintah dan perusahaan.",
    images: ["/images/it/bukutamu-1.png", "/images/it/bukutamu-2.png", "/images/it/bukutamu-3.png"],
  },
  {
    title: "Coffeelytic",
    description: "Desain tampilan untuk website Coffeelytic yang merupakan project capstone Codingcamp DBS X Dicoding.",
    images: ["/images/it/coffee2.png", "/images/it/coffee1.png", "/images/it/coffee3.png", "/images/it/coffee4.png"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
};

export default function ITProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto text-white">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-4">
          IT & Software Development
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          A showcase of full-stack applications, enterprise solutions, and UI/UX designs.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={idx * 0.15}
            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 rounded-[32px] p-6 lg:p-10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-all group"
          >
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl relative bg-black/50 aspect-video flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
              {project.images.map((img, i) => (
                <div 
                  key={i} 
                  className="min-w-full relative snap-center cursor-pointer"
                  onClick={() => openLightbox(project.images, i)}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs backdrop-blur-md pointer-events-none">
                      {i + 1} / {project.images.length}
                    </div>
                  )}
                  {/* Hover indicator for click */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                     <span className="opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-sm font-semibold transition-opacity duration-300 pointer-events-none">
                       View Enlarge
                     </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
              {project.note && (
                <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs px-4 py-3 rounded-xl italic mt-auto">
                  {project.note}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <ImageLightbox 
        isOpen={lightboxOpen} 
        images={lightboxImages} 
        currentIndex={lightboxIndex} 
        onClose={() => setLightboxOpen(false)} 
        setCurrentIndex={setLightboxIndex} 
      />
    </div>
  );
}
