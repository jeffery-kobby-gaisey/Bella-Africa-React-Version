import {
  Stethoscope,
  Home as HomeIcon,
  DollarSign,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Services — Bella Africa",
  description:
    "Explore Bella Africa's programs: medical assistance, shelter support, funding, education, and more.",
};

const services = [
  {
    icon: Stethoscope,
    title: "Medical Assistance",
    desc: "We provide essential healthcare services to women and girls in underprivileged areas, ensuring access to medical care, health education, and preventive services.",
    details: [
      "Primary healthcare access",
      "Health education programs",
      "Preventive care services",
      "Maternal health support",
    ],
    color: "primary",
  },
  {
    icon: HomeIcon,
    title: "Shelter Support",
    desc: "We provide safe housing and shelter support for women and girls who are vulnerable or in crisis situations, ensuring they have a secure place to live.",
    details: [
      "Emergency housing",
      "Long-term shelter programs",
      "Safe house networks",
      "Housing assistance",
    ],
    color: "accent",
  },
  {
    icon: DollarSign,
    title: "Funding Support",
    desc: "We provide direct financial support to women entrepreneurs and community projects, helping them start businesses and create sustainable income sources.",
    details: [
      "Micro-financing",
      "Business grants",
      "Community project funding",
      "Entrepreneurship support",
    ],
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "Education Programs",
    desc: "We provide access to quality education and skills training for girls and young women, breaking cycles of poverty through knowledge.",
    details: [
      "Scholarship programs",
      "Skills-based training",
      "Literacy programs",
      "Mentorship",
    ],
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Economic Empowerment",
    desc: "We create opportunities for women to build sustainable livelihoods through vocational training, market access, and business development.",
    details: [
      "Vocational training",
      "Market access support",
      "Business development",
      "Cooperative formation",
    ],
    color: "secondary",
  },
  {
    icon: HeartHandshake,
    title: "Community Development",
    desc: "We invest in community infrastructure and programs that benefit women, families, and entire neighborhoods for generations.",
    details: [
      "Infrastructure projects",
      "Community programs",
      "Leadership development",
      "Capacity building",
    ],
    color: "accent",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our Services & Programs
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive support programs designed to empower women and
              transform communities across Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 shadow-sm border border-warm-gray hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-text-light"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
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
              Want to Support Our Programs?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Your donations directly fund these programs, creating real change
              in the lives of women and families across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Donate Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
