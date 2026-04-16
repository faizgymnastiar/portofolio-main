"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProjectDesign from "./ProjectDesign";
import ProjectIT from "./ProjectIT";
import ProjectIoT from "./ProjectIoT";

const tabs = ["Design", "IT & UI/UX", "IoT"];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ProjectSection() {
  const [selectedTab, setSelectedTab] = useState("Design");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full px-6 md:px-20 py-20 text-white scroll-mt-20"
    >
      {/* Judul Section */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        My Projects
      </motion.h2>

      {/* Tab Button */}
      <motion.div
        className="flex justify-center mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.1}
      >
        <div className="flex gap-4 flex-wrap justify-center">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all ${
                selectedTab === tab
                  ? "bg-white text-black border-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2 + i * 0.1}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content with AnimatePresence */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {selectedTab === "Design" && (
            <motion.div
              key="design"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              variants={fadeUpVariant}
              custom={0.3}
            >
              <ProjectDesign />
            </motion.div>
          )}
          {selectedTab === "IT & UI/UX" && (
            <motion.div
              key="it"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              variants={fadeUpVariant}
              custom={0.3}
            >
              <ProjectIT />
            </motion.div>
          )}
          {selectedTab === "IoT" && (
            <motion.div
              key="iot"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              variants={fadeUpVariant}
              custom={0.3}
            >
              <ProjectIoT />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
