// client/src/components/layout/Footer.jsx (UPDATED - Removed branch reference)

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        // Reverted background to the theme-specific 'bg-navy' class
        <footer className="bg-navy text-white pt-16">
            <div className="container mx-auto px-4">
                
                {/* Top Section: Logo, Description, and Social Media */}
                <div className="pb-10 border-b border-gray-700 grid md:grid-cols-4 gap-8">
                    
                    {/* Column 1: Logo & Mission */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img 
                                src="/converted_image.png" // RAK Engineering Logo
                                alt="RAK Engineering Logo" 
                                className="h-10 w-auto" 
                            />
                            <span className="text-2xl font-bold text-white">RAK <span className="text-red-600">Engineering</span></span>
                        </Link>
                        
                        <p className="text-gray-300 text-sm mb-4">
                            The premier, full-service metal fabrication and heavy engineering facility in the Middle East.
                        </p>
                        
                        {/* Social Media Links - Accent in Red */}
                        <div className="flex space-x-4">
                            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><Linkedin size={24} /></a>
                            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><Facebook size={24} /></a>
                            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><Twitter size={24} /></a>
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><Instagram size={24} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links - Red Hover */}
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-semibold mb-4 text-white">Quick Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-red-600 transition-colors">Gallery / Projects</Link></li>
                            <li><Link to="/careers" className="hover:text-red-600 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* NEW COLUMN: Core Services */}
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-semibold mb-4 text-white">Core Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/services/heavy-fabrication" className="hover:text-red-600 transition-colors">Heavy Fabrication</Link></li>
                            <li><Link to="/services/cnc-machining" className="hover:text-red-600 transition-colors">CNC Machining</Link></li>
                            <li><Link to="/services/site-maintenance" className="hover:text-red-600 transition-colors">Site Maintenance</Link></li>
                            <li><Link to="/services/plasma-cutting" className="hover:text-red-600 transition-colors">Metal Processing</Link></li>
                            <li><Link to="/services/consultancy" className="hover:text-red-600 transition-colors">Turnkey Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
                        {/* RAK Office */}
                        <address className="not-italic text-sm text-gray-300 space-y-3">
                            <p className="flex items-start space-x-2">
                                <MapPin size={18} className="mt-1 text-red-600 flex-shrink-0" />
                                <span>STREET - SHEIKH SAQR BIN MUHAMMAD AL QASIMI, AL SHAML, P.O. Box 5382, RAK, U.A.E.</span>
                            </p>
                            <p className="flex items-center space-x-2"><Mail size={18} className="text-red-600" /><a href="mailto:info@rakengineering.ae" className="hover:text-red-600">rak@rakengg.ae</a></p>
                            <p className="flex items-center space-x-2"><Phone size={18} className="text-red-600" /><span>+97172442028</span></p>
                        </address>
                        <Link to="/contact" className="mt-4 inline-block text-red-600 font-semibold hover:text-white transition-colors text-sm">
                            View Location →
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Office Hours */}
                <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-3 md:mt-0">
                        © Copyright {new Date().getFullYear()} All Rights Reserved. RAK Engineering.
                    </p>
                    <div className="order-1 md:order-2 flex space-x-4 items-center">
                        <p>Office Hours:</p>
                        <p className="font-semibold text-white">Mon - Sat | 8 AM to 7 PM</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;