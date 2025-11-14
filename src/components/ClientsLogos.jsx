// client/src/components/ClientsLogos.jsx (Formerly Testimonials)

import React from 'react';
import { Briefcase } from 'lucide-react';

// List of Major Clients from the PPT
const majorClients = [
    'JAN DE NUL', 'NMDC', 'VAN OORD', 'DEME', 
    'BOSKALIS', 'SCHLUMBERGER', 'AIR LIQUIDE', 'SAMSUNG C&T',
    'DP WORLD', 'STEVIN ROCK', 'EMIRATES GLOBAL ALUMINIUM', 'ADSB'
];

const ClientsLogos = () => {
    return (
        <section className="py-16 bg-off-white" data-aos="fade-up">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-heading text-navy mb-4">Trusted by Industry Leaders</h2>
                <p className="text-lg text-text-dark/70 mb-12 max-w-4xl mx-auto">
                    Our commitment to quality, integrity, and efficiency has made us the trusted partner for major names in dredging, oil & gas, and infrastructure across the Middle East.
                </p>
                
                {/* Visual Placeholder for Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {majorClients.map((client, index) => (
                        <div 
                            key={index} 
                            data-aos="zoom-in" 
                            data-aos-delay={index * 50}
                            className="w-full h-24 p-2 bg-white rounded-lg shadow-md flex items-center justify-center 
                                       hover:shadow-xl hover:border-red-600 border transition-all duration-300" // CHANGED hover:border-accent-orange
                        >
                            <p className="text-md font-semibold text-gray-700">{client}</p>
                        </div>
                    ))}
                </div>

                {/* Optional CTA to a detailed Clients Page */}
                <div className="mt-12">
                    <a href="/contact" className="inline-flex items-center space-x-2 text-red-600 font-semibold hover:text-navy transition-colors"> {/* CHANGED text-accent-orange to text-red-600 */}
                        <Briefcase className="w-5 h-5" />
                        <span>View Our Client Success Stories &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ClientsLogos;