"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have questions or want to get involved? We&apos;d love to hear
              from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Reach Out to Us
                </h2>
                <p className="text-text-light leading-relaxed mb-8">
                  Whether you want to volunteer, partner with us, or simply
                  learn more about our mission, we&apos;re here to connect.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+233 538 790 779",
                      href: "tel:+233538790779",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@bellafrica.org",
                      href: "mailto:info@bellafrica.org",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Ghana, West Africa",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: "Availability",
                      value: "Always Available",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-light">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-dark font-semibold hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-dark font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-warm-gray">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-dark">
                      Send Us a Message
                    </h3>
                  </div>

                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-dark mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-text-light">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Subject
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-text">
                          <option>General Inquiry</option>
                          <option>Volunteer</option>
                          <option>Partnership</option>
                          <option>Donation</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
