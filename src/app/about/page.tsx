"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Crown,
  TrendingUp,
  Target,
  Globe,
  CheckCircle2,
  Quote,
  User,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const backgroundImages = [
  "/gallery/sewing-1.jpg",
  "/gallery/salt 1.jpg",
  "/gallery/gari 1.jpg",
  "/hero-background-new.jpg",
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building a brighter future for women and families across Africa
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark">
                Empowering Women, Transforming Families
              </h2>
              <p className="mt-6 text-text-light leading-relaxed text-lg">
                Bella Africa is a federally recognized 501(c)(3) nonprofit
                organization dedicated to empowering women and transforming
                families across Africa. We mobilize financial, human, and
                material resources to support initiatives for the transformation
                of women and their whole families.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                We serve girls and young women in underprivileged areas in
                sub-Saharan Africa, tackling the challenges of poverty and
                gender that limit their opportunities. Our comprehensive
                approach addresses the root causes of inequality and creates
                pathways for sustainable change.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Women Empowered", value: "300+" },
                  { icon: Users, label: "Lives Transformed", value: "5000+" },
                  { icon: Globe, label: "Years Active", value: "3+" },
                  { icon: Target, label: "Active Projects", value: "4+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gray text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-bold text-dark">{stat.value}</p>
                    <p className="text-sm text-text-light mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community-Centered",
                desc: "We work directly with local communities to identify needs and implement sustainable solutions that create lasting change.",
              },
              {
                icon: Crown,
                title: "Women-Led",
                desc: "Our programs are designed and led by women, ensuring they address real community needs and create meaningful opportunities.",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Impact",
                desc: "We focus on long-term solutions that create lasting change in communities rather than quick fixes.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-warm-white border border-warm-gray hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark">
              Meet Our Founder & CEO
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-warm-white rounded-3xl p-8 lg:p-12 border border-warm-gray">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* CEO Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-square rounded-2xl bg-primary/10 border-2 border-primary/20 overflow-hidden">
                      <img src="/team/dalida-couturier.jpg" alt="Dalida Couturier" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* CEO Bio */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-2">
                      Dalida Couturier
                    </h3>
                    <p className="text-primary font-semibold mb-6">
                      Founder & CEO
                    </p>
                    <p className="text-text-light leading-relaxed mb-4">
                      Dalida Couturier is the visionary Founder and CEO of Bella
                      Africa, dedicated to empowering women and transforming
                      communities across Africa. Her leadership is driven by a
                      deep understanding of the challenges women face and a
                      commitment to providing practical solutions.
                    </p>
                    <p className="text-text-light leading-relaxed mb-6">
                      Under Dalida's guidance, Bella Africa has become a
                      federally recognized 501(c) Not for profit organization,
                      focusing on mobilizing resources to support women's
                      initiatives. Her approach emphasizes listening to women's
                      needs and implementing cost-efficient, impactful projects
                      that create lasting change.
                    </p>

                    {/* Quote */}
                    <div className="relative bg-white rounded-xl p-6 border-l-4 border-primary">
                      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                      <p className="text-dark italic leading-relaxed relative">
                        "Supporting women entrepreneurs is not only a moral
                        imperative but also a strategic investment in our
                        society. Women have immense potential, creativity, and
                        innovative ideas that can drive economic growth and
                        create a more inclusive business landscape."
                      </p>
                      <p className="text-primary font-semibold mt-4">
                        — Dalida Couturier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark">
              Our Dedicated Team
            </h2>
            <p className="mt-6 text-text-light leading-relaxed text-lg">
              Bella Africa is powered by a passionate team of professionals,
              volunteers, and community leaders including dedicated team leader
              Indira Tettegah who share our vision of empowering women and
              transforming communities across Africa. Our diverse team brings
              together expertise in community development, women's empowerment,
              education, and sustainable business practices.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              From our headquarters in Florida to our field operations in Ghana
              and beyond, our team works tirelessly to ensure that every project
              creates meaningful, lasting impact. We believe in the power of
              collaboration and the strength that comes from working together
              toward a common goal.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Indira Tettegah",
                role: "Team Leader",
                bio: "Indira Tettegah leads field operations with dedication and purpose, ensuring community initiatives are effectively delivered. She is passionate about creating lasting impact for women and families across Africa through strong, hands-on leadership.",
              },
              {
                name: "Samuel Quarcoopome",
                role: "Project Officer",
                bio: "Samuel Quarcoopome supports the planning and execution of Bella Africa's projects, helping ensure initiatives are delivered effectively and create meaningful impact in the communities served.",
              },
              {
                name: "Jeffery Gaisey",
                role: "Digital Services Manager",
                bio: "Jeffery Gaisey manages Bella Africa's digital services, supporting communication, partnerships, and the mission to empower women and transform communities across Africa.",
              },
            ].map((member, i) => {
              const imageMap: { [key: string]: string } = {
                "Indira Tettegah": "/team/indira-tettegah.jpg",
                "Samuel Quarcoopome": "/team/samuel-quarcoopome.jpg",
                "Jeffery Gaisey": "/team/jeffery-gaisey.jpg",
              };
              return (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray hover:shadow-lg transition-all h-full flex flex-col">
                  {/* Team Member Image */}
                  <div className="aspect-square rounded-xl bg-primary/10 border-2 border-primary/20 mb-6 overflow-hidden">
                    <img src={imageMap[member.name]} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-light leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
