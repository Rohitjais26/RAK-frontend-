// client/src/pages/About.jsx (UPDATED for RAK Engineering Profile)

import React from "react";
import { Award, ShieldCheck, Factory } from "lucide-react"; 

// Constants derived directly from Company Profile.pptx
const CORE_CAPABILITIES = [
    "Turnkey Industrial Projects",
    "CNC Machining and Heavy duty Machining with Conventional machines",
    "Structural Steel Fabrication like Skids, Base frames, Shelters, Vessels and Tanks"
];

const About = () => {
  return (
    <div className="pt-24">
      {/* ===== Hero Section ===== */}
      <header className="bg-gradient-to-r from-blue-900 to-navy text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 tracking-wide"
            data-aos="fade-down"
          >
            OUR LEGACY
          </h1>
          <p
            className="text-gray-300 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Home / About Us
          </p>
        </div>
      </header>

      {/* ===== 1. Company Legacy & Capabilities Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- Left Column (Text) --- */}
          <div data-aos="fade-right">
            <p className="text-lg font-semibold text-accent-orange mb-3">
              Established in 1994
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              RAK Engineering: Premier Metal Manufacturing Facility
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our company was originally established in 1994. The entity, RAK ENGINEERING METAL MANUFACTURING L.L.C., operates as a proud member of the Gulf Engineering Group, which took over the company in 2015. We are recognized as a dependable partner for delivering high-quality mechanical engineering and fabrication services.
            </p>
            <p className="text-navy font-medium text-lg leading-relaxed mb-8">
              The company name was officially changed from RAK ENGINEERING ELECTRO – MECHANICAL L.L.C. to RAK ENGINEERING METAL MANUFACTURING L.L.C..
            </p>
            
            {/* Core Job Scopes */}
            <h3 className="text-2xl font-bold text-accent-blue mb-4">
                Core Job Scopes
            </h3>
            <ul className="list-disc pl-5 text-lg text-text-dark/80 space-y-2">
                {CORE_CAPABILITIES.map((cap, index) => (
                    <li key={index}>{cap}</li>
                ))}
            </ul>
          </div>

          {/* --- Right Column (Image / Visual) --- */}
          <div
            className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
          >
            <img
              // Using a high-impact fabrication image
              src="/Structural Welding.jpg"
              alt="RAK Engineering Structural Fabrication"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ===== 2. Mission, Vision & Values (Retained but using PPT data) ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-navy mb-12"
            data-aos="fade-down"
          >
            Our Mission, Vision & Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Mission */}
            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent-blue hover:shadow-xl transition-all"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-accent-blue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver premium quality products and exceptional service to our clients, while strictly following industry best practices.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent-orange hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h3 className="text-2xl font-semibold text-accent-orange mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier, full-service metal fabrication facility in the Middle East and beyond.
              </p>
            </div>

            {/* Core Values */}
            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-navy hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Core Values
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Integrity</li>
                <li>Teamwork</li>
                <li>Efficiency</li>
                <li>Fulfilling our promised commitments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== 3. Quality and Certifications Section (NEW) ===== */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
                Certified Quality and Safety Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
                {/* ISO 9001 */}
                <div className="p-8 bg-gray-800/50 rounded-xl shadow-2xl border-l-4 border-green-500" data-aos="fade-up">
                    <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">ISO 9001: 2015</h3>
                    <p className="text-gray-300">Quality Management Systems</p>
                </div>
                {/* ISO 14001 */}
                <div className="p-8 bg-gray-800/50 rounded-xl shadow-2xl border-l-4 border-blue-500" data-aos="fade-up" data-aos-delay="150">
                    <Factory className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">ISO 14001: 2015</h3>
                    <p className="text-gray-300">Environmental Management Systems</p>
                </div>
                {/* ISO 45001 */}
                <div className="p-8 bg-gray-800/50 rounded-xl shadow-2xl border-l-4 border-orange-500" data-aos="fade-up" data-aos-delay="300">
                    <Award className="w-12 h-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">ISO 45001: 2018</h3>
                    <p className="text-gray-300">Occupational Health and Safety Management Systems</p>
                </div>
            </div>
        </div>
      </section>

      {/* Note: The old ProcessSteps component could be integrated here, but focusing on the factual PPT content is more effective for an About Us page. */}
      
    </div>
  );
};

export default About;