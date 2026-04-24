import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maths with Shraddha | Premium Mathematics & Olympiad Coaching",
  description: "Helping students from Grades 1–10 master concepts, excel in Olympiads, and develop lifelong problem-solving skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}>
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
