import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Ship, Wrench } from "lucide-react"; // Using relevant icons for RAK services

// --- RAK Service Categories (Simplified for the new layout) ---
// We map RAK's broad capabilities to key sections, similar to the inspiration's "Offshore Wind" and "Ship Building"
const KEY_CAPABILITIES = [
  {
    title: "Structural & Heavy Fabrication",
    subtitle: "Custom steel structures and large-scale industrial components.",
    icon: Truck,
    image: "/Structural Welding.jpg",
    link: "/services/heavy-fabrication",
  },
  {
    title: "CNC & Engine Maintenance",
    subtitle: "High-precision machining, overhaul, and site repair services.",
    icon: Wrench,
    image: "/Engine-Lathe.jpg",
    link: "/services/cnc-machining",
  },
  // Adding a third item to make the grid more robust, matching the 'Engineered Solutions' theme
  {
    title: "Metal Processing & Supply",
    subtitle: "Plasma cutting, profile forming, and material supply chain management.",
    icon: Ship, // Using Ship as a general icon for large-scale operations/material transport
    image: "/CNC Plasma Cutting.jpg",
    link: "/services/plasma-cutting",
  },
];
// --- END RAK Service Categories ---


const ServicesGrid = () => {
  return (
    // Dark Blue Background for the Hero Section (using 'navy' from tailwind.config)
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* ===== 1. Header Section (TOP LEFT) ===== */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl text-left"
        >
          {/* Small Header Text */}
          <p className="text-sm font-bold text-accent-orange tracking-widest uppercase mb-3">
            WHAT WE DO
          </p>

          {/* Large Headline Text */}
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6 leading-snug">
            SPECIALISTS IN HEAVY FABRICATION, <br className="hidden md:block" />
            <span className="text-red-600">MACHINING, AND TURNKEY SOLUTIONS</span> 
            FOR THE MIDDLE EAST
          </h2>
          
          {/* View All Services Button (TOP RIGHT) */}
          <div className="md:absolute md:top-0 md:right-0">
            <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 font-semibold text-white bg-dark-grayish-blue border border-gray-600 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
            >
                View All Services
            </Link>
          </div>
        </motion.header>

        {/* --- Separator Line --- */}
        <div className="w-full h-[1px] bg-gray-700 mb-12"></div>

        {/* ===== 2. Service Cards Grid (BOTTOM) ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {KEY_CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-lg overflow-hidden border-b-2 border-red-600 hover:border-accent-orange transition-all duration-300"
              >
                
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-2 bg-red-600 rounded-full shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 bg-dark-grayish-blue">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-red-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cap.subtitle}
                  </p>
                  <Link
                    to={cap.link}
                    className="inline-flex items-center text-red-600 font-medium hover:text-accent-orange transition-colors"
                  >
                    Explore Details
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
