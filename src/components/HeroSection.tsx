import React from "react";
import {
  Eye,
  Download,
  Play,
  ArrowRight,
  CheckCircle,
  Chrome,
} from "lucide-react";
import { DemoVideoSection } from "./DemoVideoSection";

interface HeroSectionProps {
  onSignUpClick: () => void;
}

export function HeroSection({ onSignUpClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="ml-4 text-3xl font-bold text-white">PersonaLens</h1>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Test Your Website
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Through Every User's Eyes
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered accessibility testing that reveals how users with
            different abilities, languages, and needs experience your website.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Free for indie developers",
              "6 different user personas",
              "AI-powered insights",
              "Chrome extension",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white text-sm font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onSignUpClick}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center"
            >
              Get Your Free API Key
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://chromewebstore.google.com/detail/cglgioahlckbpkobooplpklngonaocfg?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center backdrop-blur-sm"
            >
              <Chrome className="mr-2 w-5 h-5" />
              Download Extension
            </a>
          </div>

          {/* Demo video */}
          <DemoVideoSection />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
