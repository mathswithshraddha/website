import Navbar from "@/components/Navbar";
import TeamsSection from "@/components/TeamsSection";

export const metadata = {
  title: "Our Team | Maths with Shraddha",
  description: "Meet Shraddha and the expert academic support team behind our olympiad math coaching.",
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <Navbar />
      <TeamsSection />
    </main>
  );
}
