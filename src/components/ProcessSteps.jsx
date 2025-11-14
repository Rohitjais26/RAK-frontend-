import React from "react";
import { ClipboardList, Settings, ShieldCheck } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "01.",
      title: "Project Planning & Consultation",
      icon: ClipboardList,
      description:
        "Understanding customer requirements and offering expert guidance with customized engineering solutions to establish a clear project scope.",
    },
    {
      number: "02.",
      title: "Engineering & Manufacturing",
      icon: Settings,
      description:
        "Utilizing advanced CNC & Conventional Machining, Fabrication, and In-situ capabilities to manufacture and repair critical components.",
    },
    {
      number: "03.",
      title: "Quality Assurance & Delivery",
      icon: ShieldCheck,
      description:
        "Ensuring precision, durability, and timely delivery through strict quality checks and ISO 9001:2015 certified processes.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          data-aos="fade-down"
        >
          Our Customer-Centric Process
          <span className="block text-blue-600 dark:text-blue-400">
            How It Works
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border-t-4 border-blue-500 hover:border-orange-500 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Step Number */}
                <p className="text-6xl font-extrabold text-blue-500/10 mb-4">
                  {step.number}
                </p>

                {/* Icon + Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl group-hover:bg-orange-100 dark:group-hover:bg-orange-900 transition-all">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-orange-500 transition" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Accent Hover Glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
