"use client";

import { useState, useEffect } from "react";
import { Globe, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const backgroundImages = [
  "/gallery/sewing-1.jpg",
  "/gallery/salt 1.jpg",
  "/gallery/gari 1.jpg",
  "/hero-background-new.jpg",
];

const articles = [
  {
    title: "Sewing Dignity, Building Futures: Bella Africa Supports Future of Africa's Norviwo Clothing Studio",
    description: "Discover how Bella Africa is empowering women through vocational training and industrial sewing machines.",
    source: "The Voice of Africa",
    date: "March 4, 2026",
    url: "https://thevoiceofafrica.com/2026/03/04/sewing-dignity-building-futures-bella-africa-supports-future-of-africas-norviwo-clothing-studio/",
    image: "/press/march-article.jpg",
  },
  {
    title: "Making Africa More Beautiful, One Woman at a Time",
    description: "Learn about Bella Africa's mission to empower women and transform communities across Africa.",
    source: "The Voice of Africa",
    date: "January 12, 2026",
    url: "https://thevoiceofafrica.com/2026/01/12/making-africa-more-beautiful-one-woman-at-a-time/",
    image: "/press/january-article.jpg",
  },
];

export default function PressPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              In The News
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Press & Media Coverage
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Read about our impact and initiatives featured in the media
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.title} delay={index * 0.1}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl overflow-hidden border border-warm-gray hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Article Image */}
                    <div className="md:col-span-2 relative h-64 md:h-auto bg-warm-gray overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent md:bg-gradient-to-r" />
                    </div>
                    
                    {/* Article Content */}
                    <div className="md:col-span-3 p-8 lg:p-10">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-sm text-primary font-semibold">
                          {article.source}
                        </p>
                        <span className="text-text-light">•</span>
                        <div className="flex items-center gap-2 text-sm text-text-light">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-text-light leading-relaxed mb-6">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <ExternalLink className="w-5 h-5" />
                        Read Full Article
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Empty State for Future Articles */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center p-12 bg-white rounded-2xl border border-warm-gray">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-dark mb-2">
                More Coverage Coming Soon
              </h3>
              <p className="text-text-light">
                Stay tuned for more media features and press releases about our work
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
