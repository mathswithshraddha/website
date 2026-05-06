import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";

export const metadata = {
  title: "Gallery | Maths with Shraddha",
  description: "Glimpses of our vibrant learning environment, student achievements, and the joy of mastering mathematics together.",
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <Navbar />
      <GallerySection />
    </main>
  );
}
