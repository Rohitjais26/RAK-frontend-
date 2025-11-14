// client/src/pages/ServiceDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ArrowRight, Scissors } from 'lucide-react';

const ServiceDetail = () => {
    // Get the slug from the URL (e.g., 'civil-engineering')
    const { slug } = useParams();

    // Fetch the specific service data. 
    // This assumes your backend has a route like /api/services/civil-engineering
    const { data: service, loading, error } = useFetch(`/api/services/${slug}`);

    if (loading) return <div className="text-center py-20">Loading Service Details...</div>;
    if (error || !service) return <div className="text-center py-20 text-red-600">Service not found or an error occurred.</div>;

    // Placeholder for data that should come from a more detailed backend Service Schema
    const detailedService = service || {
        title: slug.replace(/-/g, ' ').toUpperCase(),
        fullDescription: 'This is the detailed description for the ' + slug.replace(/-/g, ' ') + ' service. We cover all aspects from initial planning to final execution, ensuring compliance and quality in every step.',
        industries: ['Oil & Gas', 'Aviation', 'Marine'], // Placeholder data
        capabilities: ['Precision CNC Machining', 'Heavy Duty Lathe Work', 'Site Installation'], // Placeholder data
        imageUrl: 'https://via.placeholder.com/1200x400?text=' + slug.toUpperCase(),
    };

    return (
        <div className="pt-24 pb-12 bg-light-gray">
            {/* Hero Banner for Service */}
            <div className="relative h-96 overflow-hidden">
                <img 
                    src={detailedService.imageUrl} 
                    alt={detailedService.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-70 flex items-center justify-center">
                    <h1 
                        className="text-6xl font-extrabold text-white"
                        data-aos="fade-down"
                    >
                        {detailedService.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content (Description) */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-navy mb-4">Service Overview</h2>
                        <p className="text-text-dark/90 leading-relaxed">
                            {detailedService.fullDescription}
                        </p>

                        <div className="mt-8 pt-8 border-t">
                            <h3 className="text-2xl font-bold text-navy mb-4 flex items-center space-x-2">
                                <Briefcase className="w-6 h-6 text-accent-orange" />
                                <span>Key Capabilities</span>
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-text-dark/90 ml-4">
                                {detailedService.capabilities.map((cap, index) => (
                                    <li key={index}>{cap}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar (Industries & CTA) */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-accent-blue" data-aos="fade-left">
                            <h3 className="text-xl font-bold text-navy mb-4 flex items-center space-x-2">
                                <Layers className="w-5 h-5 text-accent-blue" />
                                <span>Industries Served</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {detailedService.industries.map((industry, index) => (
                                    <span key={index} className="px-3 py-1 bg-light-gray text-navy text-sm font-medium rounded-full">
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Quote CTA */}
                        <div className="bg-accent-orange p-6 rounded-xl text-white shadow-lg" data-aos="fade-left" data-aos-delay="200">
                            <h3 className="text-xl font-bold mb-3">Ready to Start?</h3>
                            <p className="mb-4">Contact our experts today for a detailed quote on this specific service.</p>
                            <a href="/contact" className="w-full inline-block text-center px-4 py-2 bg-white text-accent-orange font-semibold rounded-full hover:bg-navy hover:text-white transition-colors">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;