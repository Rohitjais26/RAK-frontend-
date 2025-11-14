// client/src/components/ServiceCategory.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCategory = ({ title, description, services, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4" 
         data-aos="fade-up" 
         data-aos-anchor-placement="top-bottom"
    >
      <div className="flex items-center space-x-4 mb-4">
        <Icon className={`w-10 h-10 ${colorClass}`} />
        <h3 className="text-3xl font-heading text-navy">{title}</h3>
      </div>
      
      <p className="text-text-dark/80 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li 
            key={index} 
            className="border-b border-light-gray pb-2 hover:border-accent-orange transition-colors duration-200"
          >
            <Link 
              to={`/services/${service.slug}`} 
              className="flex justify-between items-center text-lg font-medium text-navy hover:text-accent-orange group"
            >
              <span>{service.name}</span>
              <ArrowRight className="w-5 h-5 text-accent-blue transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategory;