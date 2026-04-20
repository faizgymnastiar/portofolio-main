"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ImageLightbox from "../../../components/ImageLightbox";

// Placeholder image for the new projects
const placeholderImg = "/images/design/placeholder.png";

const designCategories = {
  "Social Media Design": [
    "/images/design/social1.png", "/images/design/social2.png", "/images/design/social3.png", "/images/design/social4.png",
    placeholderImg, // Davespace Cafe
    placeholderImg, // Shaaastudio
    placeholderImg, // Rebranding Spa
    placeholderImg, // Gandengfoundation
    placeholderImg  // Ganteng Consulting
  ],
  "Logo Design": [
    "/images/design/logo1.png", "/images/design/logo2.png"
  ],
  "Merchandise Design": [
    "/images/design/merch1.png", "/images/design/merch2.png", "/images/design/merch3.png", "/images/design/merch4.png", "/images/design/merch5.png",
  ],
  "Open Commissions": [
    "/images/design/comm1.png", "/images/design/comm2.png"
  ]
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DesignProjectsPage() {
  const [activeTab, setActiveTab] = useState("Social Media Design");
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto text-white">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500 mb-4">
          Creative Design Portfolio
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Visual identities, social media engagements, and bespoke merchandise translating brand values into art.
        </p>
      </motion.div>

      {/* Modern Filter Tabs */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4 mb-12">
        {Object.keys(designCategories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
              activeTab === tab 
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                : "border border-white/20 bg-white/5 text-gray-400 hover:text-white hover:border-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Masonry-like Grid for Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {designCategories[activeTab].map((img, idx) => (
            <div 
              key={idx} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group bg-white/5 cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img}
                alt={`${activeTab} image ${idx + 1}`}
                width={800}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <span className="bg-white/20 backdrop-blur-md rounded-full px-5 py-2 text-white font-semibold text-sm tracking-widest uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Fullscreen
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <ImageLightbox 
        isOpen={lightboxOpen} 
        images={designCategories[activeTab]} 
        currentIndex={lightboxIndex} 
        onClose={() => setLightboxOpen(false)} 
        setCurrentIndex={setLightboxIndex} 
      />
    </div>
  );
}
