import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader, ChevronLeft, ChevronRight, Zap, ArrowRight } from 'lucide-react'; 
import useFetch from '../hooks/useFetch';

// Using a subset of the mock data from your existing file, but styled for the carousel.
const MOCK_PROJECTS = [
    {
        _id: 'proj1',
        title: 'Structural Steel Frame',
        category: 'Structural',
        description: 'Design, fabrication, and site assembly of a complex, heavy-duty steel support frame for a major industrial client.',
        galleryImages: ['/Structural Welding.jpg', '/fabrication.jpg'],
    },
    {
        _id: 'proj2',
        title: 'Large Diameter Pipe',
        category: 'Civil',
        description: 'Fabrication of large diameter, customized pipes and associated fittings for a regional infrastructure project.',
        galleryImages: ['/pipe work .jpg', '/fab in.png'],
    },
    {
        _id: 'proj3',
        title: 'Precision CNC Spindles',
        category: 'MEP',
        description: 'High-tolerance machining of proprietary component spindles using 5-axis CNC equipment and quality inspection.',
        galleryImages: ['/cnc part.png', '/convectional check.png'],
    },
    {
        _id: 'proj4',
        title: 'Custom Lifting Spreader',
        category: 'Commercial',
        description: 'Manufacture of a specialized, certified lifting beam painted in high-visibility orange, ready for transport.',
        galleryImages: ['/Fabricated Orange.jpg', '/Fabrication on Truck.jpg'],
    },
    {
        _id: 'proj5',
        title: 'Industrial Engine Overhaul',
        category: 'MEP',
        description: 'Complete overhaul and alignment of a large industrial engine component in our dedicated workshop facility.',
        galleryImages: ['/Big-Engine.png', '/Engine-Lathe.jpg'],
    },
    {
        _id: 'proj6',
        title: 'Outdoor Fabrication Site',
        category: 'Structural',
        description: 'Assembly and welding of large modular structural components within the protected outdoor fabrication yard.',
        galleryImages: ['/Outdoor Fabrication.jpg', '/workers.jpg'],
    },
];


// --- Helper Component: Carousel Card ---
const CarouselCard = ({ project, index }) => {
    const mainImage = project.galleryImages[0] || '/placeholder-project.jpg';
    
    return (
        <motion.div
            className="flex-shrink-0 w-[350px] md:w-[400px] h-[550px] relative rounded-xl overflow-hidden shadow-2xl bg-white group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Dynamic lift and shadow on hover
            whileHover={{ scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {/* Project Image - 2/3 of the card height */}
            <div className="w-full h-2/3 overflow-hidden">
                <img
                    src={mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Box - White background, 1/3 of the card height */}
            <div className="absolute bottom-0 w-full h-1/3 bg-white text-navy p-6 flex flex-col justify-between border-t-4 border-accent-orange/50">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>
                
                {/* View Project Link - Positioned at the bottom left */}
                <Link
                    to={`/projects/${project._id}`}
                    className="inline-flex items-center text-red-600 font-semibold text-sm hover:text-navy transition-colors group"
                >
                    + View Project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
};


// --- Main Component: ProjectGallery ---
const ProjectGallery = ({ limit = 0 }) => {
    // Relying on mock data
    const loading = false;
    const error = null; 

    // Projects list, showing up to 6 on the homepage regardless of limit prop for the carousel look
    const projectsToDisplay = MOCK_PROJECTS.slice(0, 6); 

    // Ref for controlling horizontal scroll
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Pixels to scroll (approx card width)
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };
    
    return (
        <section className="py-20 bg-off-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                
                {/* ===== Header Section (Matching the Image Style) ===== */}
                <div className="flex justify-between items-end mb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        {/* Small Header Text (light blue) */}
                        <p className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-2">
                            OUR PROJECTS
                        </p>
                        
                        {/* Large Headline (two lines) */}
                        <h2 className="text-5xl md:text-6xl font-extrabold text-navy leading-tight">
                            BUILT TO PERFORM <br />
                            PROVEN PROJECTS
                        </h2>
                    </motion.div>

                    {/* View All Button (Floating Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="hidden md:block" // Hide on small screens for a cleaner look
                    >
                        <Link
                            to="/projects"
                            className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors shadow-lg"
                        >
                            View All Projects
                        </Link>
                    </motion.div>
                </div>

                {/* ===== Horizontal Scrolling Project Grid (Carousel) ===== */}
                <div className="relative">
                    
                    {/* Horizontal Scroll Arrows (Left) */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/90 rounded-full shadow-xl hover:bg-gray-100 transition-all border border-gray-200"
                    >
                        <ChevronLeft className="w-6 h-6 text-navy" />
                    </button>
                    
                    {/* Project Cards Container - Enables horizontal scroll */}
                    <motion.div 
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-scroll no-scrollbar py-2" 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {projectsToDisplay.map((project, index) => (
                            <CarouselCard key={project._id} project={project} index={index} />
                        ))}
                    </motion.div>

                    {/* Horizontal Scroll Arrows (Right) */}
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/90 rounded-full shadow-xl hover:bg-gray-100 transition-all border border-gray-200"
                    >
                        <ChevronRight className="w-6 h-6 text-navy" />
                    </button>
                </div>

            </div>
        </section>
    );
};

// !!! The Essential Default Export !!!
export default ProjectGallery;