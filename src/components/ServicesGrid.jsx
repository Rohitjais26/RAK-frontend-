import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Factory, Wrench, Package, Cog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICE_CATEGORIES = [
  {
    title: "Metal Cutting & Processing",
    description:
      "Utilizing advanced Plasma, Laser, and Waterjet systems for precision cutting and shaping across diverse materials.",
    icon: Scissors,
    colorClass: "text-red-600 border-red-600",
    image: "/CNC Plasma Cutting.jpg",
    imageHover: "/Laser Cutting.jpg",
  },
  {
    title: "Heavy Fabrication & Forming",
    description:
      "Manufacturing large-scale industrial structures and frames through expert rolling, bending, and welding solutions.",
    icon: Factory,
    colorClass: "text-blue-600 border-blue-600",
    image: "/Structural Welding.jpg",
    imageHover: "/Fabricated Orange.jpg",
  },
  {
    title: "CNC & Conventional Machining",
    description:
      "Delivering ultra-precise machining and turning using modern CNC systems and precision conventional tools.",
    icon: Wrench,
    colorClass: "text-navy border-navy",
    image: "/cnc part.png",
    imageHover: "/convectional check.png",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* ✨ Animated background gradient movement */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-100 via-transparent to-transparent opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight"
          >
            Our Core Engineering Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From precision machining to complex fabrication — our facilities deliver unmatched industrial excellence and durability.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-1 bg-gradient-to-r from-red-600 to-navy mx-auto rounded-full"
          />
        </motion.header>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-red-500/30 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
                  />
                  <motion.img
                    src={cat.imageHover}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute bottom-3 left-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className={`p-2 bg-white rounded-full shadow-md border ${cat.colorClass}`}
                    >
                      <Icon className={`w-9 h-9 ${cat.colorClass}`} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center text-red-600 font-semibold hover:gap-2 transition-all"
                    >
                      Explore More
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </motion.div>
                </div>

                {/* Subtle Glow Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <Link
            to="/services"
            className="relative inline-flex items-center px-10 py-4 font-semibold text-white bg-gradient-to-r from-red-600 to-navy rounded-full shadow-lg hover:shadow-red-300 transition-all duration-300 group overflow-hidden"
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-white/10 to-transparent"
            ></motion.span>
            <span className="relative z-10">Explore All 5+ Services</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
