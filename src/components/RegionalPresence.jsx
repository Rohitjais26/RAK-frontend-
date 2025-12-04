import React from 'react';
import { MapPin, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegionalPresence = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image/Map (Enhanced with animation) */}
        <motion.div 
            className="w-full h-96 rounded-xl overflow-hidden shadow-2xl bg-white p-6 flex items-center justify-center border-b-4 border-red-600" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.img 
                src="/UAE map.png" // Your uploaded map image
                alt="RAK Engineering Operational Footprint in UAE"
                className="w-full h-full object-contain opacity-90"
                // Subtle breathing animation on the map
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>

        {/* Right Column: Text and Facts (Enhanced with animation) */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
          <p className="text-sm font-bold text-accent-orange tracking-widest uppercase flex items-center space-x-2">
            <MapPin className="w-5 h-5"/> <span>REGIONAL STRATEGY</span>
          </p>
          
          <h2 className="text-5xl font-heading text-navy leading-tight">
            Operating from Key Hubs <br />
            <span className="text-red-600">Across the UAE</span>
          </h2>
          
          <p className="text-lg text-text-dark/80">
            With our roots established in Ras Al Khaimah in 1994, we have systematically expanded our operational capacity across the Emirates. The strategic expansion includes the acquisition of RAK Engineering in 2015 and establishing our Abu Dhabi branch in 2017.
          </p>
          
          {/* Key Metric Card */}
          <motion.div 
            className="flex items-center space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4 border-accent-blue"
            whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Factory className="w-10 h-10 text-accent-blue flex-shrink-0" />
            <div>
                <p className="text-2xl font-extrabold text-navy">46,700 sq.mtr</p>
                <p className="font-medium text-gray-600">Total Operational Plant Area (as of 2024)</p>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="mt-6 inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-navy transition-colors duration-300 shadow-md"
          >
            Find Our Locations &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalPresence;