// client/src/components/RegionalPresence.jsx (UPDATED - White Map Background)

import React from 'react';
import { MapPin, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegionalPresence = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image/Map */}
        <div 
            className="w-full h-96 rounded-xl overflow-hidden shadow-2xl bg-white p-6 flex items-center justify-center" // Changed bg-navy to bg-white
            data-aos="fade-right"
        >
            <img 
                src="/UAE map.png" // Your uploaded map image
                alt="RAK Engineering Operational Footprint in UAE"
                className="w-full h-full object-contain opacity-90" // Removed 'filter invert'
            />
        </div>

        {/* Right Column: Text and Facts */}
        <div data-aos="fade-left">
          <p className="text-xl font-semibold text-accent-orange mb-3 flex items-center space-x-2">
            <MapPin className="w-6 h-6"/> <span>Strategic Regional Footprint</span>
          </p>
          <h2 className="text-4xl font-heading text-navy mb-5">
            Operating from Key Hubs Across the UAE
          </h2>
          <p className="text-lg text-text-dark/80 mb-6">
            With our roots established in Ras Al Khaimah in 1994, we have systematically expanded our operational capacity across the Emirates. The strategic expansion includes the acquisition of RAK Engineering in 2015 and establishing our Abu Dhabi branch in 2017.
          </p>
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <Factory className="w-8 h-8 text-accent-blue flex-shrink-0" />
            <p className="font-medium text-navy">
                Our total operational area has grown to 46,700 sq.mtr as of 2024, enabling large-scale project handling.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="mt-6 inline-block px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-navy transition-colors duration-300 shadow-md"
          >
            Find Our Locations &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;