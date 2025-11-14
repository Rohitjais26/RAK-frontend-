// client/src/components/FloatingCTAS.jsx

import React from 'react';
import { Mail, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTAS = () => {
  return (
    // Fixed container on the bottom-right of the viewport
    <div className="fixed bottom-6 right-6 z-40 space-y-3">
        
        {/* 1. Request Quote CTA (Link to Contact Page) */}
        <Link 
            to="/contact" 
            className="flex items-center justify-center w-14 h-14 bg-accent-orange text-white rounded-full shadow-xl 
                       hover:bg-navy transition-colors duration-300 transform hover:scale-110 group"
            title="Request a Quote"
        >
            <FileText className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        </Link>

        {/* 2. WhatsApp Button */}
        <a 
            href="https://wa.me/971501234567" // Replace with your WhatsApp number
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl 
                       hover:bg-green-600 transition-colors duration-300 transform hover:scale-110 group"
            title="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
        </a>

        {/* 3. Direct Email/Contact Button */}
        <Link 
            to="/contact" 
            className="flex items-center justify-center w-14 h-14 bg-accent-blue text-white rounded-full shadow-xl 
                       hover:bg-navy transition-colors duration-300 transform hover:scale-110 group"
            title="Contact Us"
        >
            <Mail className="w-6 h-6" />
        </Link>
    </div>
  );
};

export default FloatingCTAS;