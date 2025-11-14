import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import ServicesGrid from "../components/ServicesGrid";
import ProjectGallery from "../components/ProjectGallery";
import TrustSignals from "../components/TrustSignals";
import ClientsLogos from "../components/ClientsLogos"; // Renamed Testimonials to ClientsLogos
import RegionalPresence from "../components/RegionalPresence";
import ImageSlideshow from "../components/ImageSlideshow"; // <-- NEW IMPORT

const Home = () => {
  useEffect(() => {
    // Update the document title for the Home page
    document.title = "Home | RAK Engineering"; 
  }, []);

  return (
    <div>
      <Hero />
      <AboutSummary />
      <ImageSlideshow /> {/* <-- NEW COMPONENT PLACED HERE */}
      <RegionalPresence />
      
      <ServicesGrid />
      
      <TrustSignals />
      
      <ProjectGallery limit={3} /> {/* Show only 3 projects on homepage */}
      <ClientsLogos /> {/* Renamed component */}
      {/* Any other homepage sections */}
    </div>
  );
};

export default Home;