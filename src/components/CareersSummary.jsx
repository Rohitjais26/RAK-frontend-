import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom images from your public folder chosen to represent workshop and office environment
const IMAGE_TOP_RIGHT = '/RE Worker.jpg'; // Worker in the yard
const IMAGE_BOTTOM_LEFT = '/Team Briefing.jpg'; // Team meeting/briefing
const IMAGE_BOTTOM_LEFT_VISUAL = '/workers.jpg'; // Added this line to replace the original IMAGE_BOTTOM_ variable and assign the correct image

const CareersSummary = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* ===== Left Column: Text and CTA ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-4">
                        JOIN OUR GLOBAL TEAM
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
                        WORK THAT MOVES <br />
                        THE WORLD FORWARD
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                        RAK Engineering offers a range of challenging career opportunities across our key operational areas, including precision machining, heavy fabrication, and specialized site services. Join us in building impactful industrial solutions in the UAE and beyond.
                    </p>
                    
                    {/* CTA Button */}
                    <Link
                        to="/careers"
                        className="inline-flex items-center px-8 py-3 text-lg font-semibold border border-accent-orange text-accent-orange rounded-lg shadow-md hover:bg-accent-orange hover:text-white transition-all duration-300"
                    >
                        View Open Careers
                    </Link>
                </motion.div>

                {/* ===== Right Column: Image Grid (2x2 layout adaptation) ===== */}
                <motion.div
                    className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Top Left Image: Individual Worker Focus */}
                    <motion.div 
                        className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={IMAGE_TOP_RIGHT} 
                            alt="Individual Engineer Working" 
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                    
                    {/* Top Right Image: Office/Conference (Using a worker briefing image for internal focus) */}
                    <motion.div 
                        className="col-span-1 row-span-2 overflow-hidden rounded-xl shadow-lg"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img 
                            src={IMAGE_BOTTOM_LEFT} 
                            alt="Team Meeting" 
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>

                    {/* Bottom Left Placeholder/Image (Now displaying /workers.jpg) */}
                    <motion.div 
                        className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                         <img 
                            src={IMAGE_BOTTOM_LEFT_VISUAL} 
                            alt="Workers collaborating on site" 
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                    
                </motion.div>
            </div>
        </section>
    );
};

export default CareersSummary;