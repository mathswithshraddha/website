import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";
import JsonLd from "@/components/seo/JsonLd";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import { buildInstructorSchema, buildOrganizationSchema } from "@/lib/seo/schema";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${fredoka.className} ${fredoka.variable} font-sans min-h-screen flex flex-col bg-background text-primary`}>
        <JsonLd data={[buildOrganizationSchema(), buildInstructorSchema()]} />
        <Preloader />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
