// client/src/components/AboutSummary.jsx (UPDATED)

import React from 'react';
import { Link } from 'react-router-dom';

const AboutSummary = () => {
  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Placeholder Image/Visual Element */}
       <div className="w-full h-80 bg-gray-200 rounded-lg shadow-xl overflow-hidden">
            <img 
                src="/Fabrication Yard.jpg" // Image showing the yard/facility
                alt="Our Fabrication Yard Overview" 
                className="w-full h-full object-cover"
            />
        </div>
        
        {/* Text Content - UPDATED to RAK Engineering */}
        <div>
          <p className="text-xl font-semibold text-blue-900 mb-3">Our Core Philosophy</p>
          <h2 className="text-4xl font-heading text-navy mb-5">
            Premier, Full-Service Metal Fabrication and Engineering
          </h2>
          <p className="text-lg text-text-dark/80 mb-6">
            We are RAK Engineering, established in 1994. Our mission is to deliver premium quality products and exceptional service while striving to be the premier, full-service metal fabrication facility in the Middle East. We focus on structural steel fabrication, CNC machining, and turnkey industrial projects.
          </p>
          <Link 
            to="/about" 
            className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md"
          >
            Discover Our Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;