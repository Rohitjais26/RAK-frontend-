import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ===============================
   Static Assets
================================ */
const HERO_IMAGE_PATH = "/Structural Welding.jpg";

const SERVICE_PREVIEWS = [
    // UPDATED: All links now point to the main /services page
    { image: "/CNC Plasma Cutting.jpg", link: "/services" },
    { image: "/Engine-Lathe.jpg", link: "/services" },
    { image: "/fab in.png", link: "/services" },
    { image: "/Fabricated Orange.jpg", link: "/services" },
];

/* ===============================
   Hero Component
================================ */
const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-start justify-center">
            {/* ===== Background Image ===== */}
            <img
                src={HERO_IMAGE_PATH}
                alt="Heavy fabrication and structural welding site"
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "brightness(65%)" }} // Added dark filter directly to the image
            />

            {/* ===== Dark Overlay (Reduced to a subtle backdrop) ===== */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* ===== Hero Content (Main Heading and CTA) ===== */}
            <motion.div
                className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-40 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
            >
                <motion.div
                    className="max-w-4xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="text-xl md:text-2xl font-light mb-4 text-red-600 tracking-widest uppercase">
                        RAK Engineering
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                        Heavy Industry Fabrication &{" "}
                        <span className="text-red-600">Marine Solutions</span>
                    </h1>

                    <p className="mt-4 text-xl text-gray-200 font-light max-w-2xl">
                        Delivering certified engineering services across the
                        Middle East, specializing in structural steel, CNC
                        machining, and heavy-duty industrial maintenance.
                    </p>

                    <Link
                        to="/projects"
                        className="inline-flex items-center mt-12 px-8 py-3 text-lg font-semibold bg-red-600 rounded-lg shadow-xl hover:bg-red-700 transition-colors duration-300 transform hover:scale-[1.02]"
                    >
                        Explore Our Capabilities
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* ===== Bottom Services Preview Bar (Full Width) ===== */}
            <motion.div
                className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm z-30"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                    <p className="hidden md:block text-lg font-semibold text-white tracking-widest uppercase mr-8">
                        Our Services
                    </p>

                    {/* ===== Services Hover Grid (Now redirecting to /services) ===== */}
                    <div className="flex space-x-4 overflow-x-auto py-2 no-scrollbar">
                        {SERVICE_PREVIEWS.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.4)",
                                        borderColor: '#DC2626' // Red 600
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="block w-full h-full overflow-hidden border-2 border-white transition-all duration-300"
                                >
                                    <Link 
                                        to={service.link} // This is the updated path: "/services"
                                        className="block w-full h-full"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.link.split('/').pop().replace(/-/g, ' ')}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:brightness-110"
                                        />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;