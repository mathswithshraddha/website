import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Maths with Shraddha | Premium Mathematics & Olympiad Coaching",
  description: "Shraddha Ma'am has been teaching mathematics since 1991 and holds B.Com., B.Ed. and CIDTT qualifications, helping students from Grades 1–10 master concepts and excel in Olympiads.",
  openGraph: {
    title: "Maths with Shraddha | Premium Mathematics Coaching",
    description: "Teaching mathematics since 1991 with B.Com., B.Ed. and CIDTT qualifications for Grades 1–10 and Olympiad preparation.",
    url: "https://mathswithshraddha.vercel.app",
    siteName: "Maths with Shraddha",
    images: [
      {
        url: "/MWS_NOBG.png", // Fallback to logo
        width: 800,
        height: 600,
        alt: "Maths with Shraddha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maths with Shraddha",
    description: "Teaching mathematics since 1991 with B.Com., B.Ed. and CIDTT qualifications.",
    images: ["/MWS_NOBG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-white text-gray-900`}>
        <Preloader />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
