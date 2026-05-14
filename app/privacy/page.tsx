import Navbar from "@/components/Navbar";
import Link from "next/link";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/privacy",
  title: "Privacy Policy | Maths with Shraddha",
  description:
    "Read our privacy policy to understand how Maths with Shraddha collects, uses, and protects your personal information.",
  robots: {
    index: false,
    follow: true,
  },
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-primary text-white px-8 py-3 rounded-full text-2xl sm:text-3xl font-heading font-bold shadow-md text-center">
              Privacy Policy
            </div>
            <p className="mt-4 text-sm text-gray-500">Last updated: May 2025</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h2>
              <p>When you enquire through our website, we collect personal information including your name, phone number, WhatsApp number, email address, and details about your child (name, grade, school board). This information is provided voluntarily by you when filling out our enquiry form.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide solely for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To contact you regarding your enquiry about our mathematics programs</li>
                <li>To schedule free trial sessions and consultations</li>
                <li>To send class schedules, study materials, and updates via WhatsApp</li>
                <li>To improve our teaching methods and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to any third parties. Your data is strictly used for enrollment and communication purposes related to Maths with Shraddha.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Data Security</h2>
              <p>We take appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Cookies</h2>
              <p>Our website may use cookies to improve your browsing experience. These are small files stored on your device that help us understand how visitors interact with our site. You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. Third-Party Links</h2>
              <p>Our website may contain links to external sites (such as YouTube). We are not responsible for the privacy practices or content of those sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please contact us at <a href="mailto:hello@mathswithshraddha.com" className="text-accent hover:underline">hello@mathswithshraddha.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><span className="font-semibold">Email:</span> <a href="mailto:hello@mathswithshraddha.com" className="text-accent hover:underline">hello@mathswithshraddha.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a href="tel:+919969174811" className="text-accent hover:underline">+91 99691 74811</a></p>
                <p><span className="font-semibold">Location:</span> Mumbai, Maharashtra, India</p>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-accent hover:underline text-sm">← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
