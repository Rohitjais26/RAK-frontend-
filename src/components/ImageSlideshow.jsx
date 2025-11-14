import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDESHOW_IMAGES = [
  "/Structural Welding.jpg",
  "/Fabrication Yard.jpg",
  "/CNC Plasma Cutting.jpg",
  "/Big-Engine.png",
  "/Laser Cutting.jpg",
  "/Inner-Align.png",
  "/fabrication.jpg",
  "/RE Worker.jpg",
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? SLIDESHOW_IMAGES.length - 1 : prev - 1
    );
  };

  const currentImage = SLIDESHOW_IMAGES[currentImageIndex];

  const getTitleFromPath = (path) => {
    return path.split("/").pop().replace(/\.\w+$/, "").replace(/-/g, " ");
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-navy mb-12 tracking-tight"
        >
          A Glimpse of Our Industrial Excellence
        </motion.h2>

        {/* Slideshow Container */}
        <div className="relative w-full h-[550px] rounded-2xl shadow-2xl overflow-hidden group">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentImage}
              className="absolute inset-0 w-full h-full"
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Ken Burns Effect */}
              <motion.img
                src={currentImage}
                alt={getTitleFromPath(currentImage)}
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8 }}
                style={{ filter: "brightness(85%)" }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end justify-start p-10">
                <motion.div
                  key={currentImage + "-text"}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="backdrop-blur-md bg-white/10 rounded-lg px-6 py-3 border border-white/20 shadow-lg"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider drop-shadow-lg">
                    {getTitleFromPath(currentImage)}
                  </h3>
                  <div className="h-[3px] w-16 bg-red-600 mt-2 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {SLIDESHOW_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-red-600 scale-125"
                    : "bg-white/70 hover:bg-red-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;
