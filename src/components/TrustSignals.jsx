// client/src/components/TrustSignals.jsx (OVERHAULED for Authority)

import React from 'react';
import { Award, Factory, ShieldCheck } from 'lucide-react';

const TrustSignals = () => {
  const stats = [
    { icon: Factory, number: '46,700+', label: 'Total Plant Area (sq.mtrs) ' },
    { icon: ShieldCheck, number: '3X ISO', label: 'Certified (9001, 14001, 45001) [cite: 32, 33, 34]' },
    { icon: Award, number: '1994', label: 'Legacy Established with RAK Engineering [cite: 13]' },
  ];

  return (
        // Changed to use Structural Welding image for industrial scale
        <section className="relative py-20 bg-dark-grayish-blue text-white overflow-hidden">
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/Structural Welding.jpg" 
                    alt="Welding Yard in RAK" 
                    className="w-full h-full object-cover opacity-15" 
                />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-heading mb-12" data-aos="fade-down">Why RAK Engineering is the Reliable Choice</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-navy rounded-xl shadow-2xl" data-aos="zoom-in" data-aos-delay={index * 150}>
              <stat.icon className="w-12 h-12 text-accent-orange mx-auto mb-4" />
              <p className="text-5xl font-extrabold mb-2">{stat.number}</p>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;