"use client";

import { useState } from "react";
import {
  Heart,
  CreditCard,
  Shield,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const amounts = [25, 50, 100, 250, 500, 1000];

const impactItems = [
  { amount: "$25", impact: "Provides school supplies for 5 children" },
  { amount: "$50", impact: "Feeds a family for a month" },
  { amount: "$100", impact: "Sponsors a sewing machine" },
  { amount: "$250", impact: "Funds a community health clinic visit" },
  { amount: "$500", impact: "Supports a school renovation" },
  { amount: "$1,000", impact: "Launches a women's business program" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const displayAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_var(--color-secondary)_0%,_transparent_60%)]" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/10">
              <Heart className="w-4 h-4 text-white fill-white" />
              501(c)(3) Tax-Deductible
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Make a Donation
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your generous donation empowers women, transforms families, and
              builds stronger communities across Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Ways to Donate
            </h2>
            <p className="mt-4 text-text-light max-w-2xl mx-auto">
              Choose your preferred payment method to support our mission
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* PayPal */}
            <AnimatedSection delay={0.1}>
              <div className="bg-warm-white rounded-2xl p-8 border border-warm-gray hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">PayPal</h3>
                <p className="text-text-light text-sm mb-4">
                  Donate securely using PayPal
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 border border-warm-gray">
                  <p className="text-xs text-text-light mb-1">PayPal ID</p>
                  <p className="font-mono text-sm font-bold text-dark break-all">
                    DPHU82NS86SSL
                  </p>
                </div>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=DPHU82NS86SSL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Donate via PayPal
                </a>
              </div>
            </AnimatedSection>

            {/* MTN Mobile Money */}
            <AnimatedSection delay={0.2}>
              <div className="bg-warm-white rounded-2xl p-8 border border-warm-gray hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  MTN Mobile Money
                </h3>
                <p className="text-text-light text-sm mb-4">
                  For donors in Ghana
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 border border-warm-gray">
                  <p className="text-xs text-text-light mb-1">Mobile Number</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-lg font-bold text-dark">
                      0538 790 779
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('0538790779');
                        alert('Number copied to clipboard!');
                      }}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-lg hover:bg-secondary/20 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <p className="text-xs font-semibold text-dark mb-2">
                    How to donate:
                  </p>
                  <ol className="text-xs text-text-light space-y-1">
                    <li>1. Dial *170#</li>
                    <li>2. Select "Send Money"</li>
                    <li>3. Enter: 0538 790 779</li>
                    <li>4. Enter amount & confirm</li>
                  </ol>
                </div>
              </div>
            </AnimatedSection>

            {/* Zelle */}
            <AnimatedSection delay={0.3}>
              <div className="bg-warm-white rounded-2xl p-8 border border-warm-gray hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Zelle</h3>
                <p className="text-text-light text-sm mb-4">
                  Quick & easy bank transfer
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 border border-warm-gray">
                  <p className="text-xs text-text-light mb-1">Email Address</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-sm font-bold text-dark break-all">
                      bellaafrica23@gmail.com
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('bellaafrica23@gmail.com');
                        alert('Email copied to clipboard!');
                      }}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-lg hover:bg-accent/20 transition-colors shrink-0"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-warm-gray">
                  <p className="text-xs text-text-light">
                    Use your bank's Zelle feature to send donations directly to
                    our email address
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Info */}
          <AnimatedSection delay={0.4}>
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-2">
                    Tax-Deductible Donations
                  </h4>
                  <p className="text-text-light text-sm">
                    Bella Africa is a registered 501(c)(3) nonprofit organization.
                    All donations are tax-deductible to the fullest extent allowed
                    by law. You will receive a receipt for your donation via email.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </>
  );
}
