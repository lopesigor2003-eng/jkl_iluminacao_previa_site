/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsServicesSection } from './components/ProductsServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BudgetSimulatorSection } from './components/BudgetSimulatorSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Semantic Header with Navigation */}
      <Header />

      {/* Semantic Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section (Single H1) */}
        <Hero />

        {/* About / Quem Somos Section */}
        <AboutSection />

        {/* Products and Services Section */}
        <ProductsServicesSection />

        {/* Photo Gallery Section (6s Auto-Advance Carousel) */}
        <GallerySection />

        {/* Customer Testimonials & 45+ Google Reviews */}
        <TestimonialsSection />

        {/* Differentials & Facilities Section */}
        <FeaturesSection />

        {/* Interactive Fast Quote Simulator */}
        <BudgetSimulatorSection />
      </main>

      {/* Semantic Footer with Map & Contact */}
      <Footer />

      {/* Persistent Quick WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
