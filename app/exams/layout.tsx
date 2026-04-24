import type { Metadata } from "next";
import "@/app/globals.css";
import ExamsNavbar from "@/components/exams/ExamsNavbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Maths with Shraddha | Maths Olympiad Coaching",
  description: "Expert mathematics and olympiad coaching in Mumbai and online. Grades 2-9. Book your free trial today.",
};

export default function ExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <ExamsNavbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <FloatingWhatsApp />
    </div>
  );
}