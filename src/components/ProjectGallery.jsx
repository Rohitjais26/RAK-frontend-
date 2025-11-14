import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { Loader, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_CATEGORIES = ['All', 'Civil', 'MEP', 'Structural', 'Commercial', 'Residential'];

const MOCK_PROJECTS = [
    {
        _id: 'proj1',
        title: 'Heavy Structural Steel Frame',
        category: 'Structural',
        description: 'Design, fabrication, and site assembly of a complex, heavy-duty steel support frame for a major industrial client.',
        galleryImages: ['/Structural Welding.jpg', '/fabrication.jpg'],
    },
    {
        _id: 'proj2',
        title: 'Large Diameter Pipeline Fabrication',
        category: 'Civil',
        description: 'Fabrication of large diameter, customized pipes and associated fittings for a regional infrastructure project.',
        galleryImages: ['/pipe work .jpg', '/fab in.png'],
    },
    {
        _id: 'proj3',
        title: 'Precision CNC Machined Spindles',
        category: 'MEP',
        description: 'High-tolerance machining of proprietary component spindles using 5-axis CNC equipment and quality inspection.',
        galleryImages: ['/cnc part.png', '/convectional check.png'],
    },
    {
        _id: 'proj4',
        title: 'Custom Fabricated Lifting Spreader',
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
        title: 'CNC Plasma Cutting Facility Work',
        category: 'Structural',
        description: 'High-precision cutting services for steel plates, managed within our dedicated CNC Plasma Cutting Area.',
        galleryImages: ['/cnc plasma cutting area.jpg', '/CNC Plasma Cutting.jpg'],
    },
    {
        _id: 'proj7',
        title: 'Engine Block Machining',
        category: 'MEP',
        description: 'Specialized work on engine blocks, including boring, honing, and cylinder head alignment using precision tools.',
        galleryImages: ['/engine-hole.png', '/engine.png'],
    },
    {
        _id: 'proj8',
        title: 'Outdoor Structural Fabrication Site',
        category: 'Structural',
        description: 'Assembly and welding of large modular structural components within the protected outdoor fabrication yard.',
        galleryImages: ['/Outdoor Fabrication.jpg', '/workers.jpg'],
    },
    {
        _id: 'proj9',
        title: 'Project Laydown Area Management',
        category: 'Civil',
        description: 'Efficient setup and operation of the materials staging and laydown area, crucial for large-scale construction support.',
        galleryImages: ['/site view.jpg', '/view site .jpg'],
    },
    {
        _id: 'proj10',
        title: 'Civil Component Quality Inspection',
        category: 'Civil',
        description: 'Rigorous inspection, measurement, and quality control procedures applied to large fabricated civil components before installation.',
        galleryImages: ['/lengthing.jpg', '/pipe work .jpg'],
    },
];

const ProjectGallery = ({ limit = 0 }) => {
    const { data: fetchedProjects, loading, error } = useFetch('/api/projects');
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const sourceProjects =
            fetchedProjects && fetchedProjects.length > 0
                ? fetchedProjects
                : MOCK_PROJECTS;

        let filtered = sourceProjects;
        if (filter !== 'All') filtered = sourceProjects.filter(p => p.category === filter);
        if (limit > 0) filtered = filtered.slice(0, limit);

        setFilteredProjects(filtered);
    }, [fetchedProjects, filter, limit]);

    if (loading && MOCK_PROJECTS.length === 0)
        return (
            <div className="text-center py-20">
                <Loader className="animate-spin w-8 h-8 mx-auto text-accent-orange" />
                Loading Project Portfolio...
            </div>
        );

    if (error && filteredProjects.length === 0)
        return (
            <div className="text-center py-20 text-red-600">
                Failed to load projects. Showing mock data.
            </div>
        );

    if (filteredProjects.length === 0)
        return (
            <div className="text-center py-20 text-lg text-text-dark/80">
                No projects available.
            </div>
        );

    return (
        <section className="container mx-auto px-4 py-20 bg-gray-50 relative overflow-hidden">
            <motion.h2
                className="text-4xl font-extrabold text-center text-navy mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Our Project Portfolio
            </motion.h2>

            {/* Filter Buttons */}
            {limit === 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {PROJECT_CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${
                                filter === cat
                                    ? 'bg-red-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-navy border border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {/* Projects Grid */}
            <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                }}
            >
                {filteredProjects.map((project, index) => (
                    <HoverSlideshowCard key={project._id} project={project} index={index} />
                ))}
            </motion.div>

            {/* View All Projects CTA */}
            {limit > 0 && (
                <div className="text-center mt-14" data-aos="fade-up">
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-navy transition-colors"
                    >
                        View Our Full Portfolio &rarr;
                    </Link>
                </div>
            )}
        </section>
    );
};

// 🧠 Mini Component: Hover Slideshow Card
const HoverSlideshowCard = ({ project, index }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [hovering, setHovering] = useState(false);

    // Start slideshow only when hovered
    useEffect(() => {
        let interval;
        if (hovering && project.galleryImages.length > 1) {
            interval = setInterval(() => {
                setCurrentImage(prev => (prev + 1) % project.galleryImages.length);
            }, 1200); // faster image cycle speed
        }
        return () => clearInterval(interval);
    }, [hovering, project.galleryImages.length]);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {/* Animated Image Slideshow */}
            <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={project.galleryImages[currentImage]}
                        src={project.galleryImages[currentImage] || '/placeholder-project.jpg'}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <motion.span
                    className="absolute bottom-4 left-4 text-white bg-black/40 px-3 py-1 rounded text-sm font-semibold uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {project.category}
                </motion.span>
            </div>

            {/* Text Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {project.description}
                </p>
                <Link
                    to={`/projects/${project._id}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-navy transition-colors"
                >
                    View Details
                    <Zap className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectGallery;
