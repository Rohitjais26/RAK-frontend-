import React, { useRef, useMemo, useEffect, useState } from 'react'; // <-- ADDED useState
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
    {
        id: 1,
        quote: "RAK Engineering delivered exceptional support during the complex dry dock project. Their expertise and dedication ensured we met stringent environmental standards. We are proud to partner with them.",
        name: "Mohamed Elsayed Abrahim",
        title: "Senior Director, Fleet Management & Resources",
        company: "NMDC Group",
        avatar: "/RE Worker.jpg" 
    },
    {
        id: 2,
        quote: "APT Global achieved what many believed impossible by completing the ship lift upgrades within 60 days of downtime. Their attention to detail ensured the project's success. Highly recommended.",
        name: "Nils Rolland",
        title: "COO",
        company: "Syncolift AS",
        avatar: "/workers.jpg" 
    },
    {
        id: 3,
        quote: "RAK Marine and Offshore Engineering UAE proved to be a reliable partner throughout the process. They worked diligently to complete the project in line with our stringent expectations.",
        name: "Jan Van De Velde",
        title: "Director New Building",
        company: "Jan De Nul",
        avatar: "/Team Briefing.jpg" 
    },
    {
        id: 4,
        quote: "The quality requirement for structural fabrication was top tier. RAK's team showed excellent technical expertise and timely execution, consistently exceeding our expectations within a very tight timeline.",
        name: "Sarah Chen",
        title: "Project Lead",
        company: "BOSKALIS Infrastructure",
        avatar: "/fabrication.jpg" 
    },
    {
        id: 5,
        quote: "We chose RAK for their capability in heavy-duty conventional machining. The precision on the large spindle components was flawless, saving us significant time and cost on engine overhaul.",
        name: "David Lee",
        title: "Engineering Manager",
        company: "Oil & Gas Services",
        avatar: "/cnc part.png" 
    },
];

// Duplicate the list for the seamless infinite loop effect
const LOOP_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];
// Note: Increased loop duration for slower, more subtle movement
const LOOP_DURATION = 80; 

const TestimonialsCarousel = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // Calculate the total width of the repeating carousel items (for the loop animation)
    useEffect(() => {
        const calculateWidth = () => {
            if (scrollRef.current) {
                // Measure the width of the first half of the duplicated list
                let totalWidth = 0;
                // Since space-x-8 (32px) padding exists, we measure all cards including margin
                const cardElements = Array.from(scrollRef.current.children);
                
                // Only measure the first set of testimonials (half the list)
                for (let i = 0; i < TESTIMONIALS.length; i++) {
                    if (cardElements[i]) {
                        // Get the outer width including margin (offsetWidth + 32px gap)
                        totalWidth += cardElements[i].offsetWidth + 32;
                    }
                }
                // The total width of the carousel track is fixed, no need to subtract the last margin
                setContainerWidth(totalWidth);
            }
        };

        // Recalculate width on resize
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, []); 

    // --- Manual Scroll (Retained for touch/non-animation devices, though hidden) ---
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 450;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };
    // --- End Manual Scroll ---


    // Animation variants for the moving loop
    const carouselVariants = {
        animate: {
            // Move left by exactly the calculated width of the original content block
            x: -containerWidth, 
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: LOOP_DURATION, 
                    ease: "linear",
                },
            },
        },
    };

    // Only enable the animation once the width calculation is complete
    const isLoopReady = containerWidth > 0;

    return (
        <section className="py-24 bg-off-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                
                {/* ===== Header Section (Enhanced Visuals) ===== */}
                <div className="flex justify-between items-end mb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <p className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-2">
                            TESTIMONIALS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                            PROJECT TESTIMONIAL <br />
                            <span className="text-red-600">BUILT ON TRUST</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="hidden md:block" 
                    >
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors shadow-md"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>

                {/* --- Carousel Container --- */}
                <div className="relative">
                    
                    {/* Outer container hides the overflow */}
                    <div ref={containerRef} className="overflow-hidden py-4"> 
                        <motion.div
                            ref={scrollRef}
                            className="flex space-x-8"
                            variants={carouselVariants}
                            animate={isLoopReady ? "animate" : undefined}
                            // Initial position must be set to 0 to start the animation correctly
                            initial={{ x: 0 }} 
                        >
                            {LOOP_TESTIMONIALS.map((t, index) => (
                                <motion.div
                                    key={`${t.id}-${index}`} 
                                    className="flex-shrink-0 w-80 md:w-96 bg-white p-8 rounded-xl shadow-xl border-t-4 border-accent-orange/50 transition-shadow duration-300"
                                    whileHover={{ scale: 1.01, boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1)' }}
                                >
                                    {/* Quote Icon */}
                                    <MessageCircle className="w-8 h-8 text-accent-blue mb-4 rotate-180" />
                                    
                                    {/* Quote Text */}
                                    <p className="text-xl italic text-navy mb-6 leading-relaxed">
                                        "{t.quote}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center space-x-4 border-t pt-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                                            <img 
                                                src={t.avatar} 
                                                alt={t.name} 
                                                className="w-full h-full object-cover" 
                                                onError={(e) => { e.target.onerror = null; e.target.src="/converted_image.png" }} 
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy">{t.name}</p>
                                            <p className="text-sm text-red-600 font-semibold">{t.title}</p>
                                            <p className="text-xs text-gray-500">{t.company}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;