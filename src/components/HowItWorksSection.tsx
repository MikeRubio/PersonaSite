import React from "react";
import { Download, Settings, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Install Extension",
    description:
      "Add PersonaLens to your Chrome browser and create your free account to get your API key.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: Settings,
    title: "Select Persona",
    description:
      "Choose which user perspective you want to test from our comprehensive library of 6 different personas.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: Zap,
    title: "Get AI Insights",
    description:
      "Receive detailed, actionable reports with specific recommendations to improve your site's accessibility.",
    color: "from-green-500 to-emerald-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How PersonaLens
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with accessibility testing in three simple steps. No
            complex setup required.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                      <span className="text-sm font-bold text-gray-700">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
