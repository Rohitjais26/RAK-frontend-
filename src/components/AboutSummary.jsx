// client/src/components/AboutSummary.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for dynamic animations
import { Factory, Award, Users, MapPin, ShieldCheck } from 'lucide-react'; 

// Key stats derived from your project files and common industry standards
const STATS = [
    { number: '46,700+', label: 'SQM YARD SPACE', icon: Factory, color: 'text-accent-blue' }, // Actual fact from RegionalPresence.jsx
    { number: '3X ISO', label: 'CERTIFIED STANDARDS', icon: ShieldCheck, color: 'text-green-600' }, // From TrustSignals.jsx & About.jsx
    { number: '20+', label: 'YEARS IN HEAVY INDUSTRY', icon: Award, color: 'text-accent-orange' }, // Based on 1994 establishment
    { number: '200+', label: 'EMPLOYEES', icon: Users, color: 'text-navy' }, // Placeholder based on industry scale
];

// Animation variants for the stagger effect on stats
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const AboutSummary = () => {
  return (
    <section className="py-24 bg-off-white relative overflow-hidden">
        <div className="container mx-auto px-4">
            
            {/* The Layout Container: Grid with 3 columns (2 for content, 1 for the visual) */}
            <div className="grid lg:grid-cols-[1fr_1.8fr_1.5fr] gap-12 items-start">
                
                {/* ===== 1. Left Column: Key Statistics (Dynamic) ===== */}
                <motion.div 
                    className="lg:col-span-1 space-y-8 pt-4" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h3 className="text-xl font-heading text-navy mb-4 border-b-2 border-accent-orange/50 pb-2">BY THE NUMBERS</h3>
                    {STATS.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="flex flex-col space-y-1 p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center space-x-2">
                                    <Icon className={`w-5 h-5 ${stat.color} opacity-70 flex-shrink-0`} />
                                </div>
                                <p className="text-4xl font-extrabold text-navy leading-none">{stat.number}</p>
                                <p className="text-xs font-semibold text-text-dark/80 tracking-widest uppercase">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* ===== 2. Center Column: Central Visual (Animated) ===== */}
                <motion.div 
                    className="lg:col-span-1 flex items-center justify-center relative w-full h-[450px] my-auto overflow-hidden rounded-xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                     <motion.img 
                        src="/Fabrication Yard.jpg" 
                        alt="Our Fabrication Yard Overview" 
                        className="w-full h-full object-cover"
                        // Continuous subtle zoom animation
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-navy/10"></div>
                </motion.div>

                {/* ===== 3. Right Column: Text Content & CTAs (Framer Motion) ===== */}
                <motion.div 
                    className="lg:col-span-1 space-y-6 pt-4 lg:pl-8" 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    
                    {/* Small Header */}
                    <p className="text-sm font-bold text-accent-blue tracking-widest uppercase">
                        WHO WE ARE
                    </p>
                    
                    {/* Large Headline (Mimicking the two-line bold style) */}
                    <h2 className="text-4xl font-heading text-navy leading-tight">
                        TWO DECADES OF TRUSTED <br />
                        <span className="text-red-600 font-extrabold">HEAVY ENGINEERING</span> EXCELLENCE
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-md">
                        RAK Engineering is a company specializing in heavy mechanical engineering and steel fabrication. We are recognized as a dependable partner for delivering high-quality equipment for the marine, offshore, dredging, and general industrial sectors. Established in 1994 and operating under the Gulf Engineering Group since 2015.
                    </p>
                    
                    {/* CTAs (Dynamic Hover) */}
                    <motion.div className="flex gap-4 pt-4">
                        <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                            <Link 
                                to="/about" 
                                className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 shadow-lg text-center"
                            >
                                About Company
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                            <Link 
                                to="/about#certifications" // Linking to the certifications section on the About page for "QHSE"
                                className="px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg text-center"
                            >
                                View ISO/QHSE
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default AboutSummary;