import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/services", label: "Healthcare" },
  { href: "/projects", label: "Clean Water" },
  { href: "/services", label: "Economic Development" },
  { href: "/services", label: "Education" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Make a Difference?
            </h3>
            <p className="text-white/80 mt-2 text-lg">
              Your support creates lasting change in communities across Africa.
            </p>
          </div>
          <Link
            href="/donate"
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">
                Bella<span className="text-primary-light">Africa</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering women and transforming families across Africa by
              mobilizing resources to support women&apos;s initiatives and
              entrepreneurial dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                +233 538 790 779
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                info@bellafrica.org
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                Ghana, West Africa
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-primary-light shrink-0" />
                Always Available
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                Follow Us
              </h5>
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@bellaafrica23?_r=1&_t=ZS-94AKFdUMmLk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1HBoQWHTJn/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/bellaafrica23?igsh=Z25hbjQyNHV6ZXho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://youtube.com/@bellaafrica-e6h2c?si=cFljMQ6LUcBLHz1E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2023–{new Date().getFullYear()} Bella Africa. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs italic">
            &ldquo;Empowering communities, one life at a time&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
