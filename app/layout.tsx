import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XYZ Group | Premium Real Estate in India",
  description: "Discover luxury properties in Delhi NCR, Mumbai, and Bangalore with XYZ Group. Your trusted partner for premium real estate investments.",
  openGraph: {
    title: "XYZ Group | Premium Real Estate",
    description: "Discover luxury properties in Delhi NCR, Mumbai, and Bangalore with XYZ Group.",
    url: "https://xyzgroup.in", // Placeholder URL
    siteName: "XYZ Group",
    images: [
      {
        url: "/hero.png", // Fallback to local image or use actual URL in prod
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XYZ Group | Premium Real Estate",
    description: "Discover luxury properties in Delhi NCR, Mumbai, and Bangalore with XYZ Group.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "XYZ Group",
    "image": "https://xyzgroup.in/hero.png",
    "description": "Premium real estate consultancy in India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DLF Cyber City, Tower B",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "url": "https://xyzgroup.in"
  };

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
