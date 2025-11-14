// client/src/pages/Services.jsx (UPDATED - Dual Photo Hover Effect)

import React from 'react';
import { Scissors, Factory, Wrench, Package, ArrowRight, Cog, Truck } from 'lucide-react'; 
// ArrowRight is used for link arrows within the list

// --- SERVICE DATA MAPPING ---
// Categories now include a second image (imageHover) for the changing effect
const SERVICE_CATEGORIES = [
    {
        title: "Metal Cutting & Processing",
        description: "Utilizing the latest technology for precise, high-definition cutting across all material types, including Plasma, Laser, and Waterjet.",
        icon: Scissors,
        colorClass: "text-accent-orange",
        image: "/CNC Plasma Cutting.jpg", 
        imageHover: "/Laser Cutting.jpg", // NEW: Second image for hover
        services: [
            { name: 'Plasma Cutting', slug: 'plasma-cutting' },
            { name: 'Laser Cutting', slug: 'laser-cutting' },
            { name: 'Waterjet Cutting', slug: 'waterjet-cutting' },
            { name: 'Shearing & Bending', slug: 'shearing' },
        ],
    },
    {
        title: "Heavy Fabrication & Forming",
        description: "Custom manufacturing of large structural frames, vessels, and complex components, supported by expert Rolling, Bending, and Welding capabilities.",
        icon: Factory,
        colorClass: "text-accent-blue",
        image: "/Structural Welding.jpg", 
        imageHover: "/Fabricated Orange.jpg", // NEW
        services: [
            { name: 'Heavy Structural Fabrication', slug: 'heavy-fabrication' },
            { name: 'Rolling & Profile Forming', slug: 'rolling-profile-rolling' },
            { name: 'Skids & Assemblies', slug: 'skids-assemblies' },
        ],
    },
    {
        title: "CNC & Conventional Machining",
        description: "High-tolerance component manufacturing using advanced 5-axis CNC equipment, complemented by precision conventional lathe and milling work.",
        icon: Wrench,
        colorClass: "text-navy",
        image: "/cnc part.png", 
        imageHover: "/convectional check.png", // NEW
        services: [
            { name: 'Precision CNC Machining', slug: 'cnc-machining' },
            { name: 'Conventional Lathe & Milling', slug: 'conventional-machining' },
            { name: 'Component Inspection (QA)', slug: 'convectional-check' },
        ],
    },
    {
        title: "Maintenance & Engine Rebuilding",
        description: "Specialized in-situ maintenance, overhaul, and repair services for heavy industrial equipment, including certified diesel engine rebuilding.",
        icon: Cog,
        colorClass: "text-orange-600",
        image: "/engine-hole.png", 
        imageHover: "/Inner-Align.png", // NEW
        services: [
            { name: 'Site Maintenance & Overhaul', slug: 'site-maintenance' },
            { name: 'Engine Block Rebuilding', slug: 'engine-rebuilding' },
            { name: 'Hydraulic Cylinder Repair', slug: 'cylinder-pipe' },
        ],
    },
    {
        title: "Turnkey Solutions & Consultancy",
        description: "From conceptual design and engineering consultancy to final component supply and project management, offering full end-to-end service.",
        icon: Package,
        colorClass: "text-gray-500",
        image: "/Fabrication on Truck.jpg", 
        imageHover: "/Material Storage.jpg", // NEW
        services: [
            { name: 'Turnkey Project Management', slug: 'turnkey-management' },
            { name: 'General Engineering Consultancy', slug: 'consultancy' },
            { name: 'Specialized Component Supply', slug: 'component-supply' }
        ],
    },
];

const Services = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Header */}
            <header className="bg-dark-grayish-blue py-16 text-center text-white">
                <div className="container mx-auto px-4" data-aos="fade-down">
                    <h1 className="text-5xl font-heading mb-3">Comprehensive Engineering Services</h1>
                    <p className="text-lg text-gray-400">
                        From precision cutting to heavy structural fabrication, we cover your complete mechanical requirements.
                    </p>
                </div>
            </header>

            {/* Service Categories Grid with Image Integration (Photo Mosaic) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        
                        {SERVICE_CATEGORIES.map((category, index) => (
                            <div 
                                key={category.title}
                                className={`group grid lg:grid-cols-2 gap-12 items-start ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* 1. Image Column - Now set up for dual photo transition */}
                                <div 
                                    className={`relative w-full h-96 rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                >
                                    {/* Image 1: Default Image (Visible initially, fades out on hover) */}
                                    <img 
                                        src={category.image} 
                                        alt={category.title + " primary"} 
                                        className="absolute inset-0 w-full h-full object-cover 
                                                   transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                                    />
                                    {/* Image 2: Hover Image (Hidden initially, fades in on hover) */}
                                    <img 
                                        src={category.imageHover} 
                                        alt={category.title + " secondary"} 
                                        className="absolute inset-0 w-full h-full object-cover 
                                                   transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                                    />
                                </div>
                                
                                {/* 2. Service Category Card */}
                                <div 
                                    className={`p-8 bg-off-white rounded-xl shadow-lg border-t-4 ${category.colorClass.replace('text-', 'border-')}`}
                                    data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                                >
                                    {/* ServiceCategory Content */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <category.icon className={`w-10 h-10 ${category.colorClass}`} />
                                        <h3 className="text-3xl font-heading text-navy">{category.title}</h3>
                                    </div>
                                    
                                    <p className="text-text-dark/80 mb-6">{category.description}</p>
                                    
                                    <ul className="space-y-3">
                                        {category.services.map((service, idx) => (
                                            <li 
                                                key={idx} 
                                                className="border-b border-light-gray pb-2 hover:border-accent-orange transition-colors duration-200"
                                            >
                                                {/* Linking to the individual service detail page */}
                                                <a 
                                                    href={`/services/${service.slug}`} 
                                                    className="flex justify-between items-center text-lg font-medium text-navy hover:text-accent-orange group"
                                                >
                                                    <span>{service.name}</span>
                                                    <ArrowRight className="w-5 h-5 text-accent-blue transition-transform group-hover:translate-x-1" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;