import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella Africa — Empowering Women & Transforming Communities",
  description:
    "Bella Africa is a 501(c)(3) nonprofit empowering women entrepreneurs across Africa through education, resources, and community development.",
  keywords: [
    "Bella Africa",
    "nonprofit",
    "women empowerment",
    "Africa",
    "Ghana",
    "community development",
  ],
  openGraph: {
    title: "Bella Africa — Empowering Women & Transforming Communities",
    description:
      "Support women entrepreneurs across Africa through education, resources, and community development programs.",
    url: "https://bellafrica.org",
    siteName: "Bella Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
