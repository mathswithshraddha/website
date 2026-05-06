import type { Metadata } from "next";
import { Fredoka, Fraunces } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mathswithshraddha.vercel.app"),
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${fredoka.variable} ${fraunces.variable} font-sans min-h-screen flex flex-col bg-background text-primary`}>
        <Preloader />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
