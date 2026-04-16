"use client";

import { useEffect, useRef, useState } from "react";

const designTabs = [
  "Social Media Design",
  "Logo Design",
  "Merchandise Design",
  "Open Commissions",
];

const dummyImages = {
  "Social Media Design": [
    "/images/design/social1.png",
    "/images/design/social2.png",
    "/images/design/social3.png",
    "/images/design/social4.png",
  ],
  "Logo Design": ["/images/design/logo1.png", "/images/design/logo2.png"],
  "Merchandise Design": [
    "/images/design/merch1.png",
    "/images/design/merch2.png",
    "/images/design/merch3.png",
    "/images/design/merch4.png",
    "/images/design/merch5.png",
  ],
  "Open Commissions": ["/images/design/comm1.png", "/images/design/comm2.png"],
};

export default function ProjectDesign() {
  const [activeTab, setActiveTab] = useState("Social Media Design");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const images = dummyImages[activeTab];

  useEffect(() => {
    setCurrentIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentIndex(index);
          }
        });
      },
      {
        root: sliderRef.current,
        threshold: 0.5,
      }
    );

    const slides = sliderRef.current?.children || [];
    Array.from(slides).forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {designTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-white text-black shadow-lg"
                : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              data-index={idx}
              className="min-w-full h-[400px] snap-center shrink-0 rounded-xl border border-white/20 shadow-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`${activeTab} ${idx + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator */}
      <p className="text-center text-sm text-gray-400 mt-3">
        {currentIndex + 1} / {images.length} &nbsp; | &nbsp; Swipe for More →
      </p>
    </div>
  );
}
