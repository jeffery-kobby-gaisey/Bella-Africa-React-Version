import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Home as HomeIcon,
  DollarSign,
  GraduationCap,
  TrendingUp,
  Crown,
  Users,
  Handshake,
  BookOpen,
  Building2,
  Globe,
  Award,
  Shield,
  Eye,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImpactCounter from "@/components/ImpactCounter";

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Bella Africa Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/10">
                <Heart className="w-4 h-4 text-primary-light fill-primary-light" />
                501(c)(3) Nonprofit Organization
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Empowering Women.
                <span className="block mt-2 gradient-text">
                  Transforming Communities.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Bella Africa supports women entrepreneurs across Africa with the
                resources, training, and opportunities they need to build
                thriving businesses and stronger families.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/donate"
                  className="group px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Donate Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Our Story
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  See Our Work
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="py-16 bg-white border-y border-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
                <p className="text-sm md:text-base text-text-light mt-2">Lives Transformed</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">300+</p>
                <p className="text-sm md:text-base text-text-light mt-2">Women Empowered</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">3+</p>
                <p className="text-sm md:text-base text-text-light mt-2">Active Projects</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">3+</p>
                <p className="text-sm md:text-base text-text-light mt-2">Years of Impact</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== WELCOME ========== */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Welcome to Bella Africa
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Building a Brighter Future for{" "}
              <span className="gradient-text">Women & Families</span>
            </h2>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Bella Africa is a federally recognized 501(c)(3) nonprofit
              organization dedicated to empowering women and transforming
              families across Africa. We mobilize financial, human, and material
              resources to support initiatives for the transformation of women
              and their whole families.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community-Centered Approach",
                desc: "We work directly with local communities to identify needs and implement sustainable solutions.",
                color: "primary",
              },
              {
                icon: Crown,
                title: "Women-Led Initiatives",
                desc: "Our programs are designed and led by women, ensuring they address real community needs.",
                color: "accent",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Impact",
                desc: "We focus on long-term solutions that create lasting change in communities.",
                color: "secondary",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-gray hover:-translate-y-1">
                  <div
                    className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/about"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Learn More About Us
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-dark/20 text-dark font-semibold rounded-full hover:border-dark hover:bg-dark hover:text-white transition-all"
            >
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SPONSORS ========== */}
      <section className="py-16 bg-white border-y border-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Sponsors
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-dark">
              Trusted Partners in Our Mission
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              {
                name: "Global Donations",
                logo: "/sponsors/global-donations.png",
              },
              {
                name: "Hope for Children",
                logo: "/sponsors/hope-for-children.png",
              },
              {
                name: "501(c)(3) Public Charity",
                logo: "/sponsors/501c3-public-charity.png",
              },
              {
                name: "Charity Fundraising",
                logo: "/sponsors/charity-fundraising.png",
              },
            ].map((sponsor, i) => (
              <AnimatedSection key={sponsor.name} delay={i * 0.1}>
                <div className="flex items-center justify-center p-6 rounded-xl bg-warm-white border border-warm-gray">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services & Programs
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              How We Help
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Medical Assistance",
                desc: "We provide essential healthcare services to women and girls in underprivileged areas, ensuring access to medical care, health education, and preventive services.",
                color: "primary",
              },
              {
                icon: HomeIcon,
                title: "Shelter Support",
                desc: "We provide safe housing and shelter support for women and girls who are vulnerable or in crisis situations, ensuring they have a secure place to live.",
                color: "accent",
              },
              {
                icon: DollarSign,
                title: "Funding Support",
                desc: "We provide direct financial support to women entrepreneurs and community projects, helping them start businesses and create sustainable income sources.",
                color: "secondary",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group relative bg-warm-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-warm-gray overflow-hidden hover:-translate-y-1">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${item.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
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

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Featured Projects
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Making a Real Difference
            </h2>
            <p className="mt-4 text-text-light text-lg">
              in communities across Africa
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sewing Machine Initiative",
                desc: "We donated 50 manual sewing machines to 50 young ladies in the central region of Ghana, enabling them to create clothing for themselves, their families, and generate income.",
                videoUrl: "https://www.youtube.com/watch?v=n2sS7lnqE_0",
                image: "/projects/sewing-initiative.jpg",
                tag: "Economic Empowerment",
              },
              {
                title: "Gari Processing Machine",
                desc: "We established a garri processing facility within a community location, enabling women to process garri—one of the staple foods widely consumed across West Africa.",
                videoUrl:
                  "https://youtu.be/Bi5VXU4Geng?si=tRVjXk3qhOHHAXlJ",
                image: "/projects/gari-processing.jpg",
                tag: "Agricultural Innovation",
              },
            ].map((project, i) => (
              <AnimatedSection
                key={project.title}
                delay={i * 0.2}
                direction={i === 0 ? "left" : "right"}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-gray">
                  <div className="relative h-56 bg-dark flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors group-hover:scale-110 transition-transform"
                    >
                      <Play className="w-7 h-7 text-white ml-1" />
                    </a>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-light leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href="/projects"
                        className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-light font-semibold text-sm flex items-center gap-1 hover:text-dark hover:gap-2 transition-all"
                      >
                        Watch Video <Play className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors hover:shadow-lg hover:shadow-primary/25"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== GOALS ========== */}
      <section className="py-24 lg:py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Goals
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Supporting Women and Girls to{" "}
              <span className="text-white">Learn, Succeed, and Lead</span>
            </h2>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              We serve girls and young women in underprivileged areas in
              sub-Saharan Africa, tackling the challenges of poverty and gender
              that limit their opportunities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learn",
                desc: "Provide access to quality education and skills training for girls and young women.",
                color: "primary-light",
              },
              {
                icon: TrendingUp,
                title: "Succeed",
                desc: "Create opportunities for economic empowerment and career development.",
                color: "secondary",
              },
              {
                icon: Crown,
                title: "Lead",
                desc: "Develop leadership skills and create pathways for women to become community leaders.",
                color: "accent",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group text-center p-8 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-10 h-10 text-white`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GET INVOLVED ========== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get Involved
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Join Our Mission
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Volunteer */}
            <AnimatedSection direction="left">
              <div className="bg-warm-white rounded-2xl p-8 lg:p-10 border border-warm-gray">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">
                    Volunteer Opportunities
                  </h3>
                </div>
                <p className="text-text-light mb-8 leading-relaxed">
                  Join our mission on the ground in Africa or support us
                  remotely. We need passionate individuals with various skills.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      title: "Field Work in Ghana",
                      desc: "Direct project implementation, community assessment, and skills training",
                    },
                    {
                      icon: BookOpen,
                      title: "Remote Support",
                      desc: "Grant writing, social media, website development, and administrative support",
                    },
                    {
                      icon: GraduationCap,
                      title: "Skills Training",
                      desc: "Teaching sewing, business skills, and entrepreneurship to local women",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Partnerships */}
            <AnimatedSection direction="right">
              <div className="bg-warm-white rounded-2xl p-8 lg:p-10 border border-warm-gray">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">
                    Partnership Opportunities
                  </h3>
                </div>
                <p className="text-text-light mb-8 leading-relaxed">
                  Partner with us to create lasting change. We welcome
                  organizations, businesses, and individuals who share our
                  vision.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Building2,
                      title: "Corporate Partnerships",
                      desc: "CSR initiatives, employee volunteering, and sustainable development projects",
                    },
                    {
                      icon: Handshake,
                      title: "NGO Collaborations",
                      desc: "Joint projects, resource sharing, and capacity building",
                    },
                    {
                      icon: GraduationCap,
                      title: "Academic Partnerships",
                      desc: "Research collaborations, student programs, and knowledge exchange",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== WHY SUPPORT ========== */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Support Bella Africa?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Your Support Creates{" "}
              <span className="gradient-text">Lasting Change</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Impact",
                desc: "3+ years of experience with a track record of successful projects transforming hundreds of lives.",
                highlights: [
                  "500+ lives transformed",
                  "300+ women empowered",
                  "3 active projects",
                ],
              },
              {
                icon: Users,
                title: "Community-Centered",
                desc: "We work directly with local communities to identify needs and implement sustainable solutions.",
                highlights: [
                  "Local involvement",
                  "Sustainable solutions",
                  "Long-term impact",
                ],
              },
              {
                icon: Shield,
                title: "Transparency",
                desc: "As a 501(c)(3) nonprofit, we maintain complete transparency in how donations are used.",
                highlights: [
                  "Tax-deductible",
                  "Financial transparency",
                  "Regular reports",
                ],
              },
              {
                icon: Eye,
                title: "Women-Led",
                desc: "Our programs are designed and led by women, ensuring they address real community needs.",
                highlights: [
                  "Women-designed",
                  "Gender-focused",
                  "Community leadership",
                ],
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gray hover:shadow-lg transition-all group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs text-text-light"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
