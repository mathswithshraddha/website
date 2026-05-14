import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/gallery",
  title: "Gallery | Maths with Shraddha",
  description: "Glimpses of our vibrant learning environment, student achievements, and the joy of mastering mathematics together.",
});

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <Navbar />
      <GallerySection />
    </main>
  );
}
