import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pt-24 min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-8xl font-extrabold text-accent-orange" data-aos="fade-down">404</h1>
      <h2 className="text-3xl font-bold text-navy mt-4 mb-4" data-aos="fade-up" data-aos-delay="200">
        Page Not Found
      </h2>
      <p className="text-lg text-text-dark/70 mb-8 max-w-md" data-aos="fade-up" data-aos-delay="300">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link 
        to="/" 
        className="px-8 py-3 bg-navy text-white font-semibold rounded-full shadow-lg hover:bg-accent-orange transition-all duration-300 transform hover:scale-105"
        data-aos="zoom-in" data-aos-delay="400"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;