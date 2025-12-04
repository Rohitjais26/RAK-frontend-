// client/src/pages/Home.jsx

import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import ServicesGrid from "../components/ServicesGrid";
import ProjectGallery from "../components/ProjectGallery";
import TrustSignals from "../components/TrustSignals";
import ClientsLogos from "../components/ClientsLogos";
import RegionalPresence from "../components/RegionalPresence";
import ImageSlideshow from "../components/ImageSlideshow";
import QhseSection from "../components/QhseSection"; // <-- NEW IMPORT
import CareersSummary from "../components/CareersSummary";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const Home = () => {
  useEffect(() => {
    // Update the document title for the Home page
    document.title = "Home | RAK Engineering"; 
  }, []);

  return (
    <div>
      {/* 1. HERO - Immediate Impact */}
      <Hero />
      
      {/* 2. CORE SERVICES/CAPABILITIES - What We Do (High Priority) */}
      <ServicesGrid /> 
      
      {/* 3. TRUST/CAPACITY STATS - Why Trust Us? (Certifications & Facility Size) */}
      <TrustSignals /> 
      <AboutSummary />
      
      {/* 4. FACILITY VISUALS - A Glimpse of our Work/Infrastructure */}
      <ImageSlideshow /> 
      
      {/* 5. FEATURED PROJECTS - Proof of Work */}
      <ProjectGallery limit={3} />
      <QhseSection /> 
      
      {/* 6. BRIEF ABOUT - Company Background (Moved down) */}
      
      <CareersSummary />
      
      {/* 7. CLIENTS/PARTNERS - Who We Work For */}
      
      
      {/* 8. REGIONAL FOOTPRINT - Location/Contact Anchor */}
      <RegionalPresence />
      <TestimonialsCarousel />
    </div>
  );
};

export default Home;