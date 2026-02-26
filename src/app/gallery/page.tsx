"use client";

import { useState, useEffect } from "react";
import { Camera, Heart, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const backgroundImages = [
  "/gallery/sewing-1.jpg",
  "/gallery/salt 1.jpg",
  "/gallery/gari 1.jpg",
  "/hero-background-new.jpg",
];

const galleryProjects = [
  {
    title: "Industrial Machine",
    desc: "We proudly supported Future Of Africa with industrial machines to enhance vocational training and promote sustainable livelihoods",
    category: "Vocational Training",
    color: "accent",
    images: Array.from({ length: 18 }, (_, i) => ({
      title: `Industrial Machine ${i + 1}`,
      desc: "Supporting vocational training",
      imagePath: `/gallery/Industrial-sewing machine ${i + 1}.jpg`,
    })),
  },
  {
    title: "Salt Mining",
    desc: "Supporting sustainable salt mining operations and improving working conditions for local communities",
    category: "Economic Development",
    color: "accent",
    images: Array.from({ length: 18 }, (_, i) => ({
      title: `Salt Mining ${i + 1}`,
      desc: "Sustainable salt mining operations",
      imagePath: `/gallery/salt ${i + 1}.jpg`,
    })),
  },
  {
    title: "Gari Processing Machine",
    desc: "Modernizing cassava processing with advanced gari processing machines for increased productivity",
    category: "Agricultural Innovation",
    color: "secondary",
    images: Array.from({ length: 18 }, (_, i) => ({
      title: `Gari Processing ${i + 1}`,
      desc: "Advanced cassava processing",
      imagePath: `/gallery/gari ${i + 1}.jpg`,
    })),
  },
  {
    title: "Sewing Machine Initiative",
    desc: "Empowering women through sewing machine distribution and training programs across Ghana",
    category: "Economic Empowerment",
    color: "primary",
    images: Array.from({ length: 18 }, (_, i) => ({
      title: `Sewing Initiative ${i + 1}`,
      desc: "Empowering women through sewing",
      imagePath: `/gallery/sewing-${i + 1}.jpg`,
    })),
  },
];

export default function GalleryPage() {
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
              Our Gallery
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              See Our Impact
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore moments from our projects and witness the change happening
              across African communities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      

      {/* Project Gallery - Grouped by Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark">Project Highlights</h2>
            <p className="mt-4 text-text-light max-w-2xl mx-auto">
              Explore our key initiatives and see the impact we're making in communities across Africa
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {galleryProjects.map((project, projectIndex) => (
              <div key={project.title}>
                <AnimatedSection>
                  <div className="mb-8">
                    <span className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-text-light max-w-3xl">
                      {project.desc}
                    </p>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.images.map((image, imageIndex) => (
                    <AnimatedSection
                      key={image.title}
                      delay={imageIndex * 0.1}
                    >
                      <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-warm-gray">
                        <img src={image.imagePath} alt={image.title} className="w-full h-full object-cover" />
                        
                        {/* Overlay with info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-white font-bold text-sm mb-1">
                              {image.title}
                            </h4>
                            <p className="text-white/80 text-xs">{image.desc}</p>
                          </div>
                        </div>

                        {/* Heart icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
