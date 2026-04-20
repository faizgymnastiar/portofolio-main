"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

export default function ImageLightbox({ isOpen, images, currentIndex, onClose, setCurrentIndex }) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-500 transition-colors z-[110]"
          >
            <FaTimes />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-6 text-white text-4xl hover:scale-110 transition-transform z-[110] p-4"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 text-white text-4xl hover:scale-110 transition-transform z-[110] p-4"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center p-4">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
            >
              <Image
                src={images[currentIndex]}
                alt="Fullscreen representation"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white font-semibold backdrop-blur-md">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
