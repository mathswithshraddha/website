import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import CoreStory from "@/components/CoreStory";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/about",
  title: "About | Maths with Shraddha",
  description:
    "Learn about Shraddha Panchal's teaching philosophy, mission, qualifications, and mathematics teaching experience since 1991.",
});

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <CoreStory isShort={false} />
      
      {/* Reused from landing page */}
      <Testimonials />
      <FinalCTA />
      
    </main>
  );
}
