import Navbar from "@/components/Navbar";
import TeamsSection from "@/components/TeamsSection";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/team",
  title: "Our Team | Maths with Shraddha",
  description: "Meet Shraddha and the expert academic support team behind our olympiad maths coaching.",
});

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <Navbar />
      <TeamsSection />
    </main>
  );
}
