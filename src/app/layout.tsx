import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corporatenexus.com"),
  title: {
    template: "%s | CorporateNexus",
    default: "CorporateNexus | Premium Digital Transformation",
  },
  description: "Enterprise solutions for modern brand identity and seamless content management.",
  openGraph: {
    title: "CorporateNexus | Premium Digital Transformation",
    description: "Enterprise solutions for modern brand identity and seamless content management.",
    url: "https://www.corporatenexus.com",
    siteName: "CorporateNexus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CorporateNexus Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
