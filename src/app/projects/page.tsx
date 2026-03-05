"use client";

import { useState, useEffect } from "react";
import { Play, ArrowRight, Scissors, School, Wheat, Pickaxe, Cog } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const backgroundImages = [
  "/gallery/sewing-1.jpg",
  "/gallery/salt 1.jpg",
  "/gallery/gari 1.jpg",
  "/hero-background-new.jpg",
];

const projects = [
  {
    title: "Industrial Machine",
    desc: "We proudly supported Future Of Africa with industrial machines to enhance vocational training and promote sustainable livelihoods.",
    videoUrl: "https://www.youtube.com/watch?v=PuGX8TnjYug",
    image: "/gallery/Industrial-sewing machine 1.jpg",
    tag: "Vocational Training",
    icon: Cog,
    impact: "Enhanced vocational training opportunities",
    status: "Completed",
  },
  {
    title: "Salt Mining",
    desc: "We have established a salt mining and processing facility within the Afiadenyigba community, enabling women to actively engage in the mining and processing of salt.",
    videoUrl: "https://youtube.com/shorts/S2MG6nW00TE?si=iLCrVIPx-2VpPunA",
    image: "/projects/salt-mining.jpg",
    tag: "Economic Development",
    icon: Pickaxe,
    impact: "Women empowered through salt mining",
    status: "Completed",
  },
  {
    title: "Gari Processing Machine",
    desc: "We established a garri processing facility within a community location, enabling women to process garri—one of the staple foods widely consumed across West Africa.",
    videoUrl: "https://youtu.be/Bi5VXU4Geng?si=tRVjXk3qhOHHAXlJ",
    image: "/projects/gari-processing.jpg",
    tag: "Agricultural Innovation",
    icon: Wheat,
    impact: "Women enabled to process staple foods",
    status: "Completed",
  },
  {
    title: "Sewing Machine Initiative",
    desc: "We donated 50 manual sewing machines to 50 young ladies in the central region of Ghana, enabling them to create clothing for themselves, their families, and generate income.",
    videoUrl: "https://www.youtube.com/watch?v=n2sS7lnqE_0",
    image: "/projects/sewing-initiative.jpg",
    tag: "Economic Empowerment",
    icon: Scissors,
    impact: "50 women equipped with sewing machines",
    status: "Completed",
  },
  {
    title: "School Renovation Project",
    desc: "We renovated schools in rural communities to create supportive learning environments, ensuring better educational opportunities for children.",
    videoUrl: "https://youtu.be/SH1gXEJ3GvA?si=uLpArE3FzRf4OSje",
    image: "/projects/school-renovation.jpg",
    tag: "Education",
    icon: School,
    impact: "Multiple schools renovated",
    status: "Completed",
  },
];

export default function ProjectsPage() {
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
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our Projects
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Making a real difference in communities across Africa through
              targeted, impactful initiatives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-warm-gray hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Video / Visual */}
                    <div className="md:col-span-2 relative h-64 md:h-auto bg-gradient-to-br from-dark to-dark-light overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-colors text-sm font-medium"
                          >
                            <Play className="w-4 h-4" />
                            Watch Video
                          </a>
                        )}
                      </div>
                      <div className="absolute top-4 left-4 flex gap-2 z-10">
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          {project.tag}
                        </span>
                        <span
                          className={`px-3 py-1 backdrop-blur-sm text-white text-xs font-semibold rounded-full ${
                            project.status === "Completed"
                              ? "bg-accent/90"
                              : "bg-secondary/90"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-dark mb-4">
                        {project.title}
                      </h3>
                      <p className="text-text-light leading-relaxed mb-6 text-lg">
                        {project.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-6">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {project.impact}
                      </div>
                      <div className="flex gap-4">
                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                          >
                            Watch Video <Play className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Help Us Reach More Communities
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Every donation helps us expand our projects and reach more women
              and families in need.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Support Our Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
