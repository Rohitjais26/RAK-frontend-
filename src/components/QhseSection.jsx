import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CERTIFICATIONS = [
  "ISO 9001:2015 (Quality Management)",
  "ISO 14001:2015 (Environmental Management)",
  "ISO 45001:2018 (Health & Safety Management)",
  "Compliant with EN 1090-1 (EXC-4)",
  "DNV-approved welding workshop",
];

const QHSE_TEXT = [
  "RAK Engineering prioritizes the safety and wellbeing of every employee, client, and partner, ensuring secure operations across onshore and offshore activities.",
  "We strongly believe that growth is sustainable only when built on a culture of care. Safety remains a core value that shapes every decision and execution on site.",
  "Our Quality Management System (QMS) supports continuous improvement and excellence through structured and compliant processes.",
];

const QhseSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#E8F1FF] via-white to-[#F4F8FF] overflow-hidden">
      
      {/* Soft geometric highlights for premium look */}
      <div className="absolute w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-[140px] top-[-100px] right-[-100px]"></div>
      <div className="absolute w-[380px] h-[380px] bg-blue-100/40 rounded-full blur-[120px] bottom-[-80px] left-[-80px]"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            QHSE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Committed to{" "}
            <span className="text-blue-700">Quality, Health,Safety & Environment</span>
            
          </h2>

          {QHSE_TEXT.map((text, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed">
              {text}
            </p>
          ))}

          <h3 className="text-2xl font-bold text-blue-700 pt-4">
            Recognized Certifications
          </h3>

          <ul className="space-y-3">
            {CERTIFICATIONS.map((cert, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about#certifications"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 mt-6"
          >
            View QHSE Policy
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-300/40 rounded-3xl blur-2xl"></div>
          <img
            src="/RE Worker.jpg"
            alt="Worker Safety"
            className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QhseSection;

