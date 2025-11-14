// client/src/pages/Projects.jsx

import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

const Projects = () => {
  return (
    <div className="pt-24 min-h-screen">
      <header className="container mx-auto px-4 pb-10">
        <h1 className="text-5xl font-extrabold text-navy text-center">
          Our Portfolio of Work
        </h1>
        <p className="text-lg text-text-dark/70 text-center mt-3">
          Explore the projects that define our excellence in engineering and fabrication.
        </p>
      </header>
      
      {/* Renders the interactive filter and grid */}
      <ProjectGallery />
    </div>
  );
};

// !!! The Essential Default Export !!!
export default Projects;