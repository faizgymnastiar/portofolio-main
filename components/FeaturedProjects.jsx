"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaPalette, FaMicrochip, FaArrowRight } from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const categories = [
    {
      title: "IT & Software",
      desc: "Full-stack web applications, internal tools, and digital solutions with clean code principles.",
      path: "/projects/it",
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      bg: "from-blue-900/40 to-blue-600/10",
      border: "border-blue-500/20",
      delay: 0.2,
    },
    {
      title: "Graphic Design",
      desc: "Creative social media templates, branding logos, and visually stunning merchandise designs.",
      path: "/projects/design",
      icon: <FaPalette className="text-4xl text-fuchsia-400" />,
      bg: "from-fuchsia-900/40 to-pink-600/10",
      border: "border-fuchsia-500/20",
      delay: 0.4,
    },
    {
      title: "IoT Solutions",
      desc: "Smart devices, embedded systems, and hardware integrations tailored for automation.",
      path: "/projects/iot",
      icon: <FaMicrochip className="text-4xl text-emerald-400" />,
      bg: "from-emerald-900/40 to-teal-600/10",
      border: "border-emerald-500/20",
      delay: 0.6,
    },
  ];

  return (
    <section
      id="featured-projects"
      ref={sectionRef}
      className="w-full py-24 text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore My Work.</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My portfolio is divided into three main pillars: IT Development, Graphic Design, and Internet of Things. Choose a category below to dive deep into my past projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={cat.delay}
            >
              <Link href={cat.path}>
                <div className={`relative group h-[320px] rounded-[32px] overflow-hidden border ${cat.border} bg-white/5 backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer`}>
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Footer Arrow */}
                  <div className="relative z-10 flex justify-between items-center mt-4">
                    <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                      View Gallery
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
