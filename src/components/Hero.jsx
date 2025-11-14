// client/src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// Image updated to a strong action shot
const FALLBACK_IMAGE_PATH = "/Structural Welding.jpg" 

const Hero = () => {
  const videoSrc =
    "https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-construction-site-31034-large.mp4";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ===== Background Video ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={FALLBACK_IMAGE_PATH} // Use the custom image as the video poster (fallback)
        className="absolute z-0 w-full h-full object-cover brightness-75"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback div for browsers that block video/poster */}
        <div 
             className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: `url(${FALLBACK_IMAGE_PATH})` }}
        ></div>
      </video>

      {/* ===== Gradient & Overlay Effects ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-red-600/20 z-10"></div>

      {/* ===== Hero Content ===== */}
      <motion.div
        className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-xl md:text-2xl font-light mb-6 text-red-600 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Engineering the Future
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Innovative Solutions for <br className="hidden md:block" />
          <span className="text-red-600">Complex Projects</span>
        </motion.h1>

        {/* ===== CTAs ===== */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link
            to="/projects"
            className="px-10 py-4 text-lg font-semibold bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View Our Projects
          </Link>

          <Link
            to="/about"
            className="flex items-center space-x-2 text-lg font-semibold border-2 border-white text-white rounded-full px-8 py-4 transition-all duration-300 hover:bg-white hover:text-navy"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Learn More</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ===== Floating Scroll Indicator ===== */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-sm mb-1 tracking-widest uppercase text-gray-300">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-red-600 to-transparent"></div>
      </motion.div>

      {/* ===== Optional Subtle Grain Overlay for Texture ===== */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;